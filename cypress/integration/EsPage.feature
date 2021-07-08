Feature: Support Tools Portal testing Demo - ES page feature

    Background: Login to the Support Tools Portal
        Given I log in
        Then I Validate the support tools portal is loaded

    @TC-ID0021 @GeniusBar @only
    Scenario: Go to ES tab and validate
        Given I click the 'ES' tab
        Then I validate '7' cards are displayed

    @TC-ID011 @GeniusBar @only
    Scenario Outline: Validate links from ES tab
        Given I click the 'ES' tab
        Then I validate '7' cards are displayed
        And I see '<card-title>' card on screen
        And I validate the link in '<card-title>' is equals as '<url>'

        Examples:
            | card-title          | url                                       |
            | Tracker             | https://intgapp.omnitracs.com/hupsuiWeb/  |
            | GOM                 | https://intgapp.omnitracs.com/icsuiWeb    |
            | Vehicle data source | https://intgapp.omnitracs.com/salesEARWeb |
            | GOM Bluetooth/WiFi  | https://intgapp.omnitracs.com/opsuiWeb    |
            | CDS                 | https://ocid.omnitracs.com                |
            | Looker Tool         | https://provhub.omnitracs.com             |
            | Status Dashboard    | https://customer.omnitracs.com/system/#!/ |