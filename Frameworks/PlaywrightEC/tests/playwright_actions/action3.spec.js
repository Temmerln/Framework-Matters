const {test, expect} = require('@playwright/test');
test('action3', async ({ page }) => {
    await page.goto('http://192.168.0.100/');
    let button = page.locator('#doubleclick');
    for (let action = 0; action < 170; action++) {
        await button.click({ button: "right" });
    }
})
