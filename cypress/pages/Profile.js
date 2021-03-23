export class profileActions {
    editEmail(email) {
        cy.get('input[name="name"]').clear().type('Max')
        cy.get('input[name="email"]').clear().type(email)
        cy.get('button[type="submit"]').click()
    }
}
export const Profile = new profileActions()