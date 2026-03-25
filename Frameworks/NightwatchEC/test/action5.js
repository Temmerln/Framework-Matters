describe('Check', function() {
    it('Checks', async function(){
        await browser.navigateTo('http://192.168.0.100/');
        let button = browser.element('#checkbox')
        for (let action = 0; action < 120; action++){
            button.click();
            button.click();
        }
    })
})

/*
describe('Check', function() {
    it('Checks', async function(){
        await browser.navigateTo('http://192.168.0.100/');
        for (let action = 0; action < 50; action++){
            browser.element('#checkbox').click();
            browser.element('#checkbox').click();
        }
    })
})
*/