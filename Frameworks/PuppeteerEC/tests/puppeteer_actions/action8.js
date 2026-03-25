const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/chromium-browser'
        }); 
    const page = await browser.newPage();
    await page.goto('http://192.168.0.100/');
    let anchorButton = page.locator('#anchor-id');
    let button = page.locator('#btn');
    for (let action = 0; action < 60; action++) {
        await anchorButton.scroll()
        await button.scroll()    
    };
    await browser.close();
})();