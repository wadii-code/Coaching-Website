// One-off: convert oversized source PNGs to right-sized WebP.
// Run: node scripts/optimize-images.mjs
import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const jobs = [
  { src: "public/images/coach.png", out: "public/images/coach.webp", width: 1080 },
  { src: "public/images/hero-poster.png", out: "public/images/hero-poster.webp", width: 1920 },
  { src: "public/images/gallery/g1.png", out: "public/images/gallery/g1.webp", width: 900 },
  { src: "public/images/gallery/g2.png", out: "public/images/gallery/g2.webp", width: 900 },
  { src: "public/images/gallery/g3.png", out: "public/images/gallery/g3.webp", width: 900 },
  { src: "public/images/gallery/g4.png", out: "public/images/gallery/g4.webp", width: 900 },
];

for (const j of jobs) {
  const before = (await stat(j.src)).size;
  await sharp(j.src).resize({ width: j.width }).webp({ quality: 78 }).toFile(j.out);
  const after = (await stat(j.out)).size;
  console.log(
    `${path.basename(j.src)} ${(before / 1e6).toFixed(1)}MB -> ${path.basename(j.out)} ${(after / 1e3).toFixed(0)}KB`,
  );
}
