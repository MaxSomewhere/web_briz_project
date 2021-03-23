const { loginForm } = require("../../../pages/Authauto")

describe ("Registrtion", () => {
    beforeEach(() =>  {
        cy.viewport(1920, 1080)
    })
    
    it ("Валидация полей регистрации",() => {
        cy.fixture('webBrizTv').then(data => {
            cy.visit(data.baseUrl)
            cy.get('a[href="/auth/login"]').click()
            cy.get('a[class="reg-link"]').click()
            
            cy.log('Регистрация с некорректным Email(без@)')
            loginForm.doReg(data.invalid_regauth_login, data.correct_regauth_password)
            cy.get('span[class="i-m-error"]')
                .should('exist')
      
            cy.log('Регистрация с некорректным Email(без точки)')
            loginForm.doReg(data.invalid_regauth_login2, data.correct_regauth_password)
            cy.get('span[class="i-m-error"]')
                .should('exist')

            cy.log('Регистрация с невалидным паролем(5 символов)')
            loginForm.doReg(data.valid_reg_login, data.invalid_regauth_password)
            cy.get('span[class="i-m-error"]')
                .should('exist')

            cy.log('Регистрация с невалидным паролем(6 цифр без букв)')
            loginForm.doReg(data.valid_reg_login, data.invalid_regauth_password2)
            cy.get('span[class="i-m-error"]')
                .should('exist')

            cy.log('Регистрация с данными существующего пользователя')
            loginForm.doReg(data.existing_reg_login, data.correct_regauth_password)
            cy.get('span[class="i-m-error"]')
                .should('exist')

            cy.log('Регистрация с корректными данными')
            loginForm.doReg(data.valid_reg_login, data.correct_regauth_password)
            cy.get('div[class="Toastify__toast Toastify__toast--info"]')
                .should('exist')
        })
    })
})