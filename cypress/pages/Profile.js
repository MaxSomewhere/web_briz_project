let inputNameField = 'input[name="name"]';
let inputEmailField = 'input[name="email"]';
let buttonSubmitProfile = 'button[type="submit"]';

export class profileActions {
    editEmail(email) {
        cy.get(inputNameField).clear().type('Max')
        cy.get(inputEmailField).clear().type(email)
        cy.get(buttonSubmitProfile).click()
    }
}
export const Profile = new profileActions()