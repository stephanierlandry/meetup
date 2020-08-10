import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  test('An event element is collapsed by default', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    await page.waitForSelector('.event');

    const extra = await page.$('.event .extra');
    expect(extra).toBeNull();
    browser.close();
  })

  test('User can expand an event to see its details', async () => {
   const browser = await puppeteer.launch();
   const page = await browser.newPage();
   await page.goto('http://localhost:3000/');

   await page.waitForSelector('.event');
   await page.click('.event .detail-btn');

   const extra = await page.$('.event .extra');
   expect(extra).toBeDefined();
   browser.close();
 });
});
