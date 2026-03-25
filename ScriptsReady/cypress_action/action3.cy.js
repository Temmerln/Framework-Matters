describe('Right click', () =>{
    it('Right clicks', function(){
        cy.visit('http://192.168.0.100/')
        for (let action = 0; action < 120; action++){
            cy.get('#doubleclick').rightclick()
        }
    })
})