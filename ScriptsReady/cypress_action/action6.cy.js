describe('Drag and drop', ()=>{
    it('Drags and drops', function(){
        cy.visit('http://192.168.0.100/')
        const dataTransfer = new DataTransfer();
        for (let action = 0; action < 60; action++){
            cy.get('#draggable').trigger('dragstart', {dataTransfer})
            cy.get('#dropzone').trigger('drop', {dataTransfer}).trigger('dragend')
        }
    })
})