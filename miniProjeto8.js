// Exercicio Nota Escolar
// Obter a média a partir de um array

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const array = [100,90,80];

console.log(mediaAluno(array));

function mediaAluno(notas) {
    const media = calcMedia(notas);

    if (media<59) {
        return "F";
    } else if (media < 69) {
        return "D";
    } else if (media < 79) {
        return "C";
    } else if (media < 89) {
        return "B";
    } else {
        return "A";
    }
}

function calcMedia(array) {
    let soma = 0;
    for (let value of array) {
        soma += value;
    }
    const media = soma/(array.length);
}