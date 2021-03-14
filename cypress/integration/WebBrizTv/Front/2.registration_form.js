<<<<<<< HEAD:cypress/integration/WebBrizTv/2.registration_form.js
const { Loginform } = require("../../pages/Authauto")
=======
const { Loginform } = require("../../../support/pages/AuthRegForm")
>>>>>>> 5fad2e85c9e30cda03a6c23c690a2d1a845d105c:cypress/integration/WebBrizTv/Front/2.registration_form.js

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
            Loginform.doreg(data.invalid_regauth_login, data.correct_regauth_password)
            cy.get('span[class="i-m-error"]')
                .should('exist')
      
            cy.log('Регистрация с некорректным Email(без точки)')
            Loginform.doreg(data.invalid_regauth_login2, data.correct_regauth_password)
            cy.get('span[class="i-m-error"]')
                .should('exist')

            cy.log('Регистрация с невалидным паролем(5 символов)')
            Loginform.doreg(data.valid_reg_login, data.invalid_regauth_password)
            cy.get('span[class="i-m-error"]')
                .should('exist')

            cy.log('Регистрация с невалидным паролем(6 цифр без букв)')
            Loginform.doreg(data.valid_reg_login, data.invalid_regauth_password2)
            cy.get('span[class="i-m-error"]')
                .should('exist')

            cy.log('Регистрация с данными существующего пользователя')
            Loginform.doreg(data.existing_reg_login, data.correct_regauth_password)
            cy.get('span[class="i-m-error"]')
                .should('exist')

            cy.log('Регистрация с корректными данными')
            Loginform.doreg(data.valid_reg_login, data.correct_regauth_password)
            cy.get('div[class="Toastify__toast Toastify__toast--info"]')
                .should('exist')
        })
    })
})