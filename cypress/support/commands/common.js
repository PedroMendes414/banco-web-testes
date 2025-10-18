Cypress.Commands.add('verificarmensagemNoToast', mensagem => {
    cy.get('.toast').should('have.text', mensagem)
})

Cypress.Commands.add('selecionarOpcaoNaCombox', (labelDoCampo, opcao) => {
    cy.get(`label[for= "${labelDoCampo}"]`).parent().as(`campo-${labelDoCampo}`)
    cy.get(`@campo-${labelDoCampo}`).click()
    cy.get(`@campo-${labelDoCampo}`).contains(opcao).click()
})