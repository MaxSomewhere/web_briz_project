export class AuthLoginform {

    correctlogin(login, password) {
            cy.get('a[href="/auth/login"]').click()
            cy.get('input[name="login"]').clear().type(login)
            cy.get('input[name="password"]').clear().type(password)
            cy.get('button[type="submit"]').click()
            cy.get('div[class="Toastify__toast Toastify__toast--success"]')
                .should('exist')
        
    }
    dologin(login, password) {
            cy.get('input[name="login"]').clear().type(login)
            cy.get('input[name="password"]').clear().type(password)
            cy.get('button[type="submit"]').click()    
    }

    doreg(login, password) {
            cy.get('input[name="login"]').clear().type(login)
            cy.get('input[name="password"]').clear().type(password)
            cy.get('button[type="submit"]').click() 
    }

    dorecovery(login) {
            cy.get('input[name="login"]').clear().type(login)
            cy.get('button[type="submit"]').click()
    }

}

export const Loginform = new AuthLoginform()

