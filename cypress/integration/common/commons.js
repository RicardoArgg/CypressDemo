/// <reference types="Cypress" />


defineStep("I log in", function () {
    cy.visitHome(Cypress.env('homeTimeout'))
    cy.login()
})

defineStep("I visit home", function () {
    cy.visitHome(Cypress.env('homeTimeout'))
})

defineStep("I Validate the support tools portal is loaded", function () {
    cy.validateSupportTools()
})