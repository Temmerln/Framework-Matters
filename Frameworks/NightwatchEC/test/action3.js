describe('Right click', function(){
    it('Right clicks', async function(){
        await browser.navigateTo('http://192.168.0.100/');
        const button = browser.element('#doubleclick');
        for (let action = 0; action < 170; action++){
            button.rightClick();
        }
        await browser.end();
    })
})

/*
describe('Right click', function(){
    it('Right clicks', async function(){
        await browser.navigateTo('http://192.168.0.100/');
        for (let action = 0; action < 120; action++){
            browser.element('#doubleclick').rightClick();
        }
        await browser.end();
    })
})
*/