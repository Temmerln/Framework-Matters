const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/chromium-browser'
        });
    const page = await browser.newPage();
    await page.goto('http://192.168.0.100/');
    await page.waitForSelector('#input');
    for (let action = 0; action < 60; action++) {
        await page.type('#input', 'Energy');
        await page.keyboard.press('Backspace');
        await page.keyboard.press('Backspace');
        await page.keyboard.press('Backspace');
        await page.keyboard.press('Backspace');  
        await page.keyboard.press('Backspace'); 
        await page.keyboard.press('Backspace');   
    };
    await browser.close();
})();