describe('Drag and Drop', function (){
    it('Drags and drops', async function(){
        await browser.navigateTo('http://192.168.0.100/');
        const dropzone = await browser.element.find('#dropzone');
        for (let action = 0; action < 60; action++){
            await browser.element('#draggable').dragAndDrop(dropzone);
        }
        await browser.end();
    })
})