/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const cucumber = require('cypress-cucumber-preprocessor').default
const path = require('path');
const fs_extra = require('fs-extra');
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())

  const file = config.env.configFile || 'dev';
  return getConfigurationByFile(file);

  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(
    '././',
    'cypress/',
    'fixtures/',
    `run_env_${file}.json`
  );
  console.log('Config file: ' + file);
  return fs_extra.readJson(pathToConfigFile);
}

