/// <reference types="cypress" />


before(function () {
  //cy.newUrl()
  //Cypress.env('homeTimeout', 15000)
})

beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});
