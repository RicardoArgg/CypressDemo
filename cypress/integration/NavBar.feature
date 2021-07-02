Feature: First suite testing support-tools

Background: Login
Given I log in

@tagOne @GeniusBar @First
Scenario: Open page click and validate
Given I click the submit button
Then I got an error message
