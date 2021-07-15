Feature: Support Tools Portal testing Demo - Omnitracs One page feature

    Background: Login to the Support Tools Portal
        Given I log in
        Then I Validate the support tools portal is loaded
        And I visit home

    @TC-ID0021 @GeniusBar
    Scenario: Go to Omnitracs One tab and validate cards
        Given I click the 'Omnitracs One' tab
        Then I validate '7' cards are displayed

    @TC-ID031 @GeniusBar
    Scenario Outline: Validate cards from Omnitracs One tab contains correct links
        Given I click the 'Omnitracs One' tab
        Then I validate '7' cards are displayed
        And I see '<card-title>' card on screen
        And I validate the '<card-title>' card contains a link
        And I Validate the response code of the website is <resp-code>

        Examples:
            | card-title          | resp-code    |
            | Tracker             | 200          |
            | GOM                 | 401          |
            | Vehicle data source | 401          |
            | GOM Bluetooth/WiFi  | 401          |
            | CDS                 | 401          |
            | Looker Tool         | 200          |
            | Status Dashboard    | 200          |
