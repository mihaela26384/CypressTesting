/// <reference types="cypress"/>
import HomePageElements from '../pageelements/HomePageElements'


//define a class
export default class HomePageActions{

    constructor (){
        globalThis.homepageelement = new HomePageElements()
    }

    navigateToURL(){
        cy.visit('/')
    }

    validateTitle(){
        return cy.title()
    }

    loginAsBankManager(){
        homepageelement.bankManagerLoginBtn().click()
    }

    loginAsCustomer(){
        homepageelement.customerLoginBtn().click()
    }
}
