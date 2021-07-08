/// <reference types="Cypress" />
import Selectors from '../../support/Selectors'

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
    static SelectDropdownValue(optionText) {
        Selectors.navBar('searchByDropdown').as('ele').should('be.visible')
        cy.get('@ele').select(searchBy[optionText])
    }

    static SetFilter(filter) {
        cy.get('input[onload="setHistoryList()"]')
        Selectors.navBar('searchTerm').as('ele').should('be.visible')
        cy.get('@ele').type(filter, { delay: 30 })
    }

    static ClickSearch() {
        Selectors.navBar('searchButton').as('ele')
        cy.get('@ele').should('be.visible').click()
    }

    static ValidateThereAreNoErrorMessages() {
        // cy.get('st-device').find('div').find('span').should('not.exist');
        // cy.get('st-device > div > span').should('not.exist');
        datacy.wait(5000)
        Selectors.navBar('inputErrorMessage').as('ele')
        cy.get('@ele').should('not.exist');
        // cy.get('div[class="margin-text-validation"]').next().children().should('not.exist')
    }

    static ValidateErrorMessageSays(error) {
        cy.contains(error).should('be.visible') // *page contains
        //cy.get('div[class="margin-text-validation"]').as('ele')
        //cy.get('@ele').next().children().should('contain.text', error)
    }

    static SelectRadioButton(radioText) {
        Selectors.navBar('radioButtons').as('ele')
        cy.get('@ele').check(radioValues[radioText])
    }

    static ValidateColumnsOnPage(numberOfColumns) {
        Selectors.EsPage('columnElements').as('ele')
        cy.get('@ele').should('have.length', numberOfColumns)
    }

    static ClickTabByText(tabText) {
        Selectors.navBar('tabElements').contains(tabText).as('ele')
        cy.get('@ele').should('be.visible').click()
    }

    static ValidateResultsDivs() {
        Selectors.navBar('DeviceInfoElements').as('ele')
        cy.get('@ele').should('have.length.at.least', 1)
    }

    static ValidateThereAreNoResults() {
        Selectors.navBar('DeviceInfoElements').as('ele')
        cy.get('@ele').should('not.exist')
    }
}

export default NavBar;