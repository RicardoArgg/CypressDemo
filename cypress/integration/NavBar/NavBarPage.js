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
        Selectors.navBar('searchByDropdown')
            .should('be.visible').select(searchBy[optionText])
    }

    static SetFilter(filter) {
        cy.get('input[onload="setHistoryList()"]')
        Selectors.navBar('searchTerm')
            .should('be.visible').type(filter, { delay: 30 })
    }

    static ClickSearch() {
        Selectors.navBar('searchButton')
            .should('be.visible').click()
    }

    static ValidateThereAreNoErrorMessages() {
        // cy.get('st-device').find('div')
        //.find('span').should('not.exist');
        // cy.get('st-device > div > span').should('not.exist');
        cy.wait(5000)
        Selectors.navBar('inputErrorMessage')
            .should('not.exist');
        // cy.get('div[class="margin-text-validation"]')
        //.next().children().should('not.exist')
    }

    static ValidateErrorMessageSays(error) {
        cy.contains(error).should('be.visible') // *page contains
        //cy.get('div[class="margin-text-validation"]').as('ele')
        //cy.get('@ele').next().children()
        //.should('contain.text', error)
    }

    static SelectRadioButton(radioText) {
        Selectors.navBar('radioButtons')
            .check(radioValues[radioText])
    }

    static ValidateColumnsOnPage(numberOfColumns) {
        Selectors.EsPage('columnElements')
            .should('have.length', numberOfColumns)
    }

    static ClickTabByText(tabText) {
        Selectors.navBar('tabElements').contains(tabText)
            .should('be.visible').click()
    }

    static ValidateResultsDivs() {
        Selectors.navBar('DeviceInfoElements')
            .should('have.length.at.least', 1)
    }

    static ValidateThereAreNoResults() {
        Selectors.navBar('DeviceInfoElements')
        cy.get('@ele').should('not.exist')
    }
}

export default NavBar;