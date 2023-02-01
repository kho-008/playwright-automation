const pw = require('playwright');

(async () => {
  const browser = await pw.chromium.launch({
    headless: true,
  });
  const context = await browser.newContext({
    // recordVideo: {
    //   dir: 'videos/',
    //   size: { width: 1920, height: 1000 },
    // }
  });
  const page = await context.newPage();
  await page.setViewportSize({
    width: 1920,
    height: 8000,
  });
  await page.goto('http://localhost/contact/');

  await page.locator('[name="company_name"]').fill('会社名');
  await page.locator('[name="department"]').fill('部署名');
  await page.locator('[name="name"]').fill('お名前');
  await page.locator('[name="furigana"]').fill('フリガナ');
  await page.locator('[name="mail"]').fill('example@example.com');
  await page.locator('[name="tel"]').fill('01201234567');
  await page.locator('[name="postal_code"]').fill('123-4567');
  await page.locator('[name="city"]').fill('大阪市');
  await page.locator('[name="address_01"]').fill('大阪町1-2-3');
  await page.locator('[name="address_02"]').fill('建物');
  await page.locator('[name="contact_title"]').fill('お問い合わせ件名');
  await page.locator('[name="contact_message"]').fill('お問い合わせ内容');

  await page.locator('[name="inquiry_details"]').selectOption('その他');
  await page.locator('[name="prefecture"]').selectOption('大阪府');

  await page.locator('[name="submitConfirm"]').click();

  await page.waitForTimeout(5000)

  await page.screenshot({
    path: 'screenshot/contact.png',
    // fullPage: true
  });

  await browser.close();
})();