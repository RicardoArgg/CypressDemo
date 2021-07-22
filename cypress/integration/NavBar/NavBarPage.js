/// <reference types="Cypress" />
import Loc from '../../support/Locators'

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
        Loc.navBar('searchByDropdown')
            .should('be.visible').select(searchBy[optionText])
    }

    static SetFilter(filter) {
        cy.get('input[onload="setHistoryList()"]')
        Loc.navBar('searchTerm')
            .should('be.visible').type(filter, { delay: 30 })
    }

    static ClickSearch() {
        Loc.navBar('searchButton')
            .should('be.visible').click()
    }

    static ValidateThereAreNoErrorMessages() {
        // cy.get('st-device').find('div')
        //.find('span').should('not.exist');
        // cy.get('st-device > div > span').should('not.exist');
        cy.wait(7500)
        Loc.navBar('inputErrorMessage')
            .should('not.exist');
        // cy.get('div[class="margin-text-validation"]')
        //.next().children().should('not.exist')
    }

    static ValidateErrorMessageSays(error) {
        cy.contains(error).should('be.visible')
    }

    static SelectRadioButton(radioText) {
        Loc.navBar('radioButtons')
            .check(radioValues[radioText])
    }

    static ValidateColumnsOnPage(numberOfColumns) {
        Loc.esPage('columnElements')
            .should('have.length', numberOfColumns)
    }

    static ClickTabByText(tabText) {
        cy.wait(3000)
        Loc.navBar(tabText + 'tab').click()
    }

    static ValidateResultsDivs() {
        Loc.navBar('DeviceInfoElements')
            .should('have.length.at.least', 1)
    }

    static ValidateThereAreNoResults() {
        Loc.navBar('DeviceInfoElements')
            .should('not.exist')
    }

    static ValidateBusinessGuidIsNotEmpty() {
        Loc.navBar('businessGuidResult')
            .first().next()
            .should('not.have.text', '')
    }

    static ValidateBusinessGuidIs(businessGuid) {
        Loc.navBar('businessGuidResult').eq(1)
            .should('have.text', businessGuid)
    }

    static ValidateBusinessGroupGuidIs(groupGuid) {
        Loc.navBar('businessGuidResult').first()
            .should('have.text', groupGuid)
    }

    static ValidateDeviceIdIs(deviceId) {
        Loc.navBar('resultsData').eq(4)
            .should('contains.text', deviceId)
    }

    static ValidateTabIsSelected(tabText) {
        Loc.navBar(tabText + ' tab')
            .invoke('attr', 'class')
            .should('contain', 'is-active')
    }

    static ValidateMeidByEnv(expected) {
        Loc.navBar('resultsStrong').eq(3)
            .invoke('text').then((txt) => {
                if (txt.includes('-')) {
                    expect(txt).to.be.equal(' - ')
                } else {
                    expect(txt).to.match(/([0-9]){15}/)
                    expect(txt).to.be.equal(expected)
                }
            })
    }

    static ClickFilterInput() {
        Loc.navBar('searchTerm')
            .should('be.visible').click()
    }

    static ValidateFilterWasSearched(filter) {
        cy.log("Validating the " + filter +
            " appears at least once in the option from the filter dropdown")
        Loc.navBar('lastSearch').find('option[value=' + filter + ']')
            .should('have.length.at.least', 1)
    }

    static ValidateRadiosAreStatus(status) {
        Loc.navBar('radioButtons').eq(0)
            .should('be.' + status)
        Loc.navBar('radioButtons').eq(1)
            .should('be.' + status)
    }

    static ValidateFiltersWereSearched(datatable) {
        datatable.hashes().forEach(elem => {
            this.ValidateFilterWasSearched(elem.filters)
        });
    }
}

export default NavBar;
