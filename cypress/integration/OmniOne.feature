Feature: Support Tools Portal testing Demo - Omnitracs One page feature
    This test suite tests the Omnitracs One page from Support tools portal

    Background: Login to the Support Tools Portal
        Given I log in
        Then I Validate the support tools portal is loaded

    @TC-ID0031 @GeniusBar @deprecated
    Scenario: Go to Omnitracs One tab and validate cards
        Given I click the 'Omnitracs One' tab
        Then I validate '7' cards are displayed


    @TC-ID033 @GeniusBar
    Scenario: Validate cards from Omnitracs One tab contains correct links by Datatables
        This test case validates the response code given by a request to the
        link is in each of the cards that can be found by its card title.
        Given I click the 'Omnitracs One' tab
        Then I validate '7' cards are displayed
        And I Validate the bellow codes are responses for each card link
            | card                | response |
            | Tracker             | 200      |
            | GOM                 | 401      |
            | Vehicle data source | 401      |
            | GOM Bluetooth/WiFi  | 401      |
            | CDS                 | 401      |
            | Looker Tool         | 200      |
            | Status Dashboard    | 200      |

    @TC-ID032 @GeniusBar
    Scenario Outline: Validate '<card>' card from Omnitracs One page contains correct links and validate its response as <resp-code>
        Given I click the 'Omnitracs One' tab
        Then I validate '7' cards are displayed
        And I see '<card>' card on screen
        And I validate the '<card>' card contains a link
        And I Validate the response code of the website is <resp-code>

        Examples:
            | card                | resp-code |
            | Tracker             | 200       |
            | GOM                 | 401       |
            | Vehicle data source | 401       |
            | GOM Bluetooth/WiFi  | 401       |
            | CDS                 | 401       |
            | Looker Tool         | 200       |
            | Status Dashboard    | 200       |