const { DevBillLog } = require("../../../pages/DBillingLogin")


describe ("Order manage", () => {
    beforeEach(() =>  {
        cy.viewport(1920, 1080)
    })

    it ("Прикрепление счёта к заказу",() => {
        cy.fixture('brizbilling').then(bill => {
            cy.visit("http://dbilling.briz.ua/Ru/#/", { failOnStatusCode: false })
                DevBillLog.devLogin(bill.logisticsManager, bill.dbillingPass)
                cy.get('[data-cy=side-menu-logistics-index]').click()
                cy.get('[data-cy=side-menu-logistics-BillVatApprove]').click()
                cy.get('.el-input-group__append > .el-button').click()
                cy.get(':nth-child(2) > .el-col-xs-6 > .hidden-xs-only').click()
                cy.get('.el-col-md-6 > .el-input > .el-input__inner').clear().type('3400')

                cy.fixture('image9mb.jpg').then(fileContent => {
                    cy.get('input[class="el-input__inner"]').attachFile('image9mb.jpg')
                })
                
                
                
        })
    })

})