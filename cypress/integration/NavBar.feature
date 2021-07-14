Feature: Support Tools Portal testing Demo - Navigation Bar feature

    Background: Login to the Support Tools Portal
        Given I log in
        Then I Validate the support tools portal is loaded
        And I visit home

    @TC-ID001 @GeniusBar @deprecated
    Scenario: Go to ES tab and validate cards
        Given I click the 'ES' tab
        Then I validate the ES page

    @TC-ID002 @GeniusBar @deprecated
    Scenario: Go to Omnitracs One tab and validate cards
        Given I click the 'Omnitracs One' tab
        Then I validate the Omnitracs One page

    # Refactor of the two first test cases as outline
    @TC-ID003 @GeniusBar
    Scenario Outline: Validate tabs contains correct number of cards
        Given I click the '<tabName>' tab
        Then I validate the tab '<tabName>' was selected correctly
        And I validate that <items> cards are visible on page

        Examples:
            | tabName       | items |
            | ES            | 7     |
            | Omnitracs One | 7     |

    @TC-ID004 @GeniusBar @negative
    Scenario Outline: Empty search error is displayed
        Given I select from the dropdown the option '<option>'
        And I click on search
        Then I get an error about the required field

        Examples:
            | option            |
            | Device Id         |
            | Business GUID     |
            | Device Group GUID |

    @TC-ID005 @GeniusBar @positive
    Scenario Outline: Valid results searching by Device Id are displayed
        Given I select from the dropdown the option '<option>'
        And I enter a filter '<filter>'
        And I click the radio option for '<enviroment>'
        And I click on search
        Then I dont get any errors
        And I see Device Id '<filter>' as serial number in the results

        Examples:
            | option    | filter    | enviroment |
            | Device Id | 170001031 | Prod       |
            | Device Id | 170001029 | Prod       |
            | Device Id | 170001031 | UAT        |
            | Device Id | 170001029 | UAT        |

    @TC-ID006 @GeniusBar @only
    Scenario Outline: Validate business MEID for SOTI enviroments
        Given I select from the dropdown the option 'Device Id'
        And I enter a filter '<filter>'
        And I click the radio option for '<enviroment>'
        And I click on search
        Then I dont get any errors
        And I validate the MEID is '<meid>' as expected

        Examples:
            | filter    | enviroment | meid             |
            | 170001031 | Prod       | -                |
            | 170001029 | Prod       | 356207071260880  |
            | 170001031 | UAT        | 356207071333018  |
            | 170001029 | UAT        | 356207071260880  |

    @TC-ID006 @GeniusBar @negative
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
            | Device Id | 170012345 | UAT        |
            | Device Id | 990001029 | UAT        |

    @TC-ID007 @GeniusBar @positive
    Scenario Outline: Valid results searching by Business GUID are displayed
        Given I select from the dropdown the option '<option>'
        And I enter a filter '<filter>'
        And I click on search
        Then I dont get any errors
        And I see Business GUID '<filter>' in the results

        Examples:
            | option        | filter                           |
            #| Business GUID | 617911432F274CE496CBC1E4DC3535A1 |
            | Business GUID | BEB84C8EB9761B63E0437A01EC0A3055 |

    @TC-ID008 @GeniusBar @positive
    Scenario Outline: Valid results searching by Business Group GUID are displayed
        Given I select from the dropdown the option '<option>'
        And I enter a filter '<filter>'
        And I click on search
        Then I dont get any errors
        And I see Business Group GUID '<filter>' in the results

        Examples:
            | option            | filter                           |
            | Device Group GUID | E8A4EFFE362C4604BF91B7729486A132 |
            | Device Group GUID | 44EC722696F64D1BB2306BC8DCBAD6AE |

    @TC-ID009 @GeniusBar @negative
    Scenario Outline: Invalid results searching by Business GUID are displayed
        Given I select from the dropdown the option '<option>'
        And I enter a filter '<filter>'
        And I click on search
        Then I see an error message '<message>'

        Examples:
            | option            | filter                           | message                      |
            | Business GUID     | 617911432F274CE496CBC1E4DC0005A1 | Business account not found   |
            | Business GUID     | BEB84C8EB9761B63E0437A01EC0A305  | The id has an invalid format |


    @TC-ID009 @GeniusBar @negative
    Scenario Outline: Invalid results searching by Device Group GUID are displayed
        Given I select from the dropdown the option '<option>'
        And I enter a filter '<filter>'
        And I click on search
        Then I see an error message '<message>'

        Examples:
            | option            | filter                           | message                      |
            | Device Group GUID | E8A4EFFE362C4604BF9155555486A132 | Device group not found       |
            | Device Group GUID | 44EC722696F64D1BB23012345CBAD6A  | The id has an invalid format |
