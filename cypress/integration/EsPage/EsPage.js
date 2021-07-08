/// <reference types="Cypress" />
import Selectors from '../../support/Selectors'

class EsPage {
    static ValidateColumnsOnPage(numberOfColumns) {
        Selectors.esPage('columnElements')
            .should('have.length', numberOfColumns)
    }

    static ValidateThereIsCard(cardText) {
        Selectors.esPage('cardTitle')
            .should('contain.text', cardText)
    }

    static ValidateCardUrl(cardText, url) {
        Selectors.esPage('cardTitle')
            .contains(cardText).parent().parent().next().
            find('a').invoke('attr', 'href').then((href) => {
                expect(href).to.be.equal(url)
            })
    }
}

export default EsPage;