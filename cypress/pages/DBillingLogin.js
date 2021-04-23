let inputLogin = 'input[name="login"]';
let inputPassword = 'input[name="password"]';
let buttonSubmit = 'input[type="submit"]';


export class DBillingLogin {
    devLogin (login, password){
        
            cy.visit("http://dbilling.briz.ua/Ru/#/", { failOnStatusCode: false })
                cy.get(inputLogin).type(login)
                cy.get(inputPassword).type(password)
                cy.get(buttonSubmit).click() 
    }
}
export const DevBillLog = new DBillingLogin()