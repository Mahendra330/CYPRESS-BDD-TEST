import { defineStep } from 'cypress-cucumber-preprocessor/steps'

defineStep('I want to wait {int} milliseconds',time =>{
    cy.wait(time)
})
defineStep('I see {string} in the title',Title =>{
    cy.title().should('include',Title)
})

defineStep('I see {string} in the URL',URL =>{
    cy.url().should('include',URL)
})

defineStep('I Reload the browser',() =>{
    cy.reload()
})
