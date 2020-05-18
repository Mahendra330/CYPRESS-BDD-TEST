Feature: Customer Feedback
    As a Valid Customer
    I need to submit feeback
 Scenario:InValid Login
    Given I open Home Page
    When  Click on Feedback content
    And I want to wait 2000 milliseconds
    Then I see '/feedback.html' in the URL
    Then I see 'Contact Us' in the title
    And I want to wait 2000 milliseconds
    And I click on clear
    And I fill Username with 'username'
    And I fill email with 'username'
    And I fill subject with 'feedback'
    And I fill meaasage with 'InvalidPassword'
    And I click on Submit Message
    Then I see '/sendFeedback.html' in the URL
    Then I should see success Message
