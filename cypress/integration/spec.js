/// <reference types="cypress" />

describe("page", () => {
  it("No fixture", () => {
    cy.visit(
      "https://tonyhernandezatms.github.io/cypress-test-tiny/index.html"
    );
    cy.get("img")
      .then(($el) => $el.prop("width"))
      .should("equal", 200);
  });

  it.only("Static Fixture Image Replacement", () => {
    cy.fixture("fixture1/pictures/category.jpg").then((pic) => {
      cy.route2("images/category.jpg", { body: pic, headers: { 'content-type': 'image/jpeg' } });
    });

    cy.visit(
      "https://tonyhernandezatms.github.io/cypress-test-tiny/index.html"
    );
    cy.get("img")
      .then(($el) => $el.prop("width"))
      .should("equal", 500);
  });

  it("Replace image with fixture 1 using command", () => {
    cy.ImageStub("fixture1");
    cy.visit(
      "https://tonyhernandezatms.github.io/cypress-test-tiny/index.html"
    );
    cy.get("img")
      .then(($el) => $el.prop("width"))
      .should("equal", 500);
  });

  it("Replace image with fixture 2 using command", () => {
    cy.ImageStub("fixture2");
    cy.visit(
      "https://tonyhernandezatms.github.io/cypress-test-tiny/index.html"
    );
    cy.get("img")
      .then(($el) => $el.prop("width"))
      .should("equal", 750);
  });
});
