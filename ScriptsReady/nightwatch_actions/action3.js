describe('Right click', function(){
    it('Right clicks', async function(){
        await browser.navigateTo('http://192.168.0.100/');
        for (let action = 0; action < 120; action++){
            browser.element('#doubleclick').rightClick();
        }
        await browser.end();
    })
})