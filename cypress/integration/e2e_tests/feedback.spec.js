describe('Feedback Test', () => {
  before(function() {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.contains('Feedback').click() //this part is here, so the context is prepared before a test starts, rest is only about feedback
  })

  it('should load a feedback form', () => {
    cy.get('form').should('be.visible')
  })

  it('should fill feedback form', () => {
    cy.get('#name').type('name')
    cy.get('#email').type('email@email.com')
    cy.get('#subject').type('just a subject')
    cy.get('#comment').type('my very long comment about your bank')
  })

  it('should submit feedback form', () => {
    cy.get('.btn-signin').click()
  })

  it('should display feedback message', () => {
    cy.get('#feedback-title').contains('Feedback')
  })
})
