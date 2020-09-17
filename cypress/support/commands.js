// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

function ImageStub(fixtureRoot) {
  cy.route2("**/images/**", (req) => {
    const filePathRegex = new RegExp(
      // eslint-disable-next-line prettier/prettier
      "/(?:images)(?<path>(?:/[a-zA-Z0-9-?%]+)*/(?:[0-9a-zA-Z._-]+.(?:png|PNG|gif|GIF|jp[e]?g|JP[E]?G)))"
    );
    const image = new URL(req.url).pathname.match(filePathRegex).groups?.path;
    const fixturePath = `${fixtureRoot}/images${image},base64`;
    const staticResponse = {
      fixture: fixturePath,
    };
    req.reply(staticResponse);
  }).as(`cdn-${fixtureRoot}-images`);
}

Cypress.Commands.add("ImageStub", ImageStub);
