describe('open server', () => {
  it('local server is run!', () => {
    cy.visit('http://localhost:3000/')
  })
})