/// <reference types="cypress"/>
import OpenAccountPageActions from '../../pageobjects/pageactions/OpenAccountPageActions'
import HomePageActions from '../../pageobjects/pageactions/HomePageActions'
import AddCustomerPageActions from '../../pageobjects/pageactions/AddCustomerPageActions'


describe("Add a Open one account", ()=>{

    const homePage = new HomePageActions()
    const addCustomerPage = new AddCustomerPageActions()
    const openAccountPage = new OpenAccountPageActions()

    before(()=>{
        // read the data from fixture and store it in a global variable
        cy.fixture('testdata').then((data)=>{
            globalThis.data = data
        })
    })
    beforeEach(()=>{
        homePage.navigateToURL()
        homePage.loginAsBankManager()
    })

    it("Verify the successful opening of a new account", ()=>{
        addCustomerPage.addCustomerWithAllDetails(data.firstname, data.lastname, data.postcode)
        addCustomerPage.validateAlertMessage(data.custmsg)
        openAccountPage.openAccount(data.customer, data.currency)
        openAccountPage.validateAlertMessage1(data.accountmsg)
    })


})