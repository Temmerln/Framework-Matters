describe('Click button', function(){
    it('Clicks button', async function(){
        await browser.navigateTo('http://192.168.0.100/');
        for (let action = 0; action < 120; action++){
            browser.element('#btn').click();
        }
        await browser.end();
    })
})