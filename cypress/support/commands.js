import loc from './locators' // Importar os locators do sistema

const tempoDelay = 100000

Cypress.Commands.add('limparStorageCokkie', () => {
  cy.clearLocalStorage()
  cy.clearCookies()
})

Cypress.Commands.add('login', (usuario, senha) => { //Função criada para executar o login no sistema
  cy.visit(loc.LOGIN.LINK)
  cy.get(loc.LOGIN.USUARIO).type(usuario).should('have.value', usuario)
  cy.get(loc.LOGIN.SENHA).type(senha, { log: false })
  cy.get(loc.LOGIN.BTN_LOGIN, { timeout: tempoDelay }).click()
})

Cypress.Commands.add('abrirFormCadastroNovaPessoa', () => {
  cy.get(loc.TELA_INICIAL_SISTEMA.MENSAGEM_BEM_VINDO_USUARIO, { timeout: tempoDelay })
  cy.visit('http://go2route-test.cargozilla.com.br/cadastros/pessoas')
  cy.get(loc.TELA_CADASTRO_PESSOAS.BTN_NOVA_PESSOA, { timeout: tempoDelay }).click()
})

Cypress.Commands.add('getToken', (user, password) => {
  cy.request({
    method: 'POST',
    url: 'http://api-test.attivilog.com.br/auth',
    body: {
      email: user,
      redirecionar: false,
      senha: password
    }
  }).its('body.token')
    .should('not.be.empty')
    .then(token => {
      Cypress.env('token', token)
      return token
    })
})

Cypress.Commands.add('preencherFormCadastroMotorista', function () {

  cy.fixture('massaDadosCadastroMotorista').as('motorista').then(() => {
    cy.get(loc.TELA_CADASTRO_PESSOAS.INPUT_CPF_CNPJ_PESSOA, { timeout: tempoDelay }).type(this.motorista.cpf_cnpj)
    cy.get(loc.TELA_CADASTRO_PESSOAS.INPUT_NOME_RAZAO_SOCIAL, { timeout: tempoDelay }).type(this.motorista.nome_razao_social)
    cy.get(loc.TELA_CADASTRO_PESSOAS.INPUT_NOME_FANTASIA, { timeout: tempoDelay }).type(this.motorista.nome_fantasia)
    cy.get(loc.TELA_CADASTRO_PESSOAS.INPUT_RG_PESSOA, { timeout: tempoDelay }).type(this.motorista.rg)
    cy.get(loc.TELA_CADASTRO_PESSOAS.INPUT_EMAIL_PESSOA, { timeout: tempoDelay }).type(this.motorista.email)
    cy.get(loc.TELA_CADASTRO_PESSOAS.INPUT_NUMERO_TELEFONE_CELULAR_PESSOA, { timeout: tempoDelay }).type(this.motorista.telefone_celular)
    cy.get(loc.TELA_CADASTRO_PESSOAS.INPUT_NUMERO_TELEFONE_FIXO_PESSOA, { timeout: tempoDelay }).type(this.motorista.telefone_fixo)
    cy.get(loc.TELA_CADASTRO_PESSOAS.TEXTAREA_OBSERVACOES_CADASTRO, { timeout: tempoDelay }).type('Motorista cadastrado via Cypress')
    cy.get(loc.TELA_CADASTRO_PESSOAS.BTN_ABRIR_SELETOR_VINCULOS, { timeout: tempoDelay }).click()
    cy.get(loc.TELA_CADASTRO_PESSOAS.SELETOR_VINCULOS_MOTORISTA, { timeout: tempoDelay }).click()
    cy.get(loc.TELA_CADASTRO_PESSOAS.ABA_PRENCHIMENTO_CNH, { timeout: tempoDelay }).click()
    cy.get(loc.TELA_CADASTRO_PESSOAS.INPUT_NUMERO_CNH, { timeout: tempoDelay }).type(this.motorista.numero_cnh)
    cy.get(loc.TELA_CADASTRO_PESSOAS.INPUT_DATA_EMISSAO_CNH, { timeout: tempoDelay }).type(this.motorista.data_emissao_cnh)
    cy.get(loc.TELA_CADASTRO_PESSOAS.INPUT_DATA_VALIDADE_CNH, { timeout: tempoDelay }).type(this.motorista.data_validade_cnh)
    cy.get(loc.TELA_CADASTRO_PESSOAS.BTN_ABRIR_SELETOR_CATEGORIA_HABILITACAO_CNH, { timeout: tempoDelay }).click()
    cy.get(loc.TELA_CADASTRO_PESSOAS.SELETOR_CATEGORIA_HABILITACAO_B, { timeout: tempoDelay }).click()
    cy.get(loc.TELA_CADASTRO_PESSOAS.INPUT_DATA_NASCIMENTO_CNH, { timeout: tempoDelay }).type(this.motorista.data_nascimento)
    cy.get(loc.TELA_CADASTRO_PESSOAS.INPUT_ORGAO_EMISSOR_CNH, { timeout: tempoDelay }).type(this.motorista.orgao_emissor_cnh)
    cy.get(loc.TELA_CADASTRO_PESSOAS.INPUT_NACIONALIDADE_CNH, { timeout: tempoDelay }).type(this.motorista.nacionalidade)
    cy.get(loc.TELA_CADASTRO_PESSOAS.INPUT_NOME_MAE_CNH, { timeout: tempoDelay }).type(this.motorista.nome_mae)
    cy.get(loc.TELA_CADASTRO_PESSOAS.INPUT_NOME_PAI_CNH, { timeout: tempoDelay }).type(this.motorista.nome_pai)
    cy.get(loc.TELA_CADASTRO_PESSOAS.INPUT_NATURALIDADE_CNH, { timeout: tempoDelay }).type(this.motorista.naturalidade)
    cy.get(loc.TELA_CADASTRO_PESSOAS.BTN_ABRIR_SELETOR_ESTADO_CIVIL_CNH, { timeout: tempoDelay }).click()
    cy.get(loc.TELA_CADASTRO_PESSOAS.SELETOR_ESTADO_CIVIL_CNH, { timeout: tempoDelay }).click()
    cy.get(loc.TELA_CADASTRO_PESSOAS.ABA_PREENCHIMENTO_ENDERECO, { timeout: tempoDelay }).click()
    cy.get(loc.TELA_CADASTRO_PESSOAS.INPUT_ENDERECO_CEP, { timeout: tempoDelay }).clear().type(this.motorista.endereco_cep)
      .should('have.value', this.motorista.endereco_cep)
    cy.get(loc.TELA_CADASTRO_PESSOAS.INPUT_ENDERECO_NUMERO, { timeout: tempoDelay }).focus().type(this.motorista.endereco_numero)
      .should('have.value', this.motorista.endereco_numero)
    cy.get(loc.TELA_CADASTRO_PESSOAS.INPUT_ENDERECO_LOGRADOURO, { timeout: tempoDelay }).clear().type(this.motorista.endereco_logradouro)
      .should('have.value', this.motorista.endereco_logradouro)
    cy.get(loc.TELA_CADASTRO_PESSOAS.INPUT_ENDERECO_BAIRRO, { timeout: tempoDelay }).clear().type(this.motorista.endereco_bairro)
      .should('have.value', this.motorista.endereco_bairro)
    cy.get(loc.TELA_CADASTRO_PESSOAS.INPUT_ENDERECO_COMPLEMENTO, { timeout: tempoDelay }).clear().type(this.motorista.endereco_complemento)
      .should('have.value', this.motorista.endereco_complemento)
    cy.get(loc.TELA_CADASTRO_PESSOAS.INPUT_ENDERECO_CIDADE, { timeout: tempoDelay }).type(this.motorista.endereco_cidade)
    cy.get(loc.TELA_CADASTRO_PESSOAS.INPUT_SELECAO_ENDERECO_CIDADE_ITAQUAQUACETUBA, { timeout: tempoDelay }).click()
    cy.get(loc.TELA_CADASTRO_PESSOAS.INPUT_ENDERECO_ESTADO, { timeout: tempoDelay }).type(this.motorista.endereco_estado)
    cy.get(loc.TELA_CADASTRO_PESSOAS.INPUT_SELECAO_ENDERECO_ESTADO_SP, { timeout: tempoDelay }).click()
    cy.get(loc.TELA_CADASTRO_PESSOAS.ABA_PREENCHIMENTO_INFORMACOES_FINANCEIRAS, { timeout: tempoDelay }).click()
    cy.get(loc.TELA_CADASTRO_PESSOAS.SELETOR_TRANSPORTADOR, { timeout: tempoDelay })
    cy.wait(1000)
  })

})

Cypress.Commands.add('simularRespostasApisExecutadasLogin', function () {

  cy.intercept(
    'POST',
    'http://controle-usuarios-test.cargozilla.com.br/login',
    {
      fixture: 'fixtureLogin'
    }
  ).as('simularRespostasApi1ExecutadasLogin')
  cy.wait('@simularRespostasApi1ExecutadasLogin')

  cy.intercept(
    'POST',
    'http://controle-usuarios-test.cargozilla.com.br/validate-token',
    {
      fixture: 'fixtureValidateToken'
    }
  ).as('simularRespostasApi2ExecutadasLogin')
  cy.wait('@simularRespostasApi2ExecutadasLogin')

  cy.intercept(
    'GET',
    'http://go2route-api-test.cargozilla.com.br/centro-distribuicao/por-empresa?inativar=false',
    {
      fixture: 'fixtureApiEmpresa'
    }
  ).as('simularRespostasApi3ExecutadasLogin')
  cy.wait('@simularRespostasApi3ExecutadasLogin')

  cy.intercept(
    'GET',
    'http://go2route-api-test.cargozilla.com.br/rota/visitas-dia?**',
    {
      fixture: 'fixtureRotaVisitasDia'
    }
  ).as('simularRespostasApi4ExecutadasLogin')
  cy.wait('@simularRespostasApi4ExecutadasLogin')

  cy.intercept(
    'GET',
    'http://go2route-api-test.cargozilla.com.br/rota/visitas-dia?**',
    {
      fixture: 'fixtureRotaVisitasDia'
    }
  ).as('simularRespostasApi5ExecutadasLogin')
  cy.wait('@simularRespostasApi5ExecutadasLogin')

  cy.intercept(
    'GET',
    'http://go2route-api-test.cargozilla.com.br/rota/visitas-dia?**',
    {
      fixture: 'fixtureRotaVisitasDia'
    }
  ).as('simularRespostasApi6ExecutadasLogin')
  cy.wait('@simularRespostasApi6ExecutadasLogin')

  cy.intercept(
    'GET',
    'http://go2route-api-test.cargozilla.com.br/rota/visitas-dia?**',
    {
      fixture: 'fixtureRotaVisitasDia'
    }
  ).as('simularRespostasApi7ExecutadasLogin')
  cy.wait('@simularRespostasApi7ExecutadasLogin')

  cy.intercept(
    'GET',
    'http://go2route-api-test.cargozilla.com.br/rota/visitas-dia?**',
    {

      fixture: 'fixtureRotaVisitasDia'
    }
  ).as('simularRespostasApi8ExecutadasLogin')
  cy.wait('@simularRespostasApi8ExecutadasLogin')

  cy.intercept(
    'GET',
    'http://go2route-api-test.cargozilla.com.br/rota/visitas-dia?**',
    {
      fixture: 'fixtureRotaVisitasDia'
    }
  ).as('simularRespostasApi9ExecutadasLogin')
  cy.wait('@simularRespostasApi9ExecutadasLogin')

})
