<<<<<<< HEAD:cypress/integration/WebBrizTv/3.passRecovery_form.js
const { Loginform } = require("../../pages/Authauto")
=======
const { Loginform } = require("../../../support/pages/AuthRegForm")
>>>>>>> 5fad2e85c9e30cda03a6c23c690a2d1a845d105c:cypress/integration/WebBrizTv/Front/3.passRecovery_form.js

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
            Loginform.dorecovery(data.invalid_regauth_login)
            cy.get('span[class="i-m-error"]')
                .should('exist')
      
            cy.log('Восстановление с некорректным Email(без точки)')
            Loginform.dorecovery(data.invalid_regauth_login2)
            cy.get('span[class="i-m-error"]')
                .should('exist')
            
            cy.log('Восстановление с незарегестрированным Email')
            Loginform.dorecovery(data.incorrect_auth_login)
            cy.get('span[class="i-m-error"]')
                .should('exist')

            cy.log('Восстановление с неподтверждённым Email')
            Loginform.dorecovery(data.valid_reg_login)
            cy.get('span[class="i-m-error"]')
                .should('exist')
            

            cy.log('Восстановление с корректными данными')
            Loginform.dorecovery(data.valid_auth_login)
            cy.get('div[class="Toastify__toast Toastify__toast--info"]')
                .should('exist')
        })
    })
})