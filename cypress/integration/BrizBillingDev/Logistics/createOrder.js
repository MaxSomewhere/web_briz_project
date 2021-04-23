const { DevBillLog } = require("../../../pages/DBillingLogin")
// const { logistManage } = require("../../../pages/DBillingLogisticsManage")

describe ("Order creation", () => {
    beforeEach(() =>  {
        cy.viewport(1920, 1080)
    })

    it ("Создание заказа",() => {
        cy.fixture('brizbilling').then(bill => {
                DevBillLog.devLogin(bill.logisticsUser, bill.dbillingPass)
            })
                cy.get('[data-cy=side-menu-logistics-index]').click()
                cy.get('[data-cy=side-menu-logistics-BillVatApprove]').click()
                cy.get('button[class="el-button logistics-bill-vat-approve-app-full-width el-button--primary"]').click()
                cy.get('.el-form > :nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').type('MaxL_cy_test')
                cy.get(':nth-child(2) > .el-form-item__content > .el-select > .el-input > .el-input__inner').click().type('Однокозов Станислав Владимирович{downarrow}{enter}')
                cy.get('.el-textarea__inner').type('MaxL_cy_test')

                // logistManage.fileUpload('testimage9.jpg', 'image/jpg')
                // logistManage.fileUpload('filedoc.doc', 'application/msword')

                cy.get('.el-form > .el-button--primary > span').click()


                cy.get('.el-icon-search').click()
                cy.get(':nth-child(2) > .el-col-2 > span').should('exist')


                
                
                
        
    })

})