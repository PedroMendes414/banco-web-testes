 describe('Transferencias', ()=> {
    beforeEach(()=> {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()

    })
    it('Deve transferir quando informo dados e valor válidos', ()=> {
        cy.realizarTransferencia('David Villa', 'João da Silva', '11')
        cy.verificarmensagemNoToast('Transferência realizada!')
    })

    it('Deve apresentar erro quando tentar transferir mais que 5000 sem o token', ()=> {
        cy.realizarTransferencia('David Villa', 'João da Silva', '5000.01')
        cy.verificarmensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
}) 