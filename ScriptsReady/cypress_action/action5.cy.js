describe('Check', ()=>{
    it('Checks', function() {
        cy.visit('http://192.168.0.100/')
        for(let action = 0; action < 50; action ++){
        cy.get('#checkbox').uncheck()
        cy.get('#checkbox').check()
        }
    })
})