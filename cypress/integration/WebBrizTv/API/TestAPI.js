describe('HTTP Example', ()=> {


    it ('Example GET request', ()=> {

        cy.request('http://dbilling.briz.ua/Ru/#/', { failOnStatusCode: false })
            .then((response)=>{

            })
        
    });

});