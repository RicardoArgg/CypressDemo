/// <reference types="cypress" />


before(function () {
  // runs once before all tests in the block
  var env = Cypress.env.loadConfig
  const data = require("./../../fixtures/run_env_" + env + ".json")
  cy.log(data.baseUrl)
  Cypress.config('baseUrl', data.baseUrl)
})
