const { DevBillLog } = require("../../../pages/DBillingLogin")
const { goToLogistics } = require("../../../pages/DBillingNavigation")

describe ("Order accountant", () => {
    beforeEach(() =>  {
        cy.viewport(1920, 1080)
    })

    let buttonSearchOrder = '.el-input-group__append > .el-button';
    let buttonOrderOpen = ':nth-child(2) > .el-col-xs-6 > .hidden-xs-only';
    let inputDateFirst = ':nth-child(1) > .el-row > .logistics-bill-vat-approve-app-right-text-desktop > :nth-child(1) > :nth-child(2) > .el-date-editor > .el-input__inner';
    let buttonPayApprove1 = '.logistics-bill-vat-approve-app-right-text-desktop > :nth-child(2) > .el-button';
    let inputDateSecond = ':nth-child(3) > .el-row > .logistics-bill-vat-approve-app-right-text-desktop > :nth-child(1) > :nth-child(2) > .el-date-editor > .el-input__inner';
    let buttonPayApprove2 = '.logistics-bill-vat-approve-app-right-text-desktop > :nth-child(2) > .el-button';

    it ("Прикрепление счёта к заказу",() => {
        cy.fixture('brizbilling').then(bill => {
                DevBillLog.devLogin(bill.logisticsAccountant, bill.dbillingPass)
            })
                goToLogistics.ordersList()

                cy.get(buttonSearchOrder).click()
                cy.get(buttonOrderOpen).click()
                cy.get(inputDateFirst).clear().type('27 Апрель 2021{enter}')
                cy.contains('Сохранить').click().wait(6000)

                    cy.contains('Ожидает оплаты').should('exist')

                cy.get(buttonPayApprove1).click()
                cy.get(inputDateSecond).clear().type('29 Апрель 2021{enter}')
                cy.contains('Сохранить').click().wait(6000)

                    cy.contains('Частично оплачен').should('exist')

                cy.get(buttonPayApprove2).click()
                cy.contains('Сохранить').click()

                    cy.contains('Оплачен').should('exist')
        })

})