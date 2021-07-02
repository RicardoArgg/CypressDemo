/// <reference types="cypress" />

const data = require("./../../fixtures/run_env_test.json")

before(function () {
    // runs once before all tests in the block
    cy.log(data.baseUrl)
    Cypress.config('baseUrl', data.baseUrl)
  })
