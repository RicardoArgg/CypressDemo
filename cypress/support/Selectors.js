/// <reference types="Cypress" />


class Selectors {

    static navBar(webElement) {
        switch (webElement) {
            case 'searchByDropdown':        return cy.get('select[name="searchBy"]');
            case 'searchTerm':              return cy.get('input[onload="setHistoryList()"]');
            case 'searchButton':            return cy.get('button[class="button is-primary is-rounded"]');
            case 'inputErrorMessage':       return cy.get('st-device > div > span');
            case 'radioButtons':            return cy.get('input[type="radio"]');
            case 'tabElements':             return cy.get('div.navbar-end');
            case 'DeviceInfoElements':      return cy.get('div.div-info');
        }
    }

    static EsPage(webElement) {
        switch (webElement) {
            case 'columnElements':      return cy.get('div.column');
            case 'cardTitle':           return cy.get('div.card-content>div>div.title');
            case 'cardUrl':             return cy.get('div.card-footer>a');
        }
    }
}
export default Selectors;