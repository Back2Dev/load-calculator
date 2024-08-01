Cypress.on(
  'uncaught:exception',
  (err, runnable) =>
    // returning false here prevents Cypress from
    // failing the test. We do this because of some ugly js errors
    // from a js library we are using
    false,
)

describe('DPA Load Calculator', () => {
  before(function () {
    // freshDatabaseNologin()
  })

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      Cypress.runner.stop()
    }
  })

  it('checks if there is error message when submitting nothing', () => {
    // vists the load calcuator page
    cy.visit('http://localhost:5173/')
    //checks if the test is on the load calculator page
    cy.get('h4').should('contain', 'Off-grid Load Calculator')

    cy.get('button')
    cy.contains('Submit').click()
    cy.get('.MuiAlert-message').should('exist')
  })

  it('Selects two options from entertainment, two laundry and two bathroom', () => {
    // vists the load calculator page
    cy.visit('http://localhost:5173/')
    cy.get('h4').should('contain', 'Off-grid Load Calculator')
    // enters the number of devices for entertainment
    // cy.get('[data-cy=tv-add-btn]').click()
    cy.get('[data-cy=tv-qty]').type('2')

    // cy.get('mui-61').should('contain, Computers')
    cy.get('[data-cy=computers-qty]').type('2')

    // enters the number of devices for laundry
    // cy.get('mui-26').should('contain, Dryer')
    cy.get('[data-cy=dryer-qty]').type('7')
    // cy.get('mui-31').should('contain, Washing Machine')
    cy.get('[data-cy=washing-machine-qty]').type('10')

    // enters the number of devices for bathroom
  })
})
