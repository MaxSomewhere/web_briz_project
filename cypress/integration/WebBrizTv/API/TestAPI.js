describe('HTTP Example', function(){


    it ('Example GET request', function(){

        cy.request({
            method : 'GET',
            url : 'https://dev-payments.briz.ua/v2/get', // baseUrl is prepended to url
                       
        }).then(function(response){

            expect(response.body).to.have.property
        })
    });

});