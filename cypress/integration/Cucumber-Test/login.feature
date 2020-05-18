Feature: Loin to Application
    As a InValid User
    I can't Login to Application
    As a Valid User
    I need to Login to Application
 Scenario:InValid Login
    Given I open Login Page
    When  I fill username with 'InvalidUsername'
    And I want to wait 2000 milliseconds
    And I fill password with 'InvalidPassword'
    And I click on Remember me
    And I click on Submit Login
    Then I should see Error Message
    Then I see 'Log in' in the title
    Then I see '/login.html' in the URL
Scenario:Valid Login
    Given I open Login Page
    When  I fill username with 'username'
    And I fill password with 'password'
    And I click on Remember me
    And I click on Submit Login
    Then I should see Home Page
    Then I see 'Account Summary' in the title
    Then I see '/account-summary.html' in the URL