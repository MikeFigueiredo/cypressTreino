/// <reference types="cypress" />

import dadosSensiveis from "../../support/dadosSensiveis";

describe('Verificar a obrigatoriedade dos campos do cadastro do motorista', () => {

    before(() => {

        cy.limparStorageCokkie()
        cy.login(dadosSensiveis.LOGIN.usuario, dadosSensiveis.LOGIN.senha)

    });

    it.only('Validação de campos obrigatórios - Configuração padrão sem o transportador informado', function () {

        //cy.simularRespostasApisExecutadasLogin()
        cy.abrirFormCadastroNovaPessoa()
        cy.preencherFormCadastroMotorista()

    });

    it('Validação de campos obrigatórios - Motorista possui transportador com o meio de pagamento informado', () => {

    });

});