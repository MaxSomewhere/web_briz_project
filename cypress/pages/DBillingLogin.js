export class DBillingLogin {
    devLogin (login, password){
        
            cy.visit("http://dbilling.briz.ua/Ru/#/", { failOnStatusCode: false })
                cy.get('input[name="login"]').type(login)
                cy.get('input[name="password"]').type(password)
                cy.get('input[type="submit"]').click() 
                                     
    }
}

export const DevBillLog = new DBillingLogin()