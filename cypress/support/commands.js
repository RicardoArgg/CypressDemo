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
import Selectors from './Selectors'

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add('login', function () {

   // cy.get("head>title", { timeout: 60000 }).should(($x) => {
   //   expect($x).to.not.equal('Support Tools Portal');
   // })
   //cy.title().should('not.have.text','Support Tools Portal', {timeout: 10000})
   //cy.wait(8000);
   cy.get("body").then($body => {
      if ($body.find("div>canvas").length > 0) {
         cy.log("Already logged in...")
      } else {
         cy.log("Executing OmnitracsOne Login...")
         Cypress.env('homeTimeout', 10000)
         cy.WaitOneLogin()
         cy.loginOne()
      }
   });
   //cy.validateSupportTools()
});

Cypress.Commands.add('visitHome', function (timeOu) {
   cy.visit('home')
   cy.get('body').should('be.visible')
   cy.wait(timeOu)
})

Cypress.Commands.add('loginSso', function () {
   Selectors.loginSso('userInput').type(Cypress.env('username'))
   Selectors.loginSso('submitUserButton').click()
   Selectors.loginSso('passInput').type(Cypress.env('password'), { log: false })
   Selectors.loginSso('submitCredButton').click()
})

Cypress.Commands.add('loginOne', function () {
   cy.log("Executing OmnitracsOne Login...")
   Selectors.loginOne('userInput').type(Cypress.env('username'))
   Selectors.loginOne('submitUserButton').click()
   Selectors.loginOne('userValidation').should('have.text', Cypress.env('username'))
   Selectors.loginOne('passInput').type(Cypress.env('password'), { log: false })
   Selectors.loginOne('submitCredButton').click()

})

Cypress.Commands.add('validateSupportTools', function () {
   cy.log("Validating canvas from home is loaded")
   Selectors.navBar('pieCanvas').should('be.visible')
})

Cypress.Commands.add('newUrl', function () {
   cy.on('url:changed', (newUrl) => {
      cy.log("New URL:  %%%%%%%%%%  " + newUrl)
      if (newUrl.includes('login.dev.omnitracsone.com/#/checkuser')) {
         cy.log("Login IN  EVENT %%%%%%%%%%%%%%%%%%%%%%%%%%%  " + newUrl).then(() => {
            cy.loginOne()
         })
      }
   });
})

Cypress.Commands.add('WaitSsoLogin', function () {
   cy.log("Waiting for the Omnitracs logo to load")
   Selectors.loginSso('WaitLogin').should('be.visible')
})

Cypress.Commands.add('WaitOneLogin', function () {
   cy.log("Waiting for the Omnitracs New login element to load")
   Selectors.loginOne('WaitLogin').should('be.visible')
})

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

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
