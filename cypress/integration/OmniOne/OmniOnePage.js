/// <reference types="Cypress" />
import Loc from '../../support/Locators'

class OmniOne {

    allUrls = []

    static GetTextIndex() {
        cy.log(this.testIndex);
        return this.testIndex;
    }

    static ValidateColumnsOnPage(numberOfColumns) {
        Loc.esPage('columnElements')
            .should('have.length', numberOfColumns)
    }

    static ValidateThereIsCard(cardText) {
        Loc.esPage('cardTitle')
            .should('contain.text', cardText)
    }

    static ValidateCardContainsUrl(cardText) {
        Loc.esPage('cardTitle')
            .contains(cardText).parent().parent().next().find('a').as('link')
        cy.get('@link').should('have.attr', 'href')
        cy.get('@link').invoke('attr', 'href').then((href) => {
            this.SaveUrl(href)
        })
    }

    static SaveUrl(url) {
        this.url = url
    }

    static GoToUrl(url, expectedCode) {
        cy.log('Making a API request to ' + url +
            ' and expecting to get the code: ' + expectedCode)
        cy.request({ "url": url, "failOnStatusCode": false }).then((resp) => {
            expect(resp.status).to.eq(expectedCode)
        })
    }

    static ValidateMultipleCodes(datatable) {
        // console.log("Datatable: , ", table)
        datatable.hashes().forEach(elem => {
            Loc.esPage('cardTitle')
                .contains(elem.card).parent().parent().next().find('a').as('link')
            cy.get('@link').invoke('attr', 'href').then((href) => {
                this.GoToUrl(href, parseInt(elem.response))
            })
        });
    }
}

export default OmniOne;