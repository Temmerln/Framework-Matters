const {test, expect} = require('@playwright/test');
test('action7', async ({ page }) => {
    await page.goto('http://192.168.0.100/');
    await page.locator('#input').click();
    for (let action = 0; action < 60; action++) {
        await page.keyboard.type('Energy');
        await page.keyboard.press('Backspace');
        await page.keyboard.press('Backspace');
        await page.keyboard.press('Backspace');
        await page.keyboard.press('Backspace');
        await page.keyboard.press('Backspace');
        await page.keyboard.press('Backspace');
    }
})
