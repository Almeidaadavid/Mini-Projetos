// Criar função somar que retorna a soma de todos os múltiplos de 3 e 5

somar(10);

function somar(limite) {
    let multiplos3 = 0;
    let multiplos5 = 0;

    for(i=0; i <= limite; i++) {
        if(i % 3 === 0 ) {
            console.log("i:",i)
            multiplos3 += i;
        }
        else if (i % 5 ===0 ) {
            multiplos5 += i;
        }
    }
    console.log(multiplos3,multiplos5)
    console.log(multiplos3 + multiplos5);
}