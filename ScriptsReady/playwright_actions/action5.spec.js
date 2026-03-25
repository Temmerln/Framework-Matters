const {test, expect} = require('@playwright/test');
test('action5', async ({ page }) => {
    await page.goto('http://192.168.0.100/');
    for (let action = 0; action < 50; action++) {
        await page.getByRole('checkbox').uncheck();
        await page.getByRole('checkbox').check();
      }
})