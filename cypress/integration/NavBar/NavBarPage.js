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

var tabsElement = {
    "ES": "esTab",
    "Omnitracs One": "omnitracsOneTab",
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
        cy.wait(7500)
        Selectors.navBar('inputErrorMessage')
            .should('not.exist');
        // cy.get('div[class="margin-text-validation"]')
        //.next().children().should('not.exist')
    }

    static ValidateErrorMessageSays(error) {
        cy.contains(error).should('be.visible')
    }

    static SelectRadioButton(radioText) {
        Selectors.navBar('radioButtons')
            .check(radioValues[radioText])
    }

    static ValidateColumnsOnPage(numberOfColumns) {
        Selectors.esPage('columnElements')
            .should('have.length', numberOfColumns)
    }

    static ClickTabByText(tabText) {
        cy.wait(3000)
        Selectors.navBar(tabText + ' tab').click()
    }

    static ValidateResultsDivs() {
        Selectors.navBar('DeviceInfoElements')
            .should('have.length.at.least', 1)
    }

    static ValidateThereAreNoResults() {
        Selectors.navBar('DeviceInfoElements')
            .should('not.exist')
    }

    static ValidateBusinessGuidIsNotEmpty() {
        Selectors.navBar('businessGuidResult')
            .first().next()
            .should('not.have.text', '')
    }

    static ValidateBusinessGuidIs(businessGuid) {
        Selectors.navBar('businessGuidResult').eq(1)
            .should('have.text', businessGuid)
    }

    static ValidateBusinessGroupGuidIs(groupGuid) {
        Selectors.navBar('businessGuidResult').first()
            .should('have.text', groupGuid)
    }

    static ValidateDeviceIdIs(deviceId) {
        Selectors.navBar('resultsData').eq(4)
            .should('contains.text', deviceId)
    }

    static ValidateTabIsSelected(tabText) {
        Selectors.navBar(tabText + ' tab')
            .invoke('attr', 'class')
            .should('contain', 'is-active')
    }

    static ValidateMeidByEnv(env) {
        Selectors.navBar('resultsStrong').eq(3)
            .invoke('attr', 'text').then((txt)=>{
                if (env=='Prod'){
                    expect(txt).to.be.equal(' - ')
                }else if (env=='UAT'){
                    expect(txt).to.match(/([0-9]){15}/)
                }
            })
    }
}

export default NavBar;
