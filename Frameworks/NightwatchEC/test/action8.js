describe('Scroll', function(){
    it('Scrolls', async function(){
        await browser.navigateTo('http://192.168.0.100/');
        const anchorButton = browser.element('#anchor-id');
        const button = browser.element('#btn');
        for (let action = 0; action < 60; action++){
            anchorButton.moveTo();
            button.moveTo(); 
        }
        await browser.end();
    })
})

/*
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
*/