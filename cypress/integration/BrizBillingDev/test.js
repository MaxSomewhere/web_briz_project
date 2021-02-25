describe ("Log in", () => {
    it ("Валидация полей авторизации",() => {
        cy.fixture('brizbilling').then(bill => {
            cy.visit("http://dbilling.briz.ua/Ru/#/", { failOnStatusCode: false })
            
            cy.log("Авторизация")
            cy.get('input[name="login"]').type("icno@briz.ua")
            cy.get('input[name="password"]').type("123123")
            cy.get('input[type="submit"]').click()


            cy.log("Переход на страницу теста при помощи поиска")
            cy.get('input[class="form-control"]').type("144444")
            cy.get('button[class="btn btn-warning"]').click()

            cy.log("Нажатием кнопки открываем новую страницу")
            cy.contains('Добавить Union-сервис').click()

           
        })
    })
})