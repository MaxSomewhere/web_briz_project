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
let buttonSubmitCreate = '.el-form > .el-button--primary';
let buttonSearchOrders = '.el-icon-search';
let inputFilterManagers = '.el-col-md-8 > .el-form-item > .el-form-item__content > .el-select > .el-input > .el-input__inner';
let lastOrderNumber = ':nth-child(2) > .el-col-2 > span';

let inputFilterStatus = '.el-select__input';

    it ("Создание заказа",() => {
        cy.fixture('brizbilling').then(bill => {
                DevBillLog.devLogin(bill.logisticsUser, bill.dbillingPass)
            })
                goToLogistics.ordersList()

                //Создание заказа с пустым названием
                cy.get(buttonCreate).click()
                cy.get(inputOrderTitle).clear()
                cy.get(inputOrderManager).click().type('Однокозов Станислав Владимирович{downarrow}{enter}')
                cy.get(inputOrderContent).clear().type('MaxL_cy_test')
                cy.get(buttonSubmitCreate).should('be.disabled')

                //Создание заказа с пустым описанием
                cy.get(inputOrderTitle).clear().type('MaxL_cy_test')
                cy.get(inputOrderManager).click().type('Однокозов Станислав Владимирович{downarrow}{enter}')
                cy.get(inputOrderContent).clear()
                cy.get(buttonSubmitCreate).should('be.disabled')

                //Корректное создание заказа
                cy.get(inputOrderTitle).clear().type('MaxL_cy_test')
                cy.get(inputOrderManager).click().type('Однокозов Станислав Владимирович{downarrow}{enter}')
                cy.get(inputOrderContent).clear().type('MaxL_cy_test')
                cy.get(buttonSubmitCreate).should('be.enabled').click()


                cy.get(buttonSearchOrders).click()
                cy.get(lastOrderNumber).should('exist')

            })

            it ("Проверка прав заказчика",() => {
                cy.fixture('brizbilling').then(bill => {
                        DevBillLog.devLogin(bill.logisticsUser, bill.dbillingPass)
                    })
                        goToLogistics.ordersList()

                            // Проверка недоступности фильтра по менеджерам
                            cy.get(inputFilterManagers).should('be.disabled')

                            // Проверка фильтра по доступным статусам
                            cy.get(inputFilterStatus)
                                .type('Новый{downarrow}{enter}')
                                .type('Утвержден{downarrow}{enter}')
                                .type('Ожидает утверждения{downarrow}{enter}')                                
                                .type('Частично утвержден{downarrow}{enter}')
                                .type('Отклонён{downarrow}{enter}')
                                .type('Ожидает оплаты{downarrow}{enter}')
                                .type('Оплачен{downarrow}{enter}')
                                .type('Частично оплачен{downarrow}{enter}')

                    })
})