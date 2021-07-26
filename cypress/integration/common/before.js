/// <reference types="cypress" />


after(() => {

})

before(() => {
  //cy.newUrl()
  //Cypress.env('homeTimeout', 15000)
})

beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});
