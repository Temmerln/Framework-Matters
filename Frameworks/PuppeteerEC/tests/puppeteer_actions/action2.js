const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/chromium-browser', 
        });    
    const page = await browser.newPage();
    await page.goto('http://192.168.0.100/');
    for (let action = 0; action < 350; action++) {
        await page.click('#btn');        
    };
    await browser.close();
})();
