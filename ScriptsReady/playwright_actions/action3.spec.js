const {test, expect} = require('@playwright/test');
test('action3', async ({ page }) => {
    await page.goto('http://192.168.0.100/');
    for (let action = 0; action < 120; action++) {
        await page.locator('#doubleclick').click({ button: "right" });
    }
})
