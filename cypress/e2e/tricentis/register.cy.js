describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demowebshop.tricentis.com/')
    cy.get('.ico-register').click()
    cy.get('#gender-female').click()
    cy.get('#FirstName').type("imsa")
    cy.get('#LastName').type("nur")
    cy.get('#Email').type("imsanurdwi@gmail.com")
    cy.get('#Password').type("1234567")
    cy.get('#ConfirmPassword').type("1234567")
    cy.get('#register-button').click()
  })
})