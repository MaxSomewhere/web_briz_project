const { DevBillLog } = require("../../../pages/DBillingLogin")
const { logistManage } = require("../../../pages/DBillingLogisticsManage")
const { goToLogistics } = require("../../../pages/DBillingNavigation")



describe ("Order manage", () => {
    beforeEach(() =>  {
        cy.viewport(1920, 1080)
    })

    let buttonSearchOrder = '.el-input-group__append > .el-button';
    let buttonOrderOpen = ':nth-child(2) > .el-col-xs-6 > .hidden-xs-only';
    let inputSumOrder = '.el-col-md-6 > .el-input > .el-input__inner';
    let buttonCloseOrder = '[style="z-index: 2001;"] > .el-dialog > .el-dialog__header > .el-dialog__headerbtn > .el-dialog__close';

    it ("Прикрепление 6 файлов к заказу",() => {
        cy.fixture('brizbilling').then(bill => {
                DevBillLog.devLogin(bill.logisticsManager, bill.dbillingPass)
            })
                goToLogistics.ordersList()    

                cy.get(buttonSearchOrder).click()
                cy.get(buttonOrderOpen).click()
                cy.get(inputSumOrder).clear().type('3400')

                logistManage.fileUpload('testimage4.45m.jpg', 'image/jpg')
                logistManage.fileUpload('testimage1.03m.jpg', 'image/jpg')
                logistManage.fileUpload('filedoc.doc', 'application/msword')
                // logistManage.fileUpload('filexlsx.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
                // logistManage.fileUpload('fileodt.odt', 'application/vnd.oasis.opendocument.text')
                // logistManage.fileUpload('filepdf.pdf', 'application/pdf')


                cy.contains('Сохранить').click()
                // cy.contains('Лимит отправки файлов 6, вы выбрали 1, всего, с учётом уже добавленных 7')
                cy.get(buttonCloseOrder).should('be.visible').click()
                        
    })

})