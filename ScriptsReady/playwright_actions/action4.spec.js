const {test, expect} = require('@playwright/test');
test('action4', async ({ page }) => {
    await page.goto('http://192.168.0.100/');
    for (let action = 0; action < 110; action++) {
        await page.locator('#doubleclick').dblclick();
    }
})