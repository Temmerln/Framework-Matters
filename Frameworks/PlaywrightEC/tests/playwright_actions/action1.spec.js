const {test, expect} = require('@playwright/test');
test('action1', async ({page}) => {
    for (let action = 0; action < 140; action++) {
        await page.goto('http://192.168.0.100/');
    }
})
