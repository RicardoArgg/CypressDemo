Feature: Support Tools Portal testing Demo - Navigation Bar feature

    Background: Login to the Support Tools Portal
        Given I log in
        Then I Validate the support tools portal is loaded

    @TC-ID001 @GeniusBar @First
    Scenario: Go to ES tab and validate
        Given I click the ES tab
        Then I validate the ES page

    @TC-ID002 @GeniusBar
    Scenario: Go to Omnitracs One tab and validate
        Given I click the Omnitracs One tab
        Then I validate the Omnitracs One page

    @TC-ID003 @GeniusBar
    Scenario: Empty device search get an error
        Given I click on search
        Then I get an error about the required field

    @TC-ID004 @GeniusBar
    Scenario Outline: Valid results searching by Device Id are displayed
        Given I select from the dropdown the option '<option>'
        And I enter a filter '<filter>'
        And I click the radio option for '<enviroment>'
        And I click on search
        Then I dont get any errors
        And I see results displayed

        Examples:
            | option    | filter    | enviroment |
            | Device Id | 170001031 | Prod       |
            | Device Id | 170001029 | Prod       |

    @TC-ID004 @GeniusBar
    Scenario Outline: Invalid results searching by Device Id
        Given I select from the dropdown the option '<option>'
        And I enter a filter '<filter>'
        And I click the radio option for '<enviroment>'
        And I click on search
        Then I see an error message about device not found
        And I dont see results displayed

        Examples:
            | option    | filter    | enviroment |
            | Device Id | 170012345 | Prod       |
            | Device Id | 990001029 | Prod       |

    @TC-ID004 @GeniusBar
    Scenario Outline: Valid results searching by Business GUID and Device Group are displayed
        Given I select from the dropdown the option '<option>'
        And I enter a filter '<filter>'
        And I click on search
        Then I dont get any errors

        Examples:
            | option            | filter                           |
            | Business GUID     | 617911432F274CE496CBC1E4DC3535A1 |
            | Business GUID     | BEB84C8EB9761B63E0437A01EC0A3055 |
            | Device Group GUID | E8A4EFFE362C4604BF91B7729486A132 |
            | Device Group GUID | 44EC722696F64D1BB2306BC8DCBAD6AE |

    @TC-ID004 @GeniusBar
    Scenario Outline: Invalid results searching by Business GUID and Device Group are displayed
        Given I select from the dropdown the option '<option>'
        And I enter a filter '<filter>'
        And I click on search
        Then I see an error message '<message>'

        Examples:
            | option            | filter                           | message                      |
            | Business GUID     | 617911432F274CE496CBC1E4DC3535A1 | Business account not found   |
            | Business GUID     | BEB84C8EB9761B63E0437A01EC0A305  | The id has an invalid format |
            | Device Group GUID | E8A4EFFE362C4604BF9155555486A132 | Device group not found       |
            | Device Group GUID | 44EC722696F64D1BB23012345CBAD6A  | The id has an invalid format |
