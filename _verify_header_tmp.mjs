import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
await page.setViewportSize({ width: 390, height: 844 });

await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await page.screenshot({ path: "/private/tmp/claude-501/-Users-sunghwanki-Desktop-Github-Project-HomePageMaker/cefcf557-4b3e-4930-9988-094a2802cc43/scratchpad/header_closed.png" });

const errors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});
page.on("pageerror", (err) => errors.push(String(err)));

// Check header toggle links exist and are visible (outside dropdown)
const headerToggle = page.locator("header > div").first().locator('a:has-text("KO")');
const koVisible = await headerToggle.first().isVisible();
console.log("KO link visible in header bar (mobile):", koVisible);

const hamburger = page.locator('header button[type="button"]');
console.log("Hamburger button visible:", await hamburger.isVisible());

// Open the dropdown
await hamburger.click();
await page.waitForTimeout(300);
await page.screenshot({ path: "/private/tmp/claude-501/-Users-sunghwanki-Desktop-Github-Project-HomePageMaker/cefcf557-4b3e-4930-9988-094a2802cc43/scratchpad/header_open.png" });

// Count KO links total on page now (should be: header bar (1) + none in dropdown = 1, plus none elsewhere)
const koCount = await page.locator('a:text-is("KO")').count();
console.log("Total KO links on page (dropdown open):", koCount);

// Click KO to navigate
const koLink = page.locator('a:text-is("KO")').first();
await koLink.click();
await page.waitForLoadState("networkidle");
console.log("URL after clicking KO:", page.url());

await page.screenshot({ path: "/private/tmp/claude-501/-Users-sunghwanki-Desktop-Github-Project-HomePageMaker/cefcf557-4b3e-4930-9988-094a2802cc43/scratchpad/header_ko.png" });

console.log("Console/page errors:", errors);

await browser.close();
