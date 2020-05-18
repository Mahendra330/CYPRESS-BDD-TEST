const URL='http://zero.webappsecurity.com/'
const Element_Feedback='Feedback'
const Ussername_input='#name'
const Email_input='#email'
const Subject_input='#subject'
const Message_input='#comment'
const Element_Clear='[type="reset"]'
const ClickOnSendMessage='input[name="submit"]'

class FeebbackPageObject{
    static clickOnURL(){
        cy.visit(URL)
    }
    static clickOnFeedbackContent(){
        cy.contains(Element_Feedback).click()
    }
    static enterUsername(name){
        cy.get(Ussername_input).type(name)
    }
    static enterEmail(Email){
        cy.get(Email_input).type(Email) 
    }
    static enterSubject(subject){
        cy.get(Subject_input).type(subject) 
    }
    static enterMessage(message){
        cy.get(Message_input).type(message) 
    }
    static clickOnclear(){
        cy.get(Element_Clear).click()
    }
    static clickOnSendMessage(){
        cy.get(ClickOnSendMessage).click()
    }
    static printErrorMessageforInvalidLogin(){
        cy.get(ErrorMessage).then(function(name){
            const errorName = name.text()
            cy.log(errorName)
        })
    }

}

export default FeebbackPageObject