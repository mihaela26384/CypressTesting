/// <reference types="cypress"/>
const or = require("../../support/locators.json")

//define a class
export default class HomePageElements{
    customerLoginBtn(){
        //return cy.get('body > div.ng-scope > div > div.ng-scope > div > div.borderM.box.padT20 > div:nth-child(3) > button')
        return cy.get(or.homepage.customerLoginBtn)
    }

    bankManagerLoginBtn(){
        // return cy.get('button').contains('Bank Manager Login')
        return cy.get(or.homepage.bankManagerLoginBtn)
}
}