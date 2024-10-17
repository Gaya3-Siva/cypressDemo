
describe('First test', () => {
    it('Launch the Url', () => {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
      cy.title().should('eq','GreenKart - veg and fruits kart');
    })
    it('Search for the product', () => {
      cy.get('.search-keyword').type('cu');
      cy.get('.product:visible').should('have.length',2);
    })
  })