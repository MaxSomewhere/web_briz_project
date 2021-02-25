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
            cy.get('input[name="login"]').type(data.invalid_regauth_login)
            cy.get('button[type="submit"]').click()
            cy.get('span[class="i-m-error"]')
                .should('exist')
      
            cy.log('Восстановление с некорректным Email(без точки)')
            cy.get('input[name="login"]').clear().type(data.invalid_regauth_login2)
            cy.get('button[type="submit"]').click()
            cy.get('span[class="i-m-error"]')
                .should('exist')
            
            cy.log('Восстановление с незарегестрированным Email')
            cy.get('input[name="login"]').clear().type(data.incorrect_auth_login)
            cy.get('button[type="submit"]').click()
            cy.get('span[class="i-m-error"]')
                .should('exist')

            cy.log('Восстановление с неподтверждённым Email')
            cy.get('input[name="login"]').clear().type(data.valid_reg_login)
            cy.get('button[type="submit"]').click()
            cy.get('span[class="i-m-error"]')
                .should('exist')
            

            cy.log('Восстановление с корректными данными')
            cy.get('input[name="login"]').clear().type(data.valid_auth_login)
            cy.get('button[type="submit"]').click()
            cy.get('div[class="Toastify__toast Toastify__toast--info"]')
                .should('exist')
        })
    })
})