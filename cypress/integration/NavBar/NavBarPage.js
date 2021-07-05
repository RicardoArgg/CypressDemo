/// <reference types="Cypress" />
import cssSelectors from '../../../support/cssSelectors';

const dayjs = require('dayjs');
const LOADING_WAIT = 1600;
const EXEC_WAIT = 10000;

class NavBar {
    static validatePortalTitle(name) {
        cssSelectors.navBar('navBarTitle').should('contain.text', name);
    }

    static ValidatePortal(name) {
        cy.get('#header', { timeout: 15000 }).should('be.visible')
    }
}