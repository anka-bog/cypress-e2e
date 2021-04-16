describe('Navbar Test', () => {
  before(function() {
    cy.visit('http://zero.webappsecurity.com/index.html')
  })

  it('should display online banking content', () => {
    cy.get('#onlineBankingMenu').click()
    cy.contains('Pay bills easily')
  })

  it('should display feedback content', () => {
    cy.get('#feedback').click()
    cy.contains('Send Message')
  })

  it('should display home page content', () => {
    cy.get('.container > a').click()
    cy.contains('Welcome to Zero Online Banking.')
  })
})
