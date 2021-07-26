/// <reference types="Cypress" />


class Loc {

    static navBarLocators = {
        searchByDropdown:       'select[name="searchBy"]',
        searchTerm:             'input[onload="setHistoryList()"]',
        searchButton:           'button[class="button is-primary is-rounded"]',
        inputErrorMessage:      'st-device > div > span',
        radioButtons:           'input[type="radio"]',
        EStab:                  'a[href="/es"]',
        OmnitracsOnetab:        'a[href="/omnitracsone"]',
        DeviceInfoElements:     'div.div-info',
        pieCanvas:              'div > canvas',
        businessGuidResult:     'span.att-data',
        resultsSections:        'div.div-info',
        resultsData:            'div.div-info span.att-data',
        resultsStrong:          'span > strong',
        lastSearch:             '#lastSearchesList'
    }

    static esPageLocators = {
        columnElements:     'div.column',
        cardTitle:          'div.card-content>div>div.title',
        cardUrl:            'div.card-footer>a'
    }

    static loginSsoLocators = {
        userInput:          'input#identifierInput',
        passInput:          'input#password-field',
        submitUserButton:   'div#postButton>a',
        submitCredButton:   'a[onclick="postOk();"]',
        WaitLogin:          '#header'
    }

    static loginOneLocators = {
        userInput:          'input[name="user-id"]',
        submitUserButton:   'button[type="submit"]',
        userValidation:     'span[class="display-flex break-word-anywhere"]',
        passInput:          'input[name="password"]',
        submitCredButton:   'button[type="submit"]',
        WaitLogin:          '.left-pan-input'
    }

    static navBar(webElement, timeout = null) {
        return this.getElement(this.navBarLocators, webElement, timeout)
    }

    static esPage(webElement, timeout = null) {
        return this.getElement(this.esPageLocators, webElement, timeout)
    }

    static loginSso(webElement, timeout = null) {
        return this.getElement(this.loginSsoLocators, webElement, timeout)
    }

    static loginOne(webElement, timeout = null) {
        return this.getElement(this.loginOneLocators, webElement, timeout)
    }

    static getElement(dict, webElement, timeout) {
        if (timeout) {
            return cy.get(dict[webElement], { timeout: timeout });
        }
        return cy.get(dict[webElement]);
    }
}

export default Loc;
