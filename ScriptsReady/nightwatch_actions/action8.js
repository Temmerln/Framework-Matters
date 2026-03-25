describe('Scroll', function(){
    it('Scrolls', async function(){
        await browser.navigateTo('http://192.168.0.100/');
        for (let action = 0; action < 60; action++){
            browser.element('#anchor-id').moveTo();
            browser.element('#btn').moveTo(); 
        }
        await browser.end();
    })
})