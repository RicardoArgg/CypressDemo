/// <reference types="Cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

import NavBar from '../NavBar/NavBarPage';
import OmniOne from '../OmniOne/OmniOnePage';


Given("I click the Omnitracs One tab", () => {
    NavBar.ClickTabByText('Omnitracs One')
})

Then("I validate {string} cards are displayed", function (cardNumber) {
    OmniOne.ValidateColumnsOnPage(cardNumber)
})

Then("I see {string} card on screen", (cardText) => {
    cy.wait(1000)
    OmniOne.ValidateThereIsCard(cardText)
})

And("I validate the {string} card contains a link", (cardText) => {
    OmniOne.ValidateCardContainsUrl(cardText)
})

And("I Validate the response code of the website is {int}", (respCode) => {
    OmniOne.GoToUrl(respCode)
})
