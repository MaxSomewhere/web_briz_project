const { get } = require("http")
//comment
describe ("{Profile", () => {
    beforeEach(() =>  {
        cy.viewport(1920, 1080)
        cy.visit(data.baseUrl)
    })

    it ("Профиль",() => {
        cy.fixture('webBrizTv').then(data => {
            
            cy.log('Авторизация с корректными данными')
            cy.get('a[href="/auth/login"]').click()
            cy.get('input[name="login"]').clear().type(data.valid_auth_login)
            cy.get('input[name="password"]').clear().type(data.correct_regauth_password)
            cy.get('button[type="submit"]').click()
            cy.get('div[class="Toastify__toast Toastify__toast--success"]')
                .should('exist')

            
            
            cy.visit('https://ottdevfront.briz.ua/profile')
            
            cy.log('Проверка наличия элементов на странице')
            cy.get('div[class="ProfileMenu__name"]').should('exist')
            cy.get('div[class="ProfileMenu__name"]').should('exist')

            cy.log('Редактирование профиля с невалидным Email')
            cy.get('input[name="name"]').clear().type('Max')
            cy.get('input[name="email"]').clear().type(data.invalid_regauth_login)
            cy.get('button[type="submit"]').click()
            cy.get('span[class="i-m-error"]').should('exist')

            cy.log('Редактирование профиля с невалидным Email')
            cy.get('input[name="name"]').clear().type('Max')
            cy.get('input[name="email"]').clear().type(data.invalid_regauth_login2)
            cy.get('button[type="submit"]').click()
            cy.get('span[class="i-m-error"]').should('exist')

            cy.log('Редактирование профиля с зарегестрированным Email')
            cy.get('input[name="name"]').clear().type('Max')
            cy.get('input[name="email"]').clear().type(data.existing_reg_login)
            cy.get('button[type="submit"]').click()
            cy.get('span[class="i-m-error"]').should('exist')

            cy.log('Поля выбора даты')
            cy.get('select[name="day"]').should('exist')
            cy.get('select[name="month"]').should('exist')
            cy.get('select[name="year"]').should('exist')



            })
        })
    })