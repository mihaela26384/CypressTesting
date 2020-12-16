/// <reference types="cypress"/>
const or = require("../../support/locators.json")

//define a class
export default class AddCustomerPageElements{
    addCustomerBtn(){
        //return cy.get('body > div.ng-scope > div > div.ng-scope > div > div.borderM.box.padT20 > div:nth-child(3) > button')
        return cy.get(or.addcustomerpage.addCustBtn)
    }

    firstNameInputField(){
        return cy.get(or.addcustomerpage.firstName)
    }
    
    lastNameInputField(){
    return cy.get(or.addcustomerpage.lastName)
    }

    postalCodeInputField(){
    return cy.get(or.addcustomerpage.postalCode)
    }

    confirmAddCustomerBtn(){
    return cy.get(or.addcustomerpage.confirmAddCustBtn)
    }
}