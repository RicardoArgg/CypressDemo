/// <reference types="Cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

var navBar = new NavBar()

Given("I log in", function () {
    cy.visit('home')
    cy.login()
})
Then("I Validate the support tools portal is loaded", function () {
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
    navBar.ClickTabByText('Omnitracs One')
})

Then("I validate the ES page", function () {
    navBar.ValidateColumnsOnPage(7)
    navBar.ClickTabByText('ES')
})

Then("I validate the Omnitracs One page", function () {
    navBar.ValidateColumnsOnPage(7)
    navBar.ClickTabByText('Omnitracs One')
})

Given("I click on search", function () {
    navBar.ClickSearch()
})

Then("I got an error about the required field", function () {
    navBar.ValidateErrorMessageSays('The id is required')
})

Then("I dont get any errors", function () {
    navBar.ValidateThereAreNoErrorMessage()
})

Then("I select from the dropdown the option {string}", (option) => {
    navBar.SelectDropdownValue(option)
})

Then("I enter a filter {string}", (filter) => {
    navBar.SetFilter(filter)
})

Then("I click the radio option for {string}", (radioText) => {
    navBar.SelectRadioButton(radioText)
})

