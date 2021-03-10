it ('Example GET request', ()=>{
        cy.request('https://ottdevfront.briz.ua/')

            .then((response)=>{
                console.log(response);

        })
})

it('Example POST request', ()=>{
    cy.request({
        method:'POST',
        url: 'https://ottdevfront.briz.ua/',
        body: '',
        headers: '',
    })
        .then((response)=>{
            console.log(response)
        })
})