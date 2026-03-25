describe('Double click', function(){
    it('Double clicks', async function(){
        await browser.navigateTo('http://192.168.0.100/');
        const button = browser.element('#doubleclick');
        for (let action = 0; action < 160; action++){
            button.doubleClick();
        }
        await browser.end();
    })
})

/*
describe('Double click', function(){
    it('Double clicks', async function(){
        await browser.navigateTo('http://192.168.0.100/');
        for (let action = 0; action < 110; action++){
            browser.element('#doubleclick').doubleClick();
        }
        await browser.end();
    })
})
*/