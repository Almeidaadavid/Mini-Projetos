// Receber uma quantidade de valor para avaliar
// Exibe se cada valor é par ou impar

exibirTipo(192);

function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++) {
        if (i % 2 === 0 ) {
            console.log("VALOR:",i, "- PAR")
        } else {
            console.log("VALOR:",i, "- IMPAR")
        }
    }
}