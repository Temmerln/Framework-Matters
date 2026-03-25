describe('Scroll', ()=>{
    it('Scrolls', function(){
        cy.visit('http://192.168.0.100/')
        for (let action = 0; action < 60; action++){
        cy.get('#anchor-id').scrollIntoView()
        cy.get('#btn').scrollIntoView()
        }   
    })
})