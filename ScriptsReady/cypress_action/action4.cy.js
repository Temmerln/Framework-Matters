describe('Double click', ()=>{
    it('Double clicks', function (){
        cy.visit('http://192.168.0.100/')
        for (let action = 0; action < 110; action++){
            cy.get('#doubleclick').dblclick()
        }
    })
})