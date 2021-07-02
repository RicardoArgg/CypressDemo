/// <reference types="Cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";


Given("I log in", function(){
    cy.visit('home')
    cy.get('#header', { timeout: 15000 }).should('be.visible')
    cy.log("Logging in from SuiteOne steps")
    cy.loginSso()
    cy.validateSupportToolsHeader()
})

Given("I click the submit button", function(){
    cy.log("Clicking the submit button")
    cy.get('div#postButton>a').click()
})


Then("I got an error message", function(){
    cy.get('div#username-text').invoke("attr","class").should('contain', 'show')
    
})