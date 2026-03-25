describe('Visit website', function(){
    it('Visits website', async function(){
        for (let action = 0; action < 140; action++){
            await browser.navigateTo('http://192.168.0.100/');
        }
        await browser.end();
    })
})