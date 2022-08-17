describe('API - Profile', () => {
    context('todos os perfis', () => {
        it('valida api de perfis', () => {
            cy.request({
                method: 'GET',
                url: '/api/profile',
            })
        })
    })
})
