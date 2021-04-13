describe('HTTP Example', ()=> {


    it ('Example GET request', ()=> {

        cy.request('https://dev-payments.briz.ua/v2/monobank_payment.php?command=pay&txn_id=4294937295&txn_date=20201010140023&account=1234&sum=133')
            .then((response)=>{

            })
        
    });

});