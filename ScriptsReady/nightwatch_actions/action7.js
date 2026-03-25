describe('Input text', function(){
    it('Inputs text', async function(){
        await browser.navigateTo('http://192.168.0.100/');
        for (let action = 0; action < 60; action++){
            await browser.element('#input').sendKeys('Energy');
            await browser.element('#input').sendKeys(Keys.BACK_SPACE, Keys.BACK_SPACE, Keys.BACK_SPACE, Keys.BACK_SPACE, Keys.BACK_SPACE, Keys.BACK_SPACE);
        }
        await browser.end();
    })
})