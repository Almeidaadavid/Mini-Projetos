//Função que exibe a quantidade de * que a linha possui

exibirAsteriscos(8)

function exibirAsteriscos(linhas) {
    for (let linha = 1; linha <= linhas; linha++) {
        let padrao = '';
        for(let i = 0; i < linha; i++) {
            padrao += '*'
        }
        console.log(padrao);
    }
}