/// <reference types="Cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

import NavBar from './NavBarPage';
import EsPage from './EsPage';

Given("I log in", function () {
    cy.visit('home')
    cy.login()
})

Then("I Validate the support tools portal is loaded", function () {
    cy.validateSupportToolsHeader()
})

Given("I click the ES tab", function () {
    NavBar.ClickTabByText('ES')
})

Then("I validate {string} cards are displayed", function (cardNumber) {
    NavBar.ValidateColumnsOnPage(cardNumber)
})

Then("I see {string} card on screen", function (cardText) {
    NavBar.ValidateThereIsCard(cardText)
})

And("I validate the link in {string} is equals as {string}", (cardText, url) => {
    NavBar.ValidateCardUrl(cardText, url)
})

