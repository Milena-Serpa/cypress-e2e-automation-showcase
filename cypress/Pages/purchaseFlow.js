class PurchaseFlow{
    selectorsList() {
        const selectors = {
            //add to cart
            addToCartButton: "[data-test='add-to-cart-sauce-labs-backpack']",
            cartBadge: "[data-test='shopping-cart-badge']",
            cartLink: "[data-test='shopping-cart-link']",
            removeButton: "[data-test='remove-sauce-labs-backpack']",            
            //Forms checkout
            checkoutButton: "[data-test='checkout']",
            firstNameField: "[data-test='firstName']",
            lastNameField: "[data-test='lastName']",
            zipCodeField: "[data-test='postalCode']",
            continueButton: "[data-test='continue']",
            errorMessage: ".error-message-container",
            finishButton: "[data-test='finish']",
            //Final message
            successHeader: "[data-test='title']"
        }
        return selectors
    }
    
    addBackpackToCart() {
        cy.get(this.selectorsList().addToCartButton).click()
        cy.get(this.selectorsList().cartBadge).should('have.text', '1')
    }


    goToCart() {
        cy.get(this.selectorsList().cartLink).click()
    }

    fillCheckoutForm (firstName, lastName, zipCode) {
        cy.get(this.selectorsList().checkoutButton).click()
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().zipCodeField).type(zipCode)
        cy.get(this.selectorsList().continueButton).click()
    }

    completePurchase() {
        cy.get(this.selectorsList().finishButton).click()
        cy.get(this.selectorsList().successHeader)
        .should('be.visible')
        .and('have.text', 'Checkout: Complete!')  
    }
}

export default PurchaseFlow
