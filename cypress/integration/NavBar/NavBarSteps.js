/// <reference types="Cypress" />
import { Given, When, And, Then, defineStep } from "cypress-cucumber-preprocessor/steps";

import NavBar from './NavBarPage';

defineStep("I see results displayed", function () {
    NavBar.ValidateResultsDivs()
})

Then("I dont see results displayed", function () {
    NavBar.ValidateThereAreNoResults()
})

Given("I click the {string} tab", function (tabText) {
    NavBar.ClickTabByText(tabText)
})

Given("I validate the tab {string} was selected correctly", function (tabText) {
    NavBar.ValidateTabIsSelected(tabText)
})

And("I validate that {int} cards are visible on page", function (cardsNumber) {
    NavBar.ValidateColumnsOnPage(cardsNumber)
})

Then("I validate the ES page", function () {
    //version 1, enhanced on EsSteps  "I validate {7} cards are displayed"
    NavBar.ValidateColumnsOnPage(7)
})

Then("I validate the Omnitracs One page", function () {
    NavBar.ValidateColumnsOnPage(7)
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

And("I see Business GUID {string} in the results", (businessGuid) => {
    NavBar.ValidateBusinessGuidIs(businessGuid)
})

And("I see Business Group GUID {string} in the results", (groupGuid) => {
    NavBar.ValidateBusinessGroupGuidIs(groupGuid)
})

And("I see Device Id {string} as serial number in the results", (deviceId) => {
    NavBar.ValidateDeviceIdIs(deviceId)
})

And("I validate the MEID is {string} as expected", (enviroment) => {
    NavBar.ValidateMeidByEnv(enviroment)
})
