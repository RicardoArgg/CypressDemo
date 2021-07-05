/// <reference types="Cypress" />

var searchBy = {
    "Device Id": "DeviceId",
    "Business GUID": "BAccountId",
    "Device Group GUID": "DeviceGroupId"
}

var radioValues = {
    "Prod": "sotiProdEnv",
    "UAT": "sotiUatEnv",
}

class NavBar {
    static ValidatePortal() {
        cy.get('#header', { timeout: 15000 }).should('be.visible')
    }

    static SelectDropdownValue(optionText) {
        //select 
        cy.get('input[name="searchBy"]').as('element').should('be.visible')
        cy.get('@element').select(searchBy[optionText])
    }

    static SetFilter(filter) {
        cy.get('input[onload="setHistoryList()"]').as('element').should('be.visible')
        cy.get('@element').type(filter)
    }

    static ClickSearch() {
        cy.get('button[class="button is-primary is-rounded"]').as('element')
        cy.get('@element').should('be.visible')
        cy.get('@element').click()
    }

    static ValidateThereAreNoErrorMessage() {
        cy.get('div[class="margin-text-validation"]').as('element')
        cy.get('@element').next().children().should('not.be.visible')
    }

    static ValidateErrorMessageSays(error) {
        cy.get('div[class="margin-text-validation"]').as('element')
        cy.get('@element').next().children().should('have.text', error)
    }

    static SelectRadioButton(radioText) {
        cy.get('input[type="radio"]').as('element')
        cy.get('@element').check(radioValues[radioText])
    }

    static ValidateColumnsOnPage(numberOfColumns) {
        cy.get('div.column').children().should('have.length', numberOfColumns)
    }

    static ClickTabByText(tabText) {
        cy.get("div.navbar-end").contains(tabText).as('element')
        cy.get('@Element').should('be.visible').click()
    }
}