const {test, expect} = require('@playwright/test');
test('action8', async ({ page }) => {
    await page.goto('http://192.168.0.100/');
    for (let action = 0; action < 60; action++) {
        await page.locator('#anchor-id').scrollIntoViewIfNeeded();
        await page.locator('#btn').scrollIntoViewIfNeeded();      
    }
})