import userData from '../fixtures/userData.json'
import LoginPage from '../Pages/loginPage'
import PurchaseFlow from '../Pages/purchaseFlow'

const purchaseFlow = new PurchaseFlow()
const loginPage = new LoginPage()

describe('Login Saucedemo Tests', () => { 
  it('purchase flow complete', () => {    
    loginPage.accessLoginPage(),
    loginPage.loginWithAnyUser(userData.userSuccessfull.username, userData.userSuccessfull.password)
    loginPage.checkAccessValid()     
    purchaseFlow.addBackpackToCart()
    purchaseFlow.goToCart()
    purchaseFlow.fillCheckoutForm('Bianca', 'Gomes', '1000')
    purchaseFlow.completePurchase()        
  })

})