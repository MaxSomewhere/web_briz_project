const { loginForm } = require("../../../pages/Authauto")

describe ("Recovery Password", () => {
    beforeEach(() =>  {
        cy.viewport(1920, 1080)
    })
    
    it ("Валидация полей восстановления пароля",() => {
        cy.fixture('webBrizTv').then(data => {
            cy.visit(data.baseUrl)
            cy.get('a[href="/auth/login"]').click()
            cy.get('a[class="l-forgot-pass"]').click()
            
            cy.log('Восстановление с некорректным Email(без@)')
            loginForm.doRecovery(data.invalid_regauth_login)
            cy.get('span[class="i-m-error"]')
                .should('exist')
      
            cy.log('Восстановление с некорректным Email(без точки)')
            loginForm.doRecovery(data.invalid_regauth_login2)
            cy.get('span[class="i-m-error"]')
                .should('exist')
            
            cy.log('Восстановление с незарегестрированным Email')
            loginForm.doRecovery(data.incorrect_auth_login)
            cy.get('span[class="i-m-error"]')
                .should('exist')

            cy.log('Восстановление с неподтверждённым Email')
            loginForm.doRecovery(data.valid_reg_login)
            cy.get('span[class="i-m-error"]')
                .should('exist')
            

            cy.log('Восстановление с корректными данными')
            loginForm.doRecovery(data.valid_auth_login)
            cy.get('div[class="Toastify__toast Toastify__toast--info"]')
                .should('exist')
        })
    })
})