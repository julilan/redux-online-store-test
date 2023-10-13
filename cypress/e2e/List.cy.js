describe('List component test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Page and title render', () => {
    cy.get('h1').should('contain', 'List will be here');
  });

  it('Page products load', () => {
    // Give the API some time to load the products
    cy.get('[data-testid="product"]', { timeout: 4000 }).should(
      'have.length',
      20
    );
  });

  it('List link to Cart works', () => {
    cy.get('[data-testid="cart-link"]').click();
    cy.url().should('include', '/cart');
    cy.get('h1').should('contain', 'Cart');
  });
});