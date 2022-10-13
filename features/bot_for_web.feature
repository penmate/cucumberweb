Feature: Bot for Web

  Scenario: Bot for Web
    Given I visit outlook.com
    When I managing my outlook with this bot
    Then I should see the sent email list is empty