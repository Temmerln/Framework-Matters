describe('Input text', ()=>{
    it('Inputs text', function(){
        cy.visit('http://192.168.0.100/')
        for( let action = 0; action < 60; action++){
            cy.get('#input').type('Energy{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}') 
        }
    })
})
