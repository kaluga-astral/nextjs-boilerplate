describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // The new url should include "/about"
    cy.url().should('include', '/');

    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('IndePage');
  });
});
