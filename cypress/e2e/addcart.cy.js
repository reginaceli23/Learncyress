describe("Inventory Page", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.get(".login_logo").should("be.visible");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
  });

  it("Addcart Successfull", () => {
    cy.get("#add-to-cart-sauce-labs-backpack").should('be.visible').click();
    cy.get("#add-to-cart-sauce-labs-fleece-jacket").should('be.visible').click();
    cy.get('#shopping_cart_container').should('be.visible');
    cy.get('#shopping_cart_container > a > span').should('be.visible');
    cy.get('#shopping_cart_container > a').click();
    // cy.get('[class="shopping_cart_link"]').click();
    cy.url().should('include', 'https://www.saucedemo.com/cart.html');
  });
});
