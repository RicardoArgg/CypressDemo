/// <reference types="Cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";


Given("I log in", function () {
    cy.visit('home')
    cy.validateLoginLogo()
    cy.loginSso()
    cy.validateSupportToolsHeader()
})

Given("I click the submit button", function () {
    cy.log("Clicking the submit button")
    cy.get('div#postButton>a').click()
})

Then("I got an error message", function () {
    cy.get('div#username-text').invoke("attr", "class").should('contain', 'show')
})

Given("I click the ES tab", function () {
    cy.get('a[href="/es"]').click()
})

Given("I click the Omnitracs One tab", function () {
    cy.get('a[href="/omnitracsone"]').click()
})

Then("I validate the ES page", function () {
    cy.get('div.column').children().should('have.length', 7)
    cy.get('a[href="/es"]').invoke("attr", "class").should('contain', 'is-active')

})

Then("I validate the Omnitracs One page", function () {
    cy.get('div.column').children().should('have.length', 7)
    cy.get('a[href="/omnitracsone"]').invoke("attr", "class").should('contain', 'is-active')

})
