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
        cy.get('select[name="searchBy"]').as('element').should('be.visible')
        cy.get('@element').select(searchBy[optionText])
    }

    static SetFilter(filter) {
        cy.wait(2000)
        cy.get('input[onload="setHistoryList()"]').as('element').should('be.visible')
        cy.get('@element').type(filter, {delay: 50})
        cy.wait(2000)
    }

    static ClickSearch() {
        cy.get('button[class="button is-primary is-rounded"]').as('element')
        cy.get('@element').should('be.visible')
        cy.get('@element').click()
    }

    static ValidateThereAreNoErrorMessages() {
        // cy.get('st-device').find('div').find('span').should('not.exist');
        // cy.get('st-device > div > span').should('not.exist');
        cy.wait(5000)
        cy.get('st-device > div > span').should('not.exist');
        // cy.get('div[class="margin-text-validation"]').next().children().should('not.exist')
    }

    static ValidateErrorMessageSays(error) {
        cy.contains(error).should('be.visible') // *page contains
        //cy.get('div[class="margin-text-validation"]').as('element')
        //cy.get('@element').next().children().should('contain.text', error)
    }

    static SelectRadioButton(radioText) {
        cy.get('input[type="radio"]').as('element')
        cy.get('@element').check(radioValues[radioText])
    }

    static ValidateColumnsOnPage(numberOfColumns) {
        cy.get('div.column').should('have.length', numberOfColumns)
    }

    static ClickTabByText(tabText) {
        cy.get("div.navbar-end").contains(tabText).as('element')
        cy.get('@element').should('be.visible').click()
    }

    static ValidateResultsDivs() {
        cy.get('div.div-info').should('have.length.at.least', 1)
    }

    static ValidateThereAreNoResults() {
        cy.get('div.div-info').should('not.exist')
    }
}

export default NavBar;