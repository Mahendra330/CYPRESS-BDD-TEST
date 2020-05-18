/// <reference types="cypress" />
import { Given,When,Then } from 'cypress-cucumber-preprocessor/steps'
import loginPage from './loginPage'

Given('I open Login Page',() =>{
    loginPage.clickOnURL()
})
When('I fill username with {string}',Username =>{
    loginPage.submitDataOnUsername(Username)
})

When('I fill password with {string}',Password =>{
    loginPage.submitDataOnPassword(Password)
})
When('I click on Remember me',() =>{
    loginPage.clickOnRememberMe()
})
When('I click on Submit Login',() =>{
    loginPage.clickOnSubmit()
})
Then('I should see Home Page',() =>{
cy.contains('Cash Accounts').should('be.visible')
})

Then('I should see Error Message',() =>{
    loginPage.printErrorMessageforInvalidLogin()
})