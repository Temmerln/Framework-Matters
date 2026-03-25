const {test, expect} = require('@playwright/test');
test('action8', async ({ page }) => {
    await page.goto('http://192.168.0.100/');
    let anchorButton = page.locator('#anchor-id');
    let button = page.locator('#btn')
    for (let action = 0; action < 60; action++) {
        await anchorButton.scrollIntoViewIfNeeded();
        await button.scrollIntoViewIfNeeded();      
    }
})