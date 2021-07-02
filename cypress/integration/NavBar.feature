Feature: First suite testing support-tools

Background: Login
Given I log in

@tagOne @GeniusBar @First
Scenario: Go to ES tab
Given I click the ES tab
Then I got an error message

@tagOne @GeniusBar @Second
Scenario: Go to Omnitracs One tab
Given I click the Omnitracs One tab
Then I got an error message
