describe('components-src-lib-button: ComponentsSrcLibButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=componentssrclibbutton--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to components-src-lib-button!');
    });
});
