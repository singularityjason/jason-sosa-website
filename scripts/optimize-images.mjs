#!/usr/bin/env node
/**
 * Image Optimization Script
 * Compresses large images and creates WebP versions for better performance
 *
 * Usage: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const UPLOADS_DIR = path.join(PUBLIC_DIR, 'lovable-uploads');

// Configuration
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 80;
const WEBP_QUALITY = 80;
const SIZE_THRESHOLD = 500 * 1024; // Only optimize images > 500KB

async function getImageFiles(dir) {
  const files = await fs.readdir(dir);
  const imageExtensions = ['.png', '.jpg', '.jpeg'];

  return files.filter(file =>
    imageExtensions.includes(path.extname(file).toLowerCase())
  );
}

async function optimizeImage(filePath) {
  const stats = await fs.stat(filePath);
  const ext = path.extname(filePath).toLowerCase();
  const baseName = path.basename(filePath, ext);
  const dir = path.dirname(filePath);

  // Skip small images
  if (stats.size < SIZE_THRESHOLD) {
    return { skipped: true, file: path.basename(filePath), reason: 'under threshold' };
  }

  console.log(`\nOptimizing: ${path.basename(filePath)} (${(stats.size / 1024 / 1024).toFixed(2)}MB)`);

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Resize if wider than MAX_WIDTH
    const resizeOptions = metadata.width > MAX_WIDTH
      ? { width: MAX_WIDTH, withoutEnlargement: true }
      : {};

    // Create optimized version (overwrite original PNG/JPG with optimized version)
    let optimizedBuffer;
    let newExt = ext;

    if (ext === '.png') {
      // For PNGs, convert to optimized PNG (with compression)
      optimizedBuffer = await image
        .resize(resizeOptions)
        .png({ quality: 80, compressionLevel: 9 })
        .toBuffer();
    } else {
      // For JPEGs, optimize
      optimizedBuffer = await image
        .resize(resizeOptions)
        .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
        .toBuffer();
    }

    // Create WebP version
    const webpPath = path.join(dir, `${baseName}.webp`);
    await image
      .resize(resizeOptions)
      .webp({ quality: WEBP_QUALITY })
      .toFile(webpPath);

    const webpStats = await fs.stat(webpPath);

    // Only overwrite if significantly smaller
    if (optimizedBuffer.length < stats.size * 0.9) {
      await fs.writeFile(filePath, optimizedBuffer);
      const newStats = await fs.stat(filePath);

      return {
        file: path.basename(filePath),
        originalSize: stats.size,
        optimizedSize: newStats.size,
        webpSize: webpStats.size,
        savedOriginal: ((stats.size - newStats.size) / stats.size * 100).toFixed(1),
        savedWebp: ((stats.size - webpStats.size) / stats.size * 100).toFixed(1),
      };
    } else {
      return {
        file: path.basename(filePath),
        originalSize: stats.size,
        webpSize: webpStats.size,
        savedWebp: ((stats.size - webpStats.size) / stats.size * 100).toFixed(1),
        note: 'Original kept (already optimized)'
      };
    }
  } catch (error) {
    return { file: path.basename(filePath), error: error.message };
  }
}

async function main() {
  console.log('🖼️  Image Optimization Script');
  console.log('============================\n');

  // Get all image files
  const imageFiles = await getImageFiles(UPLOADS_DIR);
  console.log(`Found ${imageFiles.length} images in lovable-uploads/\n`);

  // Get file sizes and sort by size
  const filesWithSizes = await Promise.all(
    imageFiles.map(async (file) => {
      const filePath = path.join(UPLOADS_DIR, file);
      const stats = await fs.stat(filePath);
      return { file, size: stats.size, path: filePath };
    })
  );

  // Sort by size (largest first)
  filesWithSizes.sort((a, b) => b.size - a.size);

  // Show largest files
  console.log('Largest images:');
  filesWithSizes.slice(0, 10).forEach(({ file, size }) => {
    console.log(`  ${file}: ${(size / 1024 / 1024).toFixed(2)}MB`);
  });

  // Optimize large files
  const largeFiles = filesWithSizes.filter(f => f.size >= SIZE_THRESHOLD);
  console.log(`\n📦 Optimizing ${largeFiles.length} images over ${SIZE_THRESHOLD / 1024}KB...\n`);

  const results = [];
  for (const { path: filePath } of largeFiles) {
    const result = await optimizeImage(filePath);
    results.push(result);

    if (result.originalSize && result.optimizedSize) {
      console.log(`  ✅ ${result.file}`);
      console.log(`     Original: ${(result.originalSize / 1024).toFixed(0)}KB → ${(result.optimizedSize / 1024).toFixed(0)}KB (${result.savedOriginal}% saved)`);
      console.log(`     WebP: ${(result.webpSize / 1024).toFixed(0)}KB (${result.savedWebp}% saved)`);
    } else if (result.webpSize) {
      console.log(`  ✅ ${result.file}`);
      console.log(`     ${result.note}`);
      console.log(`     WebP: ${(result.webpSize / 1024).toFixed(0)}KB (${result.savedWebp}% saved)`);
    } else if (result.skipped) {
      // Skip logging skipped files
    } else if (result.error) {
      console.log(`  ❌ ${result.file}: ${result.error}`);
    }
  }

  // Summary
  console.log('\n============================');
  console.log('📊 Summary:');

  const successful = results.filter(r => r.originalSize || r.webpSize);
  const totalOriginal = successful.reduce((sum, r) => sum + (r.originalSize || 0), 0);
  const totalOptimized = successful.reduce((sum, r) => sum + (r.optimizedSize || r.originalSize || 0), 0);
  const totalWebp = successful.reduce((sum, r) => sum + (r.webpSize || 0), 0);

  console.log(`  Processed: ${successful.length} images`);
  if (totalOriginal > 0) {
    console.log(`  Original total: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB`);
    console.log(`  Optimized total: ${(totalOptimized / 1024 / 1024).toFixed(2)}MB`);
    console.log(`  WebP total: ${(totalWebp / 1024 / 1024).toFixed(2)}MB`);
    console.log(`  Total saved: ${((totalOriginal - totalWebp) / 1024 / 1024).toFixed(2)}MB`);
  }

  console.log('\n💡 Tip: Use the WebP images in your components for better performance.');
  console.log('   Example: <img src="/lovable-uploads/image.webp" />\n');
}

main().catch(console.error);
