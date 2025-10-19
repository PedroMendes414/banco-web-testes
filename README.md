# Projeto de Testes Automatizados - Banco Web

Este projeto foi desenvolvido como parte da Mentoria 2.0 para demonstrar a implementação de testes automatizados utilizando Cypress. O objetivo principal é fornecer aos alunos um exemplo prático de como estruturar e desenvolver testes end-to-end em uma aplicação bancária web.

## 📋 Pré-requisitos

Para executar este projeto, você precisará ter em execução:

1. API do Banco: [banco-apii](https://github.com/juliodelimas/banco-apii)
2. Aplicação Web: [banco-web](https://github.com/juliodelimas/banco-web)
3. Node.js instalado em sua máquina

## 🚀 Componentes do Projeto

```
cypress/
├── e2e/                    # Arquivos de teste
│   ├── login.cy.js        # Testes de login
│   └── transferencia.cy.js # Testes de transferência
├── fixtures/              # Dados de teste
│   └── credenciais.json   # Dados de credenciais
├── support/              # Arquivos de suporte
│   ├── commands.js       # Importação de comandos customizados
│   ├── e2e.js           # Configurações globais
│   └── commands/        # Pasta de comandos customizados
│       ├── common.js    # Comandos comuns
│       ├── login.js     # Comandos relacionados ao login
│       └── transferencia.js # Comandos relacionados à transferência
└── reports/             # Relatórios de teste
    └── html/           # Relatórios HTML gerados
```

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/PedroMendes414/banco-web-testes.git
```

2. Navegue até o diretório do projeto:
```bash
cd banco-web-testes
```

3. Instale as dependências:
```bash
npm install
```

## ⚡ Executando os Testes

O projeto oferece diferentes scripts para execução dos testes:

- Executar todos os testes em modo headless:
```bash
npm test
```

- Abrir o Cypress Test Runner:
```bash
npm run cy:open
```

- Executar testes com navegador visível:
```bash
npm run cy:headed
```

## 📝 Descrição dos Testes

### Login (`login.cy.js`)
- Testa o fluxo de autenticação do usuário
- Valida cenários de login com sucesso e falha
- Verifica mensagens de erro e redirecionamentos

### Transferência (`transferencia.cy.js`)
- Testa o fluxo de transferência entre contas
- Valida os campos obrigatórios
- Verifica o sucesso da transferência
- Testa cenários de erro

## 🛠️ Custom Commands

### Comandos de Login (`commands/login.js`)
- Comandos customizados para realizar o login
- Validações de campos e mensagens
- Gerenciamento de sessão

### Comandos de Transferência (`commands/transferencia.js`)
- Comandos para realizar transferências
- Validações de formulário


### Comandos Comuns (`commands/common.js`)
- Comandos utilitários reutilizáveis
- Validações comuns
- Interações básicas com a interface

## 📊 Relatórios

Os relatórios de teste são gerados automaticamente utilizando o `cypress-mochawesome-reporter` e podem ser encontrados no diretório `cypress/reports/html/` após a execução dos testes.

## 🤝 Contribuindo

1. Faça o fork do projeto
2. Crie sua branch de feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adicionando nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## ✍️ Autor

Pedro Mendes - [GitHub](https://github.com/PedroMendes414)

## 📄 Licença

Este projeto está sob a licença ISC - veja o arquivo [LICENSE](LICENSE) para mais detalhes.