const {test, expect} = require('@playwright/test');
test('action2', async ({ page }) => {
    await page.goto('http://192.168.0.100/');
    let button = page.locator('#btn');
    for (let action = 0; action < 350; action++) {
        await button.click();
      }
})

