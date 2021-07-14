/// <reference types="Cypress" />

import NavBar from '../NavBar/NavBarPage';


defineStep("I click the {string} tab", function (tabText) {
    NavBar.ClickTabByText(tabText)
})

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