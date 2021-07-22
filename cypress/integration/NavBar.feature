Feature: Support Tools Portal testing Demo - Navigation Bar feature
    This test suite tests the Navigation Bar from Support tools portal

    Background: Login to the Support Tools Portal
        This steps are executed before each scenario, we use them to
        login the user and open the 'support tools page'
        Given I log in
        Then I Validate the support tools portal is loaded

    @TC-ID001 @GeniusBar @deprecated
    Scenario: Go to ES tab and validate cards
        Given I click the 'ES' tab
        Then I validate the ES page

    @TC-ID002 @GeniusBar @deprecated
    Scenario: Go to Omnitracs One tab and validate cards
        Given I click the 'Omnitracs One' tab
        Then I validate the Omnitracs One page

    # Refactor of the two first test cases
    @TC-ID003 @GeniusBar
    Scenario Outline: Validate '<tabName>' tab contains <items> item cards
        Given I click the '<tabName>' tab
        Then I validate the tab '<tabName>' was selected correctly
        And I validate that <items> cards are visible on page

        Examples:
            | tabName       | items |
            | ES            | 7     |
            | Omnitracs One | 7     |

    @TC-ID004 @GeniusBar @negative
    Scenario Outline: Empty search error is displayed when filter is empty searching by '<option>'
        Given I select from the dropdown the option '<option>'
        And I click on search
        Then I get an error about the required field

        Examples:
            | option            |
            | Device Id         |
            | Business GUID     |
            | Device Group GUID |

    @TC-ID005 @GeniusBar @negative
    Scenario Outline: SOTI enviroment radio buttons are '<status>' when we try to search by '<option>'
        Given I select from the dropdown the option '<option>'
        And I click on search
        Then I see the SOTI enviroment options are '<status>'

        Examples:
            | option            | status   |
            | Device Id         | enabled  |
            | Business GUID     | disabled |
            | Device Group GUID | disabled |

    @TC-ID006 @GeniusBar @positive
    Scenario Outline: Serial number is loaded successfully for the Device ID: <filter> in <enviroment> SOTI
        Given I select from the dropdown the option 'Device Id'
        And I enter a filter '<filter>'
        And I click the radio option for '<enviroment>'
        And I click on search
        Then I dont get any errors
        And I see Device Id '<filter>' as serial number in the results

        Examples:
            | filter    | enviroment |
            | 170001031 | Prod       |
            | 170001029 | Prod       |
            | 170001031 | UAT        |
            | 170001029 | UAT        |

    @TC-ID007 @GeniusBar
    Scenario Outline: Business MEID is loaded successfully for the Device ID: <filter>
        Given I select from the dropdown the option 'Device Id'
        And I enter a filter '<filter>'
        And I click the radio option for '<enviroment>'
        And I click on search
        Then I dont get any errors
        And I validate the MEID is '<meid>' as expected

        Examples:
            | filter    | enviroment | meid            |
            | 170001031 | Prod       | -               |
            | 170001029 | Prod       | 356207071260880 |
            | 170001031 | UAT        | 356207071333018 |
            | 170001029 | UAT        | 356207071260880 |

    @TC-ID008 @GeniusBar @negative
    Scenario Outline: Device not found error is displayed searching <option> by Device Id in '<enviroment>' enviroment
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

    @TC-ID009 @GeniusBar @positive @deprecated
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

    @TC-ID010 @GeniusBar @positive @failing
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

    @TC-ID011 @GeniusBar @negative
    Scenario Outline: BA does not exist error is displayed when we search by Business GUID
        Given I select from the dropdown the option 'Business GUID'
        And I enter a filter '<filter>'
        And I click on search
        Then I see an error message "business account id doesn't exist"

        Examples:
            | filter                           |
            | 617911432F274CE496CBC1E4DC0005A1 |
            | BEB84C8EB9761B63E0437A01EC0A305E |
            | 76BE304C337A01EEB9A86B80AE0415CB |

    @TC-ID012 @GeniusBar @negative @failing
    Scenario Outline: Not found error is displayed when we search by Device Group GUID
        Given I select from the dropdown the option 'Device Group GUID'
        And I enter a filter '<filter>'
        And I click on search
        Then I see an error message 'Device group not found'

        Examples:
            | filter                           |
            | E362C4664ABC4EFFBF9155C55423A132 |
            | 4BF915AE8A4123E3655486A1E322C443 |
            | 423E3F9132E8A414365A55486A1E2C4B |

    @TC-ID013 @GeniusBar @negative
    Scenario Outline: Get an error about the invalid filter format when we search by '<option>'
        Given I select from the dropdown the option '<option>'
        And I enter a filter '<filter>'
        And I click on search
        Then I see an error message 'The id has an invalid format'

        Examples:
            | option            | filter                              |
            | Device Id         | 1234                                |
            | Device Id         | BEB84C8EB9761B63E0437A01EC0A3055    |
            | Device Id         | aaa11111111111111111111111---       |
            | Business GUID     | 170001031                           |
            | Business GUID     | 123456789ABCDE                      |
            | Business GUID     | BEB84C8EB9761B63E0437A01EC0A305A1S2 |
            | Device Group GUID | 170001031                           |
            | Device Group GUID | 123456789ABCDE                      |
            | Device Group GUID | BEB84C8EB9761B63E0437A01EC0A305A1S2 |

    @TC-ID014 @GeniusBar
    Scenario: Last filters are displayed in the history dropdown by Device Id
        Given I select from the dropdown the option 'Device Id'
        And I click on the filter
        Then I see the bellow filters saved in the dropdown searching
            | filters   |
            | 170012345 |
            | 990001029 |
            | 170001031 |
            | 170001029 |

    @TC-ID015 @GeniusBar
    Scenario: Last filters are displayed in the history dropdown by Device Group GUID
        Given I select from the dropdown the option 'Device Group GUID'
        And I click on the filter
        Then I see the bellow filters saved in the dropdown searching
            | filters                          |
            | E8A4EFFE362C4604BF91B7729486A132 |
            | 44EC722696F64D1BB2306BC8DCBAD6AE |

    @TC-ID016 @GeniusBar
    Scenario: Last filters are displayed in the history dropdown by Business GUID
        Given I select from the dropdown the option 'Business GUID'
        And I click on the filter
        Then I see the bellow filters saved in the dropdown searching
            | filters                          |
            | BEB84C8EB9761B63E0437A01EC0A3055 |
            | 76BE304C337A01EEB9A86B80AE0415CB |
            | 617911432F274CE496CBC1E4DC0005A1 |
