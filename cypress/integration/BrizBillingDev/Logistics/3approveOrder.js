const { DevBillLog } = require("../../../pages/DBillingLogin")
const { goToLogistics } = require("../../../pages/DBillingNavigation")

describe ("Order approve", () => {
    beforeEach(() =>  {
        cy.viewport(1920, 1080)
    })

    let inputFilterStatus = '.el-select__input';
    let buttonSearchOrder = '.el-input-group__append > .el-button';
    let buttonOrderOpen = ':nth-child(2) > .el-col-xs-6 > .hidden-xs-only';
    let buttonApproveOrder1 = ':nth-child(1) > .el-row > .logistics-bill-vat-approve-app-right-text-desktop > :nth-child(1) > .el-button';
    let buttonCancelOrder2 = ':nth-child(2) > .el-row > .logistics-bill-vat-approve-app-right-text-desktop > :nth-child(2) > .el-button';
    let buttonApproveOrder3 = ':nth-child(3) > .el-row > .logistics-bill-vat-approve-app-right-text-desktop > :nth-child(1) > .el-button';
    let buttonCloseOrder = '[style="z-index: 2001;"] > .el-dialog > .el-dialog__header > .el-dialog__headerbtn > .el-dialog__close';

    it ("Прикрепление счёта к заказу",() => {
        cy.fixture('brizbilling').then(bill => {
                DevBillLog.devLogin(bill.logisticsApprover, bill.dbillingPass)
            })
                goToLogistics.ordersList()

                cy.get(inputFilterStatus).type('Новый{downarrow}{enter}').type('Ожидает утверждения{downarrow}{enter}')
                cy.get(buttonSearchOrder).click()
                cy.get(buttonOrderOpen).click()
                cy.get(buttonApproveOrder1).click()
                cy.get(buttonCancelOrder2).click()
                cy.get(buttonApproveOrder3).click()

                cy.contains('Сохранить').click().wait(6000)
                // cy.get(buttonCloseOrder).should('be.visible').click()


        })
})