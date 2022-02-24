// Máximo entre dois valores
//Escrever uma função que utiliza 2 números e retorna o maior entre eles

function maxDiv(x, y) {
    if (x > y) {
        return x
    }
    return y;
}

let valorMaior = maxDiv(0, 8)
console.log(valorMaior)

// function maxDiv(x,y) {
//     return x > y ? x : y;
// }