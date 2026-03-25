describe('Click button', () => {
    it('Clicks button', function (){
        cy.visit('http://192.168.0.100/')
        for (let action = 0; action < 120; action++){
            cy.get('#btn').click()
        }
    })
})