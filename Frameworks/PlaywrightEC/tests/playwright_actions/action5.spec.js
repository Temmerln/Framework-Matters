const {test, expect} = require('@playwright/test');
test('action5', async ({ page }) => {
    await page.goto('http://192.168.0.100/');
    let button = page.getByRole('checkbox');
    for (let action = 0; action < 120; action++) {
        await button.uncheck();
        await button.check();
      }
})