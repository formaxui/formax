describe('components-src-lib-glass: ComponentsSrcLibGlass component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=componentssrclibglass--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to components-src-lib-glass!');
    });
});
