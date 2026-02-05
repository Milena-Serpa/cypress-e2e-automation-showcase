
class LoginPage {
    selectorsList = {
        usernameField: "#user-name",
        passwordField: "#password",
        loginButton: "#login-button",
        messageError: "[data-test='error']",
    }
    
    
    accessLoginPage() {
        cy.visit('https://www.saucedemo.com/')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList.usernameField).type(username)
        cy.get(this.selectorsList.passwordField).type(password)
        cy.get(this.selectorsList.loginButton).click()        
    }
    checkAccessValid() {
        cy.url().should('include', '/inventory.html')
    }
    checkAccessInvalid() {
        cy.get(this.selectorsList.messageError)   
    }   
    

}

export default LoginPage
