const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/chromium-browser', 
        });
    const page = await browser.newPage();
    for (let action = 0; action < 140; action++) {
        await page.goto('http://192.168.0.100/');
    };
    await browser.close();
})();