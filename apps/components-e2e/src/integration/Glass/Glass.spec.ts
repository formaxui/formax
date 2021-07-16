describe('components: Glass component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=glass--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to components!');
    });
});
