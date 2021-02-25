describe ("Log in", () => {
    beforeEach(() =>  {
        cy.viewport(1920, 1080)
    })
    
    it ("Валидация полей авторизации",() => {
        cy.fixture('webBrizTv').then(data => {
            cy.visit(data.baseUrl)
            cy.get('a[href="/auth/login"]').click()
            
            cy.log('Авторизация с некорректным Email(без@)')
            cy.get('input[name="login"]').type(data.invalid_regauth_login)
            cy.get('input[name="password"]').type(data.correct_regauth_password)
            cy.get('button[type="submit"]').click()
            cy.get('span[class="i-m-error"]')
                .should('exist')
      
            cy.log('Авторизация с некорректным Email(без точки)')
            cy.get('input[name="login"]').clear().type(data.invalid_regauth_login2)
            cy.get('input[name="password"]').clear().type(data.correct_regauth_password)
            cy.get('button[type="submit"]').click()
            cy.get('span[class="i-m-error"]')
                .should('exist')

            cy.log('Авторизация с некорректным паролем')
            cy.get('input[name="login"]').clear().type(data.valid_auth_login)
            cy.get('input[name="password"]').clear().type(data.incorrect_auth_password)
            cy.get('button[type="submit"]').click()
            cy.get('span[class="i-m-error"]')
                .should('exist')

            cy.log('Авторизация с корректными данными')
            cy.get('input[name="login"]').clear().type(data.valid_auth_login)
            cy.get('input[name="password"]').clear().type(data.correct_regauth_password)
            cy.get('button[type="submit"]').click()
            cy.get('div[class="Toastify__toast Toastify__toast--success"]')
                .should('exist')
        })
    })
})