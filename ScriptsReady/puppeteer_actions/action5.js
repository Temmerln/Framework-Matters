const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch(); 
    const page = await browser.newPage();
    await page.goto('http://192.168.0.100/');
    for (let action = 0; action < 50; action++) {
        await page.$eval('input[id="checkbox"]', check => check.checked = false);
        await page.$eval('input[id="checkbox"]', check => check.checked = true);
    };
    await browser.close();
})();
