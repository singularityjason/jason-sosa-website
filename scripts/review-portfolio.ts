import { chromium, Browser, Page } from "@playwright/test";

const BASE_URL = "http://localhost:8083";
const SCREENSHOT_DIR = "./screenshots";

interface Viewport {
  name: string;
  width: number;
  height: number;
}

const viewports: Viewport[] = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 900 },
];

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function captureScreenshot(
  page: Page,
  viewport: Viewport,
  name: string
) {
  const filename = `${SCREENSHOT_DIR}/${viewport.name}-${name}.png`;
  await page.screenshot({ path: filename, fullPage: true });
  console.log(`  Captured: ${filename}`);
}

async function reviewPortfolio() {
  console.log("Starting Portfolio Visual Review with Playwright\n");

  const browser: Browser = await chromium.launch({ headless: true });

  for (const viewport of viewports) {
    console.log(`\n=== ${viewport.name.toUpperCase()} (${viewport.width}x${viewport.height}) ===\n`);

    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
    });
    const page = await context.newPage();

    // 1. Default Load State
    console.log("1. Capturing default load state...");
    await page.goto(`${BASE_URL}/portfolio`);
    await delay(2000); // Wait for animations
    await captureScreenshot(page, viewport, "01-default-load");

    // 2. Scroll to see full grid
    console.log("2. Capturing full page scroll...");
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await delay(500);
    await captureScreenshot(page, viewport, "02-scrolled-bottom");

    // Back to top
    await page.evaluate(() => window.scrollTo(0, 0));
    await delay(300);

    // 3. Test hover states (desktop only - hover doesn't work on touch)
    if (viewport.name === "desktop") {
      console.log("3. Capturing hover states...");

      // Find first bento cell and hover
      const cells = await page.locator('[class*="rounded-xl"][class*="cursor-pointer"]').all();

      if (cells.length > 0) {
        // Hover first cell
        await cells[0].hover();
        await delay(500);
        await captureScreenshot(page, viewport, "03-hover-first-cell");

        // Hover a different cell if available
        if (cells.length > 3) {
          await cells[3].hover();
          await delay(500);
          await captureScreenshot(page, viewport, "04-hover-fourth-cell");
        }

        // Test focus state (keyboard navigation)
        console.log("3b. Capturing focus states...");
        await cells[0].focus();
        await delay(300);
        await captureScreenshot(page, viewport, "03b-focus-first-cell");
      }
    }

    // 4. Test filter - Speaking & Media
    console.log("4. Testing Speaking & Media filter...");
    const speakingTab = page.getByRole("tab", { name: /speaking/i });
    if (await speakingTab.isVisible()) {
      await speakingTab.click();
      await delay(1000);
      await captureScreenshot(page, viewport, "05-filter-speaking-media");
    }

    // 5. Test filter - Technology & Innovation
    console.log("5. Testing Technology & Innovation filter...");
    const techTab = page.getByRole("tab", { name: /tech/i });
    if (await techTab.isVisible()) {
      await techTab.click();
      await delay(1000);
      await captureScreenshot(page, viewport, "06-filter-technology");
    }

    // Reset to All
    const allTab = page.getByRole("tab", { name: /all/i });
    if (await allTab.isVisible()) {
      await allTab.click();
      await delay(500);
    }

    // 6. Test search
    console.log("6. Testing search functionality...");
    const searchInput = page.getByPlaceholder(/search/i);
    if (await searchInput.isVisible()) {
      await searchInput.fill("AI");
      await delay(800);
      await captureScreenshot(page, viewport, "07-search-ai");

      // Clear and search for something that won't match
      await searchInput.fill("xyznonexistent");
      await delay(800);
      await captureScreenshot(page, viewport, "08-search-empty-state");

      // Clear search
      await searchInput.fill("");
      await delay(500);
    }

    // 7. Test sort dropdown
    console.log("7. Testing sort options...");
    const sortTrigger = page.locator('[role="combobox"]').first();
    if (await sortTrigger.isVisible()) {
      await sortTrigger.click();
      await delay(300);
      await captureScreenshot(page, viewport, "09-sort-dropdown-open");

      // Select Recent
      const recentOption = page.getByRole("option", { name: /recent/i });
      if (await recentOption.isVisible()) {
        await recentOption.click();
        await delay(800);
        await captureScreenshot(page, viewport, "10-sort-recent");
      }
    }

    // 8. Click a project to open modal (if clickable items exist)
    console.log("8. Testing modal interaction...");
    const clickableCells = await page.locator('[class*="rounded-xl"][class*="cursor-pointer"]').all();

    for (const cell of clickableCells.slice(0, 5)) {
      await cell.click();
      await delay(500);

      // Check if modal opened
      const modal = page.locator('[role="dialog"]');
      if (await modal.isVisible()) {
        await captureScreenshot(page, viewport, "11-modal-open");

        // Close modal
        const closeButton = modal.locator('button[class*="close"], button:has-text("×"), [aria-label*="close"], button:has(svg)').first();
        if (await closeButton.isVisible()) {
          await closeButton.click();
          await delay(300);
        } else {
          // Press Escape to close
          await page.keyboard.press("Escape");
          await delay(300);
        }
        break;
      }
    }

    await context.close();
  }

  await browser.close();

  console.log("\n=== REVIEW COMPLETE ===");
  console.log(`Screenshots saved to: ${SCREENSHOT_DIR}/`);
  console.log("\nNext: Analyze screenshots for frontend recommendations");
}

// Run the review
reviewPortfolio().catch(console.error);
