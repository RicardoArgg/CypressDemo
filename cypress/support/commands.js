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
Cypress.Commands.add('login', function () {
   cy.get("head>title", { timeout: 60000 }).should(($x) => {
      expect($x).to.not.equal('Support Tools Portal');
   })
   //cy.title().should('not.have.text','Support Tools Portal', {timeout: 10000})

   cy.get("head").find('title').invoke('text').then((text) => {
      switch (text) {
         case 'OmnitracsOne Login':
            cy.log("Executing OmnitracsOne Login...")
            cy.validateNewLogin()
            cy.loginNew()
            break;
         case 'Sign On':
            cy.log("Executing Sign On Login...")
            cy.validateLogin()
            cy.loginSso()
            break;
      }
   });
})

Cypress.Commands.add('loginSso', function () {
   cy.log("Logging in printed from commands.js")
   cy.get('input#identifierInput').type(Cypress.env('username'))
   cy.get('div#postButton>a').click()
   // cy.get('div#username-text').invoke("attr","class").should('not.contain', 'show')
   cy.get('input#password-field').type(Cypress.env('password'), { log: false })
   cy.get('a[onclick="postOk();"]').click()
})

Cypress.Commands.add('loginNew', function () {
   cy.log(Cypress.env('baseUrl'))
   cy.get('input[name="user-id"]').type(Cypress.env('username'))
   cy.get('button[type="submit"]').click()
   // cy.get('div#username-text').invoke("attr","class").should('not.contain', 'show')
   cy.get('span[class="display-flex break-word-anywhere"]').
      should('have.text', Cypress.env('username'))
   cy.get('input[name="password"]').type(Cypress.env('password'), { log: false })
   cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('validateSupportToolsHeader', function () {
   cy.log("Validating logo is displayed in Support tools home")
   cy.get('button#sideBarButton').should('be.visible')
})

Cypress.Commands.add('validateLogin', function () {
   cy.log("Waiting for the Omnitracs logo to load")
   cy.get('#header', { timeout: 15000 }).should('be.visible')
})

Cypress.Commands.add('validateNewLogin', function () {
   cy.log("Waiting for the Omnitracs logo to load")
   cy.get('app-root>app-login-process', { timeout: 1000 }).should('be.visible')
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
