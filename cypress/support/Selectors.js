/// <reference types="Cypress" />

class Selectors {

    static navBar(webElement) {
        switch (webElement) {
            case 'searchByDropdown':        return cy.get('select[name="searchBy"]');
            case 'searchTerm':              return cy.get('input[onload="setHistoryList()"]');
            case 'searchButton':            return cy.get('button[class="button is-primary is-rounded"]');
            case 'inputErrorMessage':       return cy.get('st-device > div > span');
            case 'radioButtons':            return cy.get('input[type="radio"]');
            case 'esTab':                   return cy.get('a[href="/es"]');
            case 'omnitracsOneTab':         return cy.get('a[href="/omnitracsone"]');
            case 'ES tab':                  return cy.get('a[href="/es"]');
            case 'Omnitracs One tab':       return cy.get('a[href="/omnitracsone"]');
            case 'DeviceInfoElements':      return cy.get('div.div-info');
            case 'pieCanvas':               return cy.get('div > canvas');
            case 'businessGuidResult':      return cy.get('span.att-data')
            case 'resultsSections':         return cy.get('div.div-info')
            case 'resultsData':             return cy.get('div.div-info span.att-data')
            case 'resultsStrong':           return cy.get('span > strong')
        }
    }

    static esPage(webElement) {
        switch (webElement) {
            case 'columnElements':      return cy.get('div.column');
            case 'cardTitle':           return cy.get('div.card-content>div>div.title');
            case 'cardUrl':             return cy.get('div.card-footer>a');
        }
    }

    static loginSso(webElement) {
        switch (webElement) {
            case 'userInput':           return cy.get('input#identifierInput');
            case 'passInput':           return cy.get('input#password-field');
            case 'submitUserButton':    return cy.get('div#postButton>a');
            case 'submitCredButton':    return cy.get('a[onclick="postOk();"]');
            case 'WaitLogin':           return cy.get('#header', { timeout: 15000 });
        }
    }

    static loginOne(webElement) {
        switch (webElement) {
            case 'userInput':           return cy.get('input[name="user-id"]');
            case 'submitUserButton':    return cy.get('button[type="submit"]');
            case 'userValidation':      return cy.get('span[class="display-flex break-word-anywhere"]');
            case 'passInput':           return cy.get('input[name="password"]')
            case 'submitCredButton':    return cy.get('button[type="submit"]');
            case 'WaitLogin':           return cy.get('.left-pan-input', { timeout: 10000 });
        }
    }

}
export default Selectors;
