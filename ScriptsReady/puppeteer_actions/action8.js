const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch(); 
    const page = await browser.newPage();
    await page.goto('http://192.168.0.100/');
    for (let action = 0; action < 60; action++) {
        await page.locator('#anchor-id').scroll()
        await page.locator('#btn').scroll()    
    };
    await browser.close();
})(); 