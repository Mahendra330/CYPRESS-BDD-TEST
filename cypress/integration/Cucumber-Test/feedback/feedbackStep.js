/// <reference types="cypress" />
import { Given,When,Then } from 'cypress-cucumber-preprocessor/steps'
import feedbackPageObject from './feedbackPageObject'

Given('I open Home Page',() =>{
    feedbackPageObject.clickOnURL()
})
When('Click on Feedback content',() =>{
    feedbackPageObject.clickOnFeedbackContent()
})

When('I fill Username with {string}',username =>{
    feedbackPageObject.enterUsername(username)
})
When('I fill email with {string}',email =>{
    feedbackPageObject.enterEmail(email)
})
When('I fill subject with {string}',subject =>{
    feedbackPageObject.enterSubject(subject)
})
When('I fill meaasage with {string}',Message =>{
    feedbackPageObject.enterMessage(Message)
})
When('I click on clear',() =>{
    feedbackPageObject.clickOnclear()
})
When('I click on Submit Message',() =>{
    feedbackPageObject.clickOnSendMessage()
})

Then('I should see success Message',() =>{
    cy.get('.offset3').then(function(name){
        const MessageName = name.text()
        cy.log(MessageName)
    })
})