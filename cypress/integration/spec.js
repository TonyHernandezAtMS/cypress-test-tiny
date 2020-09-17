/// <reference types="cypress" />

describe('page', () => {
  it('fixture1', () => {
    cy.ImageStub('fixture1');

    cy.visit('https://tonyhernandezatms.github.io/cypress-test-tiny/')
  })

  it('works', () => {
    cy.ImageStub('fixture2');
    cy.visit('https://tonyhernandezatms.github.io/cypress-test-tiny/')
  })
})
