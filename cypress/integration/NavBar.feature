Feature: Support-tools testing Demo - Navigation Bar feature

    Background: Login
        Given I log in
        Then I Validate the support tools portal is loaded

    @TC-ID001 @GeniusBar @First
    Scenario: Go to ES tab
        Given I click the ES tab
        Then I validate the ES page

    @TC-ID002 @GeniusBar
    Scenario: Go to Omnitracs One tab
        Given I click the Omnitracs One tab
        Then I validate the Omnitracs One page

    @TC-ID003 @GeniusBar
    Scenario: empty search get an error
        Given I click on search
        Then I got an error about the required field

    @TC-ID004 @GeniusBar
    Scenario Outline: Valid results searching by Device Id are displayed
        Given I select from the dropdown the option '<option>'
        And I enter a filter '<filter>'
        And I click the radio option for '<enviroment>'
        And I click on search
        Then I dont get any errors

    Example: Valid devices
    option      |   filter      |  enviroment
    Device Id   |   170001031   |   Prod
    Device Id   |   170001029   |   Prod


#@TC-ID004 @GeniusBar @Second  @skip
#Scenario: correct search get complete data
