const URL='http://zero.webappsecurity.com/login.html'
const Username_input='#user_login'
const Password_input='#user_password'
const Rememberme_input='#user_remember_me'
const ClickOnSubmit='input[name="submit"]'
const ErrorMessage='.alert.alert-error'

class LoginPage{
    static clickOnURL(){
        cy.visit(URL)
    }

    static submitDataOnUsername(name){
        cy.get(Username_input).type(name)
    }
    static submitDataOnPassword(password){
        cy.get(Password_input).type(password) 
    }
    static clickOnRememberMe(){
        cy.get(Rememberme_input).click()
    }
    static clickOnSubmit(){
        cy.get(ClickOnSubmit).click()
    }
    static printErrorMessageforInvalidLogin(){
        cy.get(ErrorMessage).then(function(name){
            const errorName = name.text()
            cy.log(errorName)
        })
    }

}
export default LoginPage