export class DBillingLogin {
    devLogin (login, password){
        
                
                cy.get('input[name="login"]').type(login)
                cy.get('input[name="password"]').type(password)
                cy.get('input[type="submit"]').click()    
               
         
    }
}

export const DevBillLog = new DBillingLogin()