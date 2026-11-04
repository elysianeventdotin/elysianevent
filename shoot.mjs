import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'] });
const base = process.env.BASE || 'http://localhost:3200';
async function shot(path, name, w, h, full) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  p.on('pageerror', e => console.log('ERR', name, e.message));
  await p.goto(base + path, { waitUntil: 'networkidle' }); await p.waitForTimeout(3500);
  if (full) { for (let y = 0; y < 12000; y += 500) { await p.mouse.wheel(0, 500); await p.waitForTimeout(150); } await p.waitForTimeout(1500); await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(800); }
  await p.screenshot({ path: `screenshots/${name}.png`, fullPage: full }); await p.close();
}
await shot('/', 'home-desktop', 1440, 900, false);
await shot('/', 'home-full', 1440, 900, true);
await shot('/services', 'services', 1440, 900, true);
await shot('/our-story', 'our-story', 1440, 900, true);
await shot('/contact', 'contact', 1440, 900, true);
await shot('/', 'home-mobile', 390, 844, false);
await b.close();
