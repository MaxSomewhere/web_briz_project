const { get } = require("http")

describe ("Main Page", () => {
    beforeEach(() =>  {
        cy.viewport(1920, 1080)
    })

    it ("Главная страница",() => {
        cy.fixture('webBrizTv').then(data => {
            cy.visit(data.baseUrl)

            cy.log('Авторизация с корректными данными')
            cy.get('a[href="/auth/login"]').click()
            cy.get('input[name="login"]').clear().type(data.valid_auth_login)
            cy.get('input[name="password"]').clear().type(data.correct_regauth_password)
            cy.get('button[type="submit"]').click()
            cy.get('div[class="Toastify__toast Toastify__toast--success"]')
                .should('exist')
            
            cy.log('Слайдер')
            cy.get('button[class="MainBanner__arrow MainBanner__arrow--right"]').should('exist').click()
            cy.get('button[class="MainBanner__arrow MainBanner__arrow--left"]').should('exist').click()
            cy.get('button[aria-label="Go to slide 1"]').should('exist').click()
            cy.get('button[aria-label="Go to slide 2"]').should('exist').click()
            cy.get('button[aria-label="Go to slide 3"]').should('exist').click()
            cy.get('button[aria-label="Go to slide 4"]').should('exist').click()


            cy.log('Популярные телеканалы')
            cy.get('main').find('section').eq(1).find('div').find('div').find('div[class="CardsSlider__button-group"]').find('button').eq(1).should('exist').click()
            cy.get('main').find('section').eq(1).find('div').find('div').find('div[class="CardsSlider__button-group"]').find('button').eq(0).should('exist').click()
            cy.get('main').find('section').eq(1).find('div').find('div').find('div[class="react-multi-carousel-list CardsSlider__slider "]').find('ul').find('li').eq(0).click()
            .wait(1000)
            cy.get('a[class="HeaderLogo"]').click()


            cy.log('Премьеры-главная')
            cy.get('main').find('section').eq(2).find('div').find('div').find('div[class="CardsSlider__button-group"]').find('button').eq(1).should('exist').click()
            cy.get('main').find('section').eq(2).find('div').find('div').find('div[class="CardsSlider__button-group"]').find('button').eq(0).should('exist').click()
            cy.get('main').find('section').eq(2).find('div').find('div').find('div[class="react-multi-carousel-list CardsSlider__slider "]').find('ul').find('li').eq(0).click()
            .wait(1000)
            cy.get('a[class="HeaderLogo"]').click()
            cy.get('main').find('section').eq(2).find('div').find('h2').find('a[class="show-all-btn"]').click().wait(1000)
            cy.get('a[class="HeaderLogo"]').click()
            cy.get('main').find('section').eq(2).find('div').find('h2').find('a').eq(0).click().wait(1000)
            cy.get('a[class="HeaderLogo"]').click()


            cy.log('Фильмы-главная')
            cy.get('main').find('section').eq(3).find('div').find('div').find('div[class="CardsSlider__button-group"]').find('button').eq(1).should('exist').click()
            cy.get('main').find('section').eq(3).find('div').find('div').find('div[class="CardsSlider__button-group"]').find('button').eq(0).should('exist').click()
            cy.get('main').find('section').eq(3).find('div').find('div').find('div[class="react-multi-carousel-list CardsSlider__slider "]').find('ul').find('li').eq(0).click()
            .wait(1000)
            cy.get('a[class="HeaderLogo"]').click()
            cy.get('main').find('section').eq(3).find('div').find('h2').find('a[class="show-all-btn"]').click().wait(1000)
            cy.get('a[class="HeaderLogo"]').click()
            cy.get('main').find('section').eq(3).find('div').find('h2').find('a').eq(0).click().wait(1000)
            cy.get('a[class="HeaderLogo"]').click()


            cy.log('Сериалы-главная')
            cy.get('main').find('section').eq(4).find('div').find('div').find('div[class="CardsSlider__button-group"]').find('button').eq(1).should('exist').click()
            cy.get('main').find('section').eq(4).find('div').find('div').find('div[class="CardsSlider__button-group"]').find('button').eq(0).should('exist').click()
            cy.get('main').find('section').eq(4).find('div').find('div').find('div[class="react-multi-carousel-list CardsSlider__slider "]').find('ul').find('li').eq(0).click()
            .wait(1000)
            cy.get('a[class="HeaderLogo"]').click()
            cy.get('main').find('section').eq(4).find('div').find('h2').find('a[class="show-all-btn"]').click().wait(1000)
            cy.get('a[class="HeaderLogo"]').click()
            cy.get('main').find('section').eq(4).find('div').find('h2').find('a').eq(0).click().wait(1000)
            cy.get('a[class="HeaderLogo"]').click()


            cy.log('Мультфильмы-главная')
            cy.get('main').find('section').eq(5).find('div').find('div').find('div[class="CardsSlider__button-group"]').find('button').eq(1).should('exist').click()
            cy.get('main').find('section').eq(5).find('div').find('div').find('div[class="CardsSlider__button-group"]').find('button').eq(0).should('exist').click()
            cy.get('main').find('section').eq(5).find('div').find('div').find('div[class="react-multi-carousel-list CardsSlider__slider "]').find('ul').find('li').eq(0).click()
            .wait(1000)
            cy.get('a[class="HeaderLogo"]').click()
            cy.get('main').find('section').eq(5).find('div').find('h2').find('a[class="show-all-btn"]').click().wait(1000)
            cy.get('a[class="HeaderLogo"]').click()
            cy.get('main').find('section').eq(5).find('div').find('h2').find('a').eq(0).click().wait(1000)
            cy.get('a[class="HeaderLogo"]').click()


            cy.log('Вам понравится')
            cy.get('main').find('section').eq(6).find('div').find('div').find('div[class="CardsSlider__button-group"]').find('button').eq(1).should('exist').click()
            cy.get('main').find('section').eq(6).find('div').find('div').find('div[class="CardsSlider__button-group"]').find('button').eq(0).should('exist').click()
            cy.get('main').find('section').eq(6).find('div').find('div').find('div[class="react-multi-carousel-list CardsSlider__slider "]').find('ul').find('li').eq(0).click()
            .wait(1000)
            cy.get('a[class="HeaderLogo"]').click()

        })
    })
})