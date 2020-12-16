/// <reference types="cypress"/>
const or = require("../../support/locators.json")

//define a class
export default class OpenAccountPageElements{
    openAccountBtn(){
        //return cy.get('body > div.ng-scope > div > div.ng-scope > div > div.borderM.box.padT20 > div:nth-child(3) > button')
        return cy.get(or.openaccountpage.openAccountBtn)
    }

    customerDropDown(){
        return cy.get(or.openaccountpage.customerDropDown)
    }
    
    currencyDropDown(){
         return cy.get(or.openaccountpage.currencyDropDown)
    }

    processBtn(){
         return cy.get(or.openaccountpage.processBtn)
    }

}