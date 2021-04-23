const { DevBillLog } = require("../../../pages/DBillingLogin")
// const { logistManage } = require("../../../pages/DBillingLogisticsManage")
const { goToLogistics } = require("../../../pages/DBillingNavigation")

describe ("Order creation", () => {
    beforeEach(() =>  {
        cy.viewport(1920, 1080)
    })

let buttonCreate = 'button[class="el-button logistics-bill-vat-approve-app-full-width el-button--primary"]';
let inputOrderTitle = '.el-form > :nth-child(1) > .el-form-item__content > .el-input > .el-input__inner';
let inputOrderManager = ':nth-child(2) > .el-form-item__content > .el-select > .el-input > .el-input__inner';
let inputOrderContent = '.el-textarea__inner';
let buttonSubmitCreate = '.el-form > .el-button--primary > span';
let buttonSearchOrders = '.el-icon-search';


    it ("Создание заказа",() => {
        cy.fixture('brizbilling').then(bill => {
                DevBillLog.devLogin(bill.logisticsUser, bill.dbillingPass)
            })
                goToLogistics.ordersList()

                cy.get(buttonCreate).click()
                cy.get(inputOrderTitle).type('MaxL_cy_test')
                cy.get(inputOrderManager).click().type('Однокозов Станислав Владимирович{downarrow}{enter}')
                cy.get(inputOrderContent).type('MaxL_cy_test')
                cy.get(buttonSubmitCreate).click()


                cy.get(buttonSearchOrders).click()
                cy.get(':nth-child(2) > .el-col-2 > span').should('exist')


                
                
                
        
    })

})