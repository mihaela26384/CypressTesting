/// <reference types="cypress"/>
import AddCustomerPageActions from '../../pageobjects/pageactions/AddCustomerPageActions'
import HomePageActions from '../../pageobjects/pageactions/HomePageActions'


describe("Add a customer", ()=>{

    const homePage = new HomePageActions()
    const addCustomerPage = new AddCustomerPageActions()

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

    it("Verify the successful addition of a customer", ()=>{
        addCustomerPage.addCustomerWithAllDetails(data.firstname, data.lastname, data.postcode)
        addCustomerPage.validateAlertMessage(data.custmsg)
    })


})