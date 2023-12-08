describe('create new task', () => {
  it('task created successfuly', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[name=task]').type('test', {force: true}).should('have.value', 'test')
    cy.get('button[id=addTaskButton]').click()
    cy.get('table').contains('td', 'test');
  })
})