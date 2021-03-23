const { loginForm } = require("../../../pages/Authauto")

describe ("Log in", () => {
    beforeEach(() =>  {
        cy.viewport(1920, 1080)
    })
    
    it ("Валидация полей авторизации",() => {
        cy.fixture('webBrizTv').then(data => {
            cy.visit(data.baseUrl)
            cy.get('a[href="/auth/login"]').click()
            
            cy.log('Авторизация с некорректным Email(без@)')
            loginForm.doLogin(data.invalid_regauth_login, data.correct_regauth_password)
            cy.get('span[class="i-m-error"]')
                .should('exist')
      
            cy.log('Авторизация с некорректным Email(без точки)')
            loginForm.doLogin(data.invalid_regauth_login2, data.correct_regauth_password)
            cy.get('span[class="i-m-error"]')
                .should('exist')

            cy.log('Авторизация с некорректным паролем')
            loginForm.doLogin(data.valid_auth_login, data.incorrect_auth_password)
            cy.get('span[class="i-m-error"]')
                .should('exist')

            cy.log('Авторизация с корректными данными')
            loginForm.doLogin(data.valid_auth_login, data.correct_regauth_password)
            cy.get('div[class="Toastify__toast Toastify__toast--success"]')
                .should('exist')
        })
    })
})