/// <reference types="Cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

import NavBar from './NavBarPage';

Given("I log in", function () {
    cy.visit('home')
    cy.login()
    cy.get('div > canvas')
})
Then("I Validate the support tools portal is loaded", function () {
    cy.validateSupportToolsHeader()
})

Then("I see results displayed", function () {
    NavBar.ValidateResultsDivs()
})

And("I see results displayed", function () {
    NavBar.ValidateResultsDivs()
})

Then("I dont see results displayed", function () {
    NavBar.ValidateThereAreNoResults()
})

Given("I click the ES tab", function () {
    NavBar.ClickTabByText('ES')
})

Given("I click the Omnitracs One tab", function () {
    NavBar.ClickTabByText('Omnitracs One')
})

Then("I validate the ES page", function () {
    NavBar.ValidateColumnsOnPage(7)
    NavBar.ClickTabByText('ES')
})

Then("I validate the Omnitracs One page", function () {
    NavBar.ValidateColumnsOnPage(7)
    NavBar.ClickTabByText('Omnitracs One')
})

Given("I click on search", function () {
    NavBar.ClickSearch()
})

Then("I get an error about the required field", function () {
    NavBar.ValidateErrorMessageSays('The id is required')
})

Then("I dont get any errors", function () {
    NavBar.ValidateThereAreNoErrorMessages()
})

Then("I select from the dropdown the option {string}", (option) => {
    NavBar.SelectDropdownValue(option)
})

Then("I enter a filter {string}", (filter) => {
    NavBar.SetFilter(filter)
})

Then("I click the radio option for {string}", (radioText) => {
    NavBar.SelectRadioButton(radioText)
})

Then("I see an error message about device not found", () => {
    NavBar.ValidateErrorMessageSays('Device not found')
})

Then("I see an error message {string}", (message) => {
    NavBar.ValidateErrorMessageSays(message)
})

And("I see {string} card on screen", (cardText) => {
    NavBar.ValidateThereIsCard(cardText)
})

And("I validate the link in {string} is equals as {string}", (cardText, url) => {
    NavBar.ValidateCardUrl(cardText, url)
})

