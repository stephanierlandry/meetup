import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {

  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  })

  test('An event element is collapsed by default', async () => {
    const extra = await page.$('.event .extra');
    expect(extra).toBeNull();
  })

  test('User can expand an event to see its details', async () => {
   await page.click('.event .detail-btn');
   const extra = await page.$('.event .extra');
   expect(extra).toBeDefined();
 });

  test('User can collapse an events details', async () => {
    await page.click('.event .detail-btn');
    const extra = await page.$('.event .extra');
    expect(extra).toBeNull();
  })
});

describe('filter event by city', () => {

  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  })

  test('show upcoming events based on user location', async () => {
    const events = await page.$('.event');
    expect(events).toBeDefined();
  })

  test('user should receive a match of suggestions matching what they type', async () => {
    const suggestion = await page.$('.suggestions li');
    expect(suggestion).toBeDefined();
  })

  test('user can select city from suggestion list', async () => {
    expect('.suggestion li').toBeDefined();
    expect('.city').toBeDefined();
  })

});
