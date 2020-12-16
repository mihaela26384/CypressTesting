/// <reference types="cypress"/>
import OpenAccountPageElements from '../pageelements/OpenAccountPageElements'



//define a class
export default class OpenAccountPageActions{

    constructor (){
        globalThis.accountelement = new OpenAccountPageElements()
    }

    clickToOpenAccount(){
        accountelement.openAccountBtn().click()
    }

    selectCustomer(customer){
        accountelement.customerDropDown().select(customer)
        
    }

    selectCurency(currency){
        accountelement.currencyDropDown().select(currency)
    }

    clickProcess(){
        accountelement.processBtn().click()
    }

    openAccount(customer, currency){
        this.clickToOpenAccount()
        this.selectCustomer(customer)
        this.selectCurency(currency)
        this.clickProcess()
    }

    validateAlertMessage1(message1){
        cy.on('window:alert', (alertText1)=>{
            expect(alertText1).contains(message1)
            })

    }


}
