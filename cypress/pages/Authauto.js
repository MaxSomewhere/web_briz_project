let linkToLogin = 'a[href="/auth/login"]';
let inputLogin = 'input[name="login"]';
let inputPassword = 'input[name="password"]';
let buttonSubmit = 'button[type="submit"]';



export class AuthLoginform {

    correctLogin(login, password) {
            cy.get(linkToLogin).click()
            cy.get(inputLogin).clear().type(login)
            cy.get(inputPassword).clear().type(password)
            cy.get(buttonSubmit).click()
            cy.get('div[class="Toastify__toast Toastify__toast--success"]')
                .should('exist')
        
    }
    doLogin(login, password) {
            cy.get(inputLogin).clear().type(login)
            cy.get(inputPassword).clear().type(password)
            cy.get(buttonSubmit).click()    
    }

    doReg(login, password) {
            cy.get(inputLogin).clear().type(login)
            cy.get(inputPassword).clear().type(password)
            cy.get(buttonSubmit).click() 
    }

    doRecovery(login) {
            cy.get(inputLogin).clear().type(login)
            cy.get(buttonSubmit).click()
    }

}

export const loginForm = new AuthLoginform()

