/// <reference types="Cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

import EsPage from './EsPage';


Then("I validate {string} cards are displayed", function (cardNumber) {
    EsPage.ValidateColumnsOnPage(cardNumber)
})

Then("I see {string} card on screen", function (cardText) {
    EsPage.ValidateThereIsCard(cardText)
})

And("I validate the link in {string} is equals as {string}", (cardText, url) => {
    EsPage.ValidateCardUrl(cardText, url)
})
