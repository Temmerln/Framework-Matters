const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://192.168.0.100/');
    for (let action = 0; action < 110; action++) {
        await page.click('#doubleclick', { clickCount: 2 });     
    };
    await browser.close();
})(); 