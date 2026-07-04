// Dev-only screenshot helper (not part of the app build).
// Usage: node pw-shot.cjs <outDir> [id1,id2,...]
const { chromium } = require("playwright");

const OUT = process.argv[2];
const ONLY = process.argv[3] ? process.argv[3].split(",") : null;
const URL = process.argv[4] || "http://localhost:3001/";
const VW = parseInt(process.argv[5] || "1440", 10); // viewport width (for responsive checks)
const IDS = [
  "sec-hero",
  "sec-intro",
  "sec-methodology",
  "sec-get-inspired",
  "sec-case-studies",
  "sec-client-perspectives",
  "sec-ready-to-engineer",
  "sec-footer",
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: VW, height: 900 },
    deviceScaleFactor: 1,
  });
  await page.goto(URL, { waitUntil: "networkidle", timeout: 60000 });
  await page.evaluate(() => document.fonts && document.fonts.ready);
  await page.waitForTimeout(1200);
  // Scroll through to trigger scroll-reveal animations, then return to top.
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const tick = () => {
        window.scrollTo(0, y);
        y += 500;
        if (y < document.body.scrollHeight) requestAnimationFrame(tick);
        else {
          window.scrollTo(0, 0);
          resolve();
        }
      };
      tick();
    });
  });
  await page.waitForTimeout(900);

  if (ONLY) {
    for (const id of ONLY) {
      const el = page.locator("#" + id);
      try {
        await el.scrollIntoViewIfNeeded({ timeout: 5000 });
        const box = await el.boundingBox();
        await el.screenshot({ path: `${OUT}/${id}.png` });
        console.log(`${id}\t${box ? Math.round(box.width) + "x" + Math.round(box.height) : "no-box"}`);
      } catch (e) {
        console.log(`${id}\tERROR ${e.message.split("\n")[0]}`);
      }
    }
  } else {
    await page.screenshot({ path: `${OUT}/full.png`, fullPage: true });
    console.log(`full.png written @ ${VW}px`);
  }
  await browser.close();
})();
