it ('Briz', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://www.briz.ua/')
    cy.get('.header__wrapper .header__account-link:first-child').debug().click()

    cy.get('#login').type('test_acc')
    cy.get('#password').type('123123')
    cy.get('#BrizAuth button[type="submit"]').click()

}
)