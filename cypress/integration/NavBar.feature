Feature: First suite testing support-tools

Background: Login
Given I log in
#npx cypress open

@tagOne @GeniusBar @First
Scenario: Go to ES tab
Given I click the ES tab
Then I validate the ES page

@tagOne @GeniusBar @Second
Scenario: Go to Omnitracs One tab
Given I click the Omnitracs One tab
Then I validate the Omnitracs One page
