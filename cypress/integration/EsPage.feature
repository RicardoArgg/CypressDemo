Feature: Support Tools Portal testing Demo - ES page feature

    Background: Login to the Support Tools Portal
        Given I log in
        Then I Validate the support tools portal is loaded

    @TC-ID0021 @GeniusBar
    Scenario: Go to ES tab and validate
        Given I click the 'ES' tab
        Then I validate '7' cards are displayed

    @TC-ID011 @GeniusBar
    Scenario Outline: Validate links from ES tab
        Given I click the 'ES' tab
        Then I validate '7' cards are displayed
        And I see '<card-title>' card on screen
        And I validate the link in '<card-title>' is equals as '<url>'

        Examples:
            | card-title | url                                          |
            | HUPS       | https://intgapp.omnitracs.com/hupsuiWeb/     |
            | ICS        | https://intgapp.omnitracs.com/icsuiWeb       |
            | Sales EAR  | https://intgapp.omnitracs.com/salesEARWeb    |
            | OPS        | https://intgapp.omnitracs.com/opsuiWeb       |
            | OCID       | https://ocid.omnitracs.com                   |
            | PH         | https://provhub.omnitracs.com                |
            | Metadmin   | https://customer.omnitracs.com/system/#!/    |
