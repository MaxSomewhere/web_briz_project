export class mainpageactions {

    CardsSlider(num) {
        cy.get('main').find('section').eq(num).find('div').find('div').find('div[class="CardsSlider__button-group"]').find('button').eq(1).should('exist').click()
        cy.get('main').find('section').eq(num).find('div').find('div').find('div[class="CardsSlider__button-group"]').find('button').eq(0).should('exist').click()
        cy.get('main').find('section').eq(num).find('div').find('div').find('div[class="react-multi-carousel-list CardsSlider__slider "]').find('ul').find('li').eq(0).click()
        .wait(1000)
        cy.get('a[class="HeaderLogo"]').click()
    }

    OpenCategory(num) {
        cy.get('main').find('section').eq(num).find('div').find('h2').find('a[class="show-all-btn"]').click().wait(1000)
        cy.get('a[class="HeaderLogo"]').click()
        cy.get('main').find('section').eq(num).find('div').find('h2').find('a').eq(0).click().wait(1000)
        cy.get('a[class="HeaderLogo"]').click()
    }

    Slider(num) {
        cy.get(num).should('exist').click()
    }


}

export const mainpage = new mainpageactions()