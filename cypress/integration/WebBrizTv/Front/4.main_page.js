const { loginForm } = require("../../../pages/Authauto")
const { mainPage } = require("../../../pages/Main_page")
const { get } = require("http")

describe ("Main Page", () => {
    beforeEach(() =>  {
        cy.viewport(1920, 1080)
    })

    it ("Главная страница",() => {
        cy.fixture('webBrizTv').then(data => {
            cy.visit(data.baseUrl)

            cy.log('Авторизация с корректными данными')
            loginForm.correctLogin(data.valid_auth_login, data.correct_regauth_password)
            
            
            cy.log('Слайдер')
            cy.get('button[class="MainBanner__arrow MainBanner__arrow--right"]').should('exist').click()
            cy.get('button[class="MainBanner__arrow MainBanner__arrow--left"]').should('exist').click()
                mainPage.Slider('button[aria-label="Go to slide 1"]')
                mainPage.Slider('button[aria-label="Go to slide 2"]')
                mainPage.Slider('button[aria-label="Go to slide 3"]')
                mainPage.Slider('button[aria-label="Go to slide 4"]')
            


            cy.log('Популярные телеканалы')
                mainPage.cardsSlider(1)

            cy.log('Премьеры-главная')
                mainPage.cardsSlider(2)
                mainPage.openCategory(2)


            cy.log('Фильмы-главная')
                mainPage.cardsSlider(3)
                mainPage.openCategory(3)

            cy.log('Сериалы-главная')
                mainPage.cardsSlider(4)
                mainPage.openCategory(4)

            cy.log('Мультфильмы-главная')
                mainPage.cardsSlider(5)
                mainPage.openCategory(5)

            cy.log('Вам понравится')
                mainPage.cardsSlider(6)

        })
    })
})