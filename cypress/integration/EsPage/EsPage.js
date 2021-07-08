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

class EsPage {
    static ValidateColumnsOnPage(numberOfColumns) {
        Selectors.navBar('columnElements')
        .should('have.length', numberOfColumns)
    }

    static ValidateThereIsCard(cardText) {
        Selectors.navBar('cardTitle')
        .should('contain.text', cardText)
    }

    static ValidateCardUrl(cardText, url) {
        Selectors.navBar('cardUrl')
        .contains(cardText).invoke('attr.href').should('equal',url)
    }
}

export default NavBar;