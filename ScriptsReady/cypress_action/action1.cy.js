describe('Visit website', () => {
    it('Visits website', function () {
        for (let action = 0; action < 140; action++){
            cy.visit('http://192.168.0.100/') 
        }
    })
})