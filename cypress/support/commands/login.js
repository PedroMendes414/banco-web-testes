 Cypress.Commands.add('fazerLoginComCredenciaisValidas', () => {  
      cy.fixture('credenciais').then(credenciais => {
        cy.get('#username').click().type(credenciais.valida.usuario)
        cy.get('#senha').click().type(credenciais.valida.senha)
     })
        cy.contains('button', 'Entrar').click()
 })

 Cypress.Commands.add('fazerLoginComCredeniciaisInvalidas', ()=> {
     cy.fixture('credenciais').then(credenciais => {
        cy.get('#username').click().type(credenciais.invalido.usuario)
        cy.get('#senha').click().type(credenciais.invalido.senha)
    })

        cy.contains('button', 'Entrar').click()
 })