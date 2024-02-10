const locators = {
    LOGIN: {
        BTN_LOGIN: '.w-100',
        LINK: 'http://go2route-test.cargozilla.com.br/login',
        SENHA: '[id=password]',
        USUARIO: '[id=username]'

    },
    TELA_INICIAL_SISTEMA: {
        MENSAGEM_BEM_VINDO_USUARIO: '.header-greetings'
    },
    TELA_CADASTRO_PESSOAS: {
        ABA_PREENCHIMENTO_ENDERECO: ':nth-child(2) > .inactive',
        ABA_PRENCHIMENTO_CNH: ':nth-child(2) > .inactive',
        ABA_PREENCHIMENTO_INFORMACOES_FINANCEIRAS: ':nth-child(3) > .inactive',
        ABA_VISUALIZACAO_HISTORICO_DENTRO_VISUALIZACAO_CADASTRO: ':nth-child(5) > .inactive',
        BTN_NOVA_PESSOA: '.col-md-6 > .btn-primary',
        BTN_ABRIR_SELETOR_VINCULOS: ':nth-child(6) > :nth-child(2) > .css-2b097c-container > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer',
        BTN_ABRIR_SELETOR_CATEGORIA_HABILITACAO_CNH: ':nth-child(3) > :nth-child(1) > .css-2b097c-container > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer',
        BTN_ABRIR_SELETOR_ESTADO_CIVIL_CNH: ':nth-child(6) > .tab-pane > :nth-child(6) > :nth-child(2) > .css-2b097c-container > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer',
        BTN_SALVAR_CADASTRO: '.btn-success',
        BTN_FILTRO_PESQUISA_PESSOAS: '.btn-outline-primary > .fas',
        BTN_EXECUTAR_PESQUISA: '.btn-round',
        BTN_ACOES_APOS_FILTRAR_PESSOA: ".dropdown-toggle",
        BTN_VISUALIZAR_INFORMACOES_CADASTRO: '[title="Detalhar"]',
        COLUNA_EVENTO_HISTORICO_DENTRO_VISUALIZACAO_CADASTRO: '.table-responsive > .table > tbody > :nth-child(1) > :nth-child(1)',
        COLUNA_DATA_EVENTO_HISTORICO_DENTRO_VISUALIZACAO_CADASTRO: ":nth-child(1) > [style=\"text-align: center;\"]",
        INPUT_CPF_CNPJ_PESSOA: '#documento1',
        INPUT_EMAIL_PESSOA: '#email',
        INPUT_ENDERECO_LOGRADOURO: '#logradouro',
        INPUT_ENDERECO_BAIRRO: '#bairro',
        INPUT_ENDERECO_NUMERO: '#numero',
        INPUT_ENDERECO_COMPLEMENTO: '#complemento',
        INPUT_ENDERECO_CEP: '#cep',
        INPUT_ENDERECO_CIDADE: '.tab-pane > :nth-child(4) > :nth-child(1) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3',
        INPUT_SELECAO_ENDERECO_CIDADE_ITAQUAQUACETUBA: '#react-select-4-option-0',
        INPUT_ENDERECO_ESTADO: ':nth-child(4) > :nth-child(2) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3',
        INPUT_SELECAO_ENDERECO_ESTADO_SP: '#react-select-5-option-20',
        INPUT_NOME_FANTASIA: '#nome',
        INPUT_NOME_RAZAO_SOCIAL: '#nomeOficial',
        INPUT_NUMERO_TELEFONE_CELULAR_PESSOA: '#telefone',
        INPUT_NUMERO_TELEFONE_FIXO_PESSOA: '#telefoneFixo',
        INPUT_RG_PESSOA: '#documento2',
        INPUT_RNTRC: '#rntrc',
        INPUT_NUMERO_CNH: '#cnh',
        INPUT_DATA_EMISSAO_CNH: '#emissaoCnh',
        INPUT_DATA_VALIDADE_CNH: '#validadeCnh',
        INPUT_DATA_NASCIMENTO_CNH: '#dataNascimento',
        INPUT_ORGAO_EMISSOR_CNH: '#orgaoEmissorDocumento2',
        INPUT_NACIONALIDADE_CNH: '#nacionalidade',
        INPUT_NOME_MAE_CNH: '#nomeDaMae',
        INPUT_NOME_PAI_CNH: '#nomeDoPai',
        INPUT_NATURALIDADE_CNH: '#naturalidade',
        TEXTAREA_OBSERVACOES_CADASTRO: '#observacao',
        SELETOR_MEIO_PAGAMENTO: '#meioPagamento > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer',
        SELETOR_MEIO_PAGAMENTO_OPCAO_TARGET: '#react-select-9-option-0',
        SELETOR_VINCULOS_PROPRIETARIO: '#react-select-3-option-5',
        SELETOR_VINCULOS_MOTORISTA: '#react-select-3-option-1',
        SELETOR_CATEGORIA_HABILITACAO_B: '#react-select-10-option-1',
        SELETOR_ESTADO_CIVIL_CNH: '#react-select-11-option-0',
        SELETOR_NOME_FILTRO_PESSOAS: "#react-select-11-option-0 > div",
        SELETOR_TRANSPORTADOR: '#transportadorId > .css-yk16xz-control > .css-1hwfws3',
        PESQUISA_CAMPO_CPG_CNPJ: '#nomeOficial > .css-yk16xz-control > .css-1hwfws3'
    },
    MENU: {
        CONTAS: '[href="/contas"]',
        EXTRATO: '[data-test=menu-extrato]',
        MOVIMENTACAO: '[data-test=menu-movimentacao]',
        RESET: '[href="/reset"]',
        SETINGS: '[data-test=menu-settings]'
    }
}

export default locators;