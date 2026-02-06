import userData from '../fixtures/userData.json'
import LoginPage from '../Pages/loginPage.js'

const loginPage = new LoginPage()

describe('Login Saucedemo Tests', () => {  
  it('login sucessfull', () => {
    loginPage.accessLoginPage(),
    loginPage.loginWithAnyUser(userData.userSuccessfull.username, userData.userSuccessfull.password)
    loginPage.checkAccessValid()   
  })

  it('login failed', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFailed.username, userData.userFailed.password)  
    loginPage.checkAccessInvalid()
  })
})