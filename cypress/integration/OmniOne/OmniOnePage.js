/// <reference types="Cypress" />
import Selectors from '../../support/Selectors'

class OmniOne {

    static GetTextIndex() {
        cy.log(this.testIndex);
        return this.testIndex;
    }

    static ValidateColumnsOnPage(numberOfColumns) {
        Selectors.esPage('columnElements')
            .should('have.length', numberOfColumns)
    }

    static ValidateThereIsCard(cardText) {
        Selectors.esPage('cardTitle')
            .should('contain.text', cardText)
    }

    static ValidateCardContainsUrl(cardText) {
        Selectors.esPage('cardTitle')
            .contains(cardText).parent().parent().next().find('a').as('link')
        cy.get('@link').should('have.attr', 'href')
        cy.get('@link').invoke('attr', 'href').then((href) => {
            this.saveUrl(href)
        })
    }

    static saveUrl(url) {
        this.url = url
    }

    static GoToUrl(expectedCode) {
        cy.log('Making an API request to ' + this.url)
        cy.request({ "url": this.url, "failOnStatusCode": false }).then((resp) => {
            expect(resp.status).to.eq(expectedCode)
        })
    }
}

export default OmniOne;