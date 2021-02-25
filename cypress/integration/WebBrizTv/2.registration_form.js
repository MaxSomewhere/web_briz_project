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
            cy.get('input[name="login"]').type(data.invalid_regauth_login)
            cy.get('input[name="password"]').type(data.correct_regauth_password)
            cy.get('button[type="submit"]').click()
            cy.get('span[class="i-m-error"]')
                .should('exist')
      
            cy.log('Регистрация с некорректным Email(без точки)')
            cy.get('input[name="login"]').clear().type(data.invalid_regauth_login2)
            cy.get('input[name="password"]').clear().type(data.correct_regauth_password)
            cy.get('button[type="submit"]').click()
            cy.get('span[class="i-m-error"]')
                .should('exist')

            cy.log('Регистрация с невалидным паролем(5 символов)')
            cy.get('input[name="login"]').clear().type(data.valid_reg_login)
            cy.get('input[name="password"]').clear().type(data.invalid_regauth_password)
            cy.get('button[type="submit"]').click()
            cy.get('span[class="i-m-error"]')
                .should('exist')

            cy.log('Регистрация с невалидным паролем(6 цифр без букв)')
            cy.get('input[name="login"]').clear().type(data.valid_reg_login)
            cy.get('input[name="password"]').clear().type(data.invalid_regauth_password2)
            cy.get('button[type="submit"]').click()
            cy.get('span[class="i-m-error"]')
                .should('exist')

            cy.log('Регистрация с данными существующего пользователя')
            cy.get('input[name="login"]').clear().type(data.existing_reg_login)
            cy.get('input[name="password"]').clear().type(data.correct_regauth_password)
            cy.get('button[type="submit"]').click()
            cy.get('span[class="i-m-error"]')
                .should('exist')

            cy.log('Регистрация с корректными данными')
            cy.get('input[name="login"]').clear().type(data.valid_reg_login)
            cy.get('input[name="password"]').clear().type(data.correct_regauth_password)
            cy.get('button[type="submit"]').click()
            cy.get('div[class="Toastify__toast Toastify__toast--info"]')
                .should('exist')
        })
    })
})