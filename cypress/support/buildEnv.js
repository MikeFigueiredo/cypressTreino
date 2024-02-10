const buildEnv = () => {

    //cy.server() // Método que cria uma instância de servidor simulado, o server foi descontinuado, utilizar o intercept( no lugar)

    cy.intercept(
        'https://barrigarest.wcaquino.me/signin', 
        {
            method: 'POST',
            response: {
                id: 10000,
                nome: 'Usuário falso',
                token: 'Uma string muito grande que não deveria ser aceito, mas na verdade vai'
            }
        }
    ).as('signin')

    cy.intercept(
        'https://barrigarest.wcaquino.me/saldo', 
        {
            method: 'GET',
            response: [
                {
                    conta_id: 999,
                    conta: 'Carteira',
                    saldo: '100.00'
                },
                {
                    conta_id: 9909,
                    conta: 'Banco',
                    saldo: '100000000.00'
                }
            ]
        }
    ).as('saldo')

    cy.intercept(
        'https://barrigarest.wcaquino.me/contas',
        {
            method: 'GET',
            response: [
                {
                    id: 1,
                    nome: 'Carteira',
                    visivel: true,
                    usuario_id: 1
                }
            ]
        }
    ).as('pegaConta')

    cy.intercept(
        'https://barrigarest.wcaquino.me/extrato/**',
        {
            method: 'GET',
            response: [
                {
                    //Inserir contas
                }
            ]
        }
    ).as('pegaConta')

}

export default buildEnv