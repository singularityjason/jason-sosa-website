# CHANGELOG - jasonsosa.com Portfolio

All notable changes to the portfolio page will be documented in this file.

## [2026-01-11] - Portfolio Loading & UX Fixes

### Fixed
- **Portfolio grid loading issue** - Grid was stuck in skeleton loading state due to Supabase fetch hanging. Changed to render static items immediately while Supabase loads in background.
- **"undefined" aria-labels** - Stats cells with logos (TIME, Techstars, Business Insider) showed "undefined" in their accessibility labels. Fixed aria-label logic to handle missing statValue.
- **Video click behavior** - Static video items now open YouTube URLs in a new tab when clicked.

### Changed
- **useBentoItems hook** - `loading` state now starts as `false` so static items display immediately. Supabase items load asynchronously.
- **StatsBentoCell** - Improved aria-label to properly handle items with logoUrl but no statValue.
- **Portfolio.tsx** - Added handler for video item clicks to open video URLs in new tab.

### Files Modified
- `src/components/bento/useBentoItems.ts` - Non-blocking loading state
- `src/components/bento/cells/StatsBentoCell.tsx` - Fixed aria-label construction
- `src/pages/Portfolio.tsx` - Added video click handler

---

## [2026-01-11] - Portfolio Content Expansion

### Added
- **8 Speaking Engagement Items** - Bank of America, Singularity University, CityWire Asia, Stanford, Stryker, GVTC, Glow, Aiken University (with event names, descriptions, and logos)
- **3 Video Items** - Push Humanity Forward, Overcoming Imposter Syndrome, What is the Future of Work (TEDx excluded - already in Supabase)
- **6 Testimonial Items** - Industry leader and customer quotes from home page testimonials section
- **3 Media Logos** - Entrepreneur, Esquire, Fast Company added to "Featured In" logo group

### Changed
- **mediaLogosItem** - Expanded from 6 to 9 logos, size increased to "large"
- **LogoGroupBentoCell** - Updated to support 9 logos in a 3x3 grid layout
- **allStaticItems** - Now includes videoItems, speakingEngagementItems, and testimonialItems arrays

### Files Modified
- `src/components/bento/data/staticItems.ts` - Added speakingEngagementItems, videoItems, testimonialItems arrays
- `src/components/bento/cells/LogoGroupBentoCell.tsx` - Updated to support up to 9 logos

### Content Sources
- Speaking engagements from `/src/components/PortfolioSection.tsx`
- Videos from `/src/components/VideoPortfolioSection.tsx`
- Testimonials from `/src/components/TestimonialsSection.tsx`
- Additional media logos from `/src/components/ClientLogos.tsx`

---

## [2026-01-10] - Award Cells Logo Updates

### Added
- **Time Inc. logo** - TIME award cell now displays the Time Magazine logo instead of text
- **Techstars logo** - Bloomberg Techstars cell now shows Techstars logo with "2011" year
- **Business Insider logo** - TOP 25 cell now shows Business Insider logo with "Top 25 Startups to Watch"

### Changed
- **StatsBentoCell** - Enhanced to support optional `logoUrl` property with inverted white styling
- Award cells now use logo images instead of text-only display

### Files Modified
- `src/components/bento/cells/StatsBentoCell.tsx` - Added logo image support
- `src/components/bento/data/staticItems.ts` - Updated award items with logo URLs
- `public/lovable-uploads/time-inc-logo.png` - Added (sourced from SeekLogo)
- `public/lovable-uploads/techstars-logo.png` - Added (sourced from SeekLogo)
- `public/lovable-uploads/business-insider-logo.png` - Added (sourced from SeekLogo)

---

## [2026-01-10] - Portfolio Diagnostic Review & Fixes

### Fixed
- **Removed duplicate content**: TEDx Grand Rapids 2014 was appearing twice (static item + Supabase project). Removed static version, keeping Supabase as source of truth.
- **Fixed duplicate Wired/Verge logo**: Both "Wired" and "The Verge" were using the same image (`face-detection-verge.jpg`). Updated Wired to use text fallback until proper logo is added.

### Changed
- **Default sort changed to "Recent"**: Portfolio now shows most recent posts first instead of "Featured" sort.
- **Metrics/KPIs randomized**: Stats items (100+, 10+, 5, TOP 25, TIME, $100M+, 3, IEEE, 25+) are now shuffled on each page load using Fisher-Yates algorithm and interleaved throughout the grid.

### Technical Details

**Files Modified:**
- `src/components/bento/data/staticItems.ts` - Removed duplicate TEDx item, fixed Wired logo URL
- `src/pages/Portfolio.tsx` - Changed default sortBy from "featured" to "recent"
- `src/components/bento/useBentoItems.ts` - Added shuffleArray() and interleaveStats() functions for metrics randomization

### Known Issues
- "Activesite | Artprize 2009" (Supabase project) shows broken image - needs preview_media_url set in database
- "Wired" logo displays as text until proper logo image is added to `/public/lovable-uploads/wired-logo.png`
