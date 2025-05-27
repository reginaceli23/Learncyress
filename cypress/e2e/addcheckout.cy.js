describe("Checkout", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.get(".login_logo").should("be.visible");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.url().should('include', 'https://www.saucedemo.com/inventory.html');
  });

  it("Checkout in Process", () => {
    // Add to Cart Process
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();
    cy.get("#shopping_cart_container > a > span").should("be.visible");
    cy.get("#shopping_cart_container > a").click();
    cy.url().should('include', 'https://www.saucedemo.com/cart.html');

    // Your Cart
    cy.get('[id="checkout"]').click();
    cy.url().should('include','https://www.saucedemo.com/checkout-step-one.html');

    // Fill Checkout: Your Information
    cy.get("#first-name").type("Dahayu");
    cy.get("#last-name").type("Arunika");
    cy.get("#postal-code").type("12345");
    cy.get("#continue").click();

    // Checkout: Overview
    cy.url().should("include","https://www.saucedemo.com/checkout-step-two.html");
    cy.get("#finish").click();

    // Checkout: Complete!
    cy.url().should("include","https://www.saucedemo.com/checkout-complete.html");
    cy.get("#header_container > div.header_secondary_container > span")
      .should("be.visible");
    cy.get("#checkout_complete_container > h2")
      .should("contain","Thank you for your order!");
  });
});
