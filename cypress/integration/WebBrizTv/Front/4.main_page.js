const { Loginform } = require("../../../support/pages/AuthRegForm")
const { mainpage } = require("../../../support/pages/MainPage")
const { get } = require("http")

describe ("Main Page", () => {
    beforeEach(() =>  {
        cy.viewport(1920, 1080)
    })

    it ("Главная страница",() => {
        cy.fixture('webBrizTv').then(data => {
            cy.visit(data.baseUrl)

            cy.log('Авторизация с корректными данными')
                Loginform.correctlogin(data.valid_auth_login, data.correct_regauth_password)
            
            
            cy.log('Слайдер')
            cy.get('button[class="MainBanner__arrow MainBanner__arrow--right"]').should('exist').click()
            cy.get('button[class="MainBanner__arrow MainBanner__arrow--left"]').should('exist').click()
            cy.get('button[aria-label="Go to slide 1"]').should('exist').click()
            cy.get('button[aria-label="Go to slide 2"]').should('exist').click()
            cy.get('button[aria-label="Go to slide 3"]').should('exist').click()
            cy.get('button[aria-label="Go to slide 4"]').should('exist').click()


            cy.log('Популярные телеканалы')
                mainpage.CardsSlider(1)

            cy.log('Премьеры-главная')
                mainpage.CardsSlider(2)
                mainpage.OpenCategory(2)


            cy.log('Фильмы-главная')
                mainpage.CardsSlider(3)
                mainpage.OpenCategory(3)

            cy.log('Сериалы-главная')
                mainpage.CardsSlider(4)
                mainpage.OpenCategory(4)

            cy.log('Мультфильмы-главная')
                mainpage.CardsSlider(5)
                mainpage.OpenCategory(5)

            cy.log('Вам понравится')
                mainpage.CardsSlider(6)

        })
    })
})