const { loginForm } = require("../../../pages/Authauto")

describe ("Profile", () => {
    beforeEach(() =>  {
        cy.viewport(1920, 1080)
        
    })

    it ("Профиль",() => {
        cy.fixture('webBrizTv').then(data => {
            cy.visit(data.baseUrl)
            
            cy.log('Авторизация с корректными данными')
            loginForm.correctLogin(data.valid_auth_login, data.correct_regauth_password)
            cy.get('div[class="Toastify__toast Toastify__toast--success"]')
                .should('exist')


            cy.log('Покупка базовой подписки')
            cy.get('a[href="/subscribe"]').click()
            cy.get('div[class="TariffsGridSection__container Container"]').find('div').eq(2).find('a[class="Btn Btn--primary"]').click()
            //cy.get('div[class="PaymentMethods__list"]').find('div').eq(1).find('span[class="PaymentCardOption__radio"]').click()
            cy.get('button[type="submit"]').click()
            cy.get('input[id="card_num"]').type('4111111111111111')
        })
    })
})