Feature: Support-tools testing Demo - Navigation Bar feature

Background: Login
Given I log in
Then I Validate the support tools portal is loaded

@TC-ID001 @GeniusBar @First
Scenario: Go to ES tab
Given I click the ES tab
Then I validate the ES page

@TC-ID001 @GeniusBar @Second
Scenario: Go to Omnitracs One tab
Given I click the Omnitracs One tab
Then I validate the Omnitracs One page

@TC-ID001 @GeniusBar @third
Scenario: empty search get an error

@TC-ID001 @GeniusBar @Second
Scenario: correct search get complete data
