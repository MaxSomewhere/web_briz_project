const { DevBillLog } = require("../../../pages/DBillingLogin")
const { logistManage } = require("../../../pages/DBillingLogisticsManage")



describe ("Order manage", () => {
    beforeEach(() =>  {
        cy.viewport(1920, 1080)
    })

    it ("Прикрепление счёта к заказу",() => {
        cy.fixture('brizbilling').then(bill => {
                DevBillLog.devLogin(bill.logisticsManager, bill.dbillingPass)
            })
                cy.get('[data-cy=side-menu-logistics-index]').click()
                cy.get('[data-cy=side-menu-logistics-BillVatApprove]').click()
                cy.get('.el-input-group__append > .el-button').click()
                cy.get(':nth-child(2) > .el-col-xs-6 > .hidden-xs-only').click()
                cy.get('.el-col-md-6 > .el-input > .el-input__inner').clear().type('3400')

                logistManage.fileUpload('testimage9.jpg', 'image/jpg')
                logistManage.fileUpload('filedoc.doc', 'application/msword')

                cy.contains('Сохранить').click()
                cy.get('[style="z-index: 2001;"] > .el-dialog > .el-dialog__header > .el-dialog__headerbtn > .el-dialog__close').should('be.visible').click()
                
                
        
    })

})