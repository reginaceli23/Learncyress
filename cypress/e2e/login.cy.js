describe('Login Page', () => {
  it('Succussfully Login', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('.login_logo').should('be.visible');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include','/inventory.html');
  });

  it('Login Failed', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('.login_logo').should('be.visible');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sau');
    cy.get('[id="login-button"]').click();
    cy.get('#login_button_container > div > form > div.error-message-container.error > h3')
      .should('be.visible')
      .and('contain.text','Username and password do not match any user in this service');
  });

  it('Login Failed Without Credential', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('.login_logo').should('be.visible');
    // cy.get('#user-name').type('');
    // cy.get('#password').type('');
    cy.get('[id="login-button"]').click();
    cy.get('h3')
      .should('be.visible')
      .and('contain.text','Username is required');
  });

  it('Login Failed Without Username', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('.login_logo').should('be.visible');
    // cy.get('#user-name').type('');
    cy.get('#password').type('secret_sauce');
    cy.get('[id="login-button"]').click();
    cy.get('h3')
      .should('be.visible')
      .and('contain.text','Username is required');
  });

  it('Login Failed Without Password', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('.login_logo').should('be.visible');
    cy.get('#user-name').type('standard_user');
    // cy.get('#password').type('secret_sauce');
    cy.get('[id="login-button"]').click();
    cy.get('h3')
      .should('be.visible')
      .and('contain.text','Password is required');
  });
})