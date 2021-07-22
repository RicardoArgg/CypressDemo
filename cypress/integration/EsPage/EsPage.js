/// <reference types="Cypress" />
import Loc from '../../support/Locators'

class EsPage {
    static ValidateColumnsOnPage(numberOfColumns) {
        Loc.esPage('columnElements')
            .should('have.length', numberOfColumns)
    }

    static ValidateThereIsCard(cardText) {
        Loc.esPage('cardTitle')
            .should('contain.text', cardText)
    }

    static ValidateCardUrl(cardText, url) {
        Loc.esPage('cardTitle')
            .contains(cardText).parent().parent().next().
            find('a').invoke('attr', 'href').then((href) => {
                expect(href).to.be.equal(url)
            })
    }
}

export default EsPage;