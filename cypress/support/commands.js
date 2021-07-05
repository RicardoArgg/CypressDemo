// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

Cypress.Commands.add('loginSso', function () {
   cy.log("Logging in printed from commands.js")
   cy.get('input#identifierInput').type(Cypress.env('username'))
   cy.get('div#postButton>a').click()
   // cy.get('div#username-text').invoke("attr","class").should('not.contain', 'show')
   cy.get('input#password-field').type(Cypress.env('password'), { log: false })
   cy.get('a[onclick="postOk();"]').click()
})

Cypress.Commands.add('validateSupportToolsHeader', function () {
   cy.log("Validating logo is displayed in Support tools home")
   cy.get('button#sideBarButton').should('be.visible')
})

Cypress.Commands.add('validateLoginLogo', function () {
   cy.log("Waiting for the Omnitracs logo to load")
   cy.get('#header', { timeout: 15000 }).should('be.visible')
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
