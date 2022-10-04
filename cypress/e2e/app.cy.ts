describe('Navigation', () => {
  it('should navigate', () => {
    cy.visit('http://localhost:3000/');

    cy.url().should('include', '/');

    cy.get('h1').contains('IndexPage');
  });
});
