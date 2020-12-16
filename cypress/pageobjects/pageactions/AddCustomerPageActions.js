/// <reference types="cypress"/>
import AddCustomerPageElements from '../pageelements/AddCustomerPageElements'



//define a class
export default class AddCustomerPageActions{

    constructor (){
        globalThis.element = new AddCustomerPageElements()
    }

    clickToAddACustomer(){
        element.addCustomerBtn().click()
    }

    fillFirstName(firstName){
        element.firstNameInputField().type(firstName)
    }

    fillLastName(lastName){
        element.lastNameInputField().type(lastName)
    }

    fillPostCode(postalCode){
        element.postalCodeInputField().type(postalCode)
    }

    sendAddCustomer(){
        element.confirmAddCustomerBtn().click()
    }

    addCustomerWithAllDetails(firstName, lastName, postalCode){
        this.clickToAddACustomer()
        this.fillFirstName(firstName)
        this.fillLastName(lastName)
        this.fillPostCode(postalCode)
        this.sendAddCustomer()
    }

    validateAlertMessage(message){
        cy.on('window:alert', (alertText)=>{
            expect(alertText).contains(message)
            })

    }


}
