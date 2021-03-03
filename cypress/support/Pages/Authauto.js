export class Authauto {
    dologin(loginform) {
        cy.log('Авторизация с корректными данными')
            cy.get('a[href="/auth/login"]').click()
            cy.get('input[name="login"]').clear().type(data.valid_auth_login).should('value', data.valid_auth_login).and('be.visible')
            cy.get('input[name="password"]').clear().type(data.correct_regauth_password)
            cy.get('button[type="submit"]').click()
            cy.get('div[class="Toastify__toast Toastify__toast--success"]')
                .should('exist')
    }
}

export const Authauto = new Authauto()

