// Método para ler propriedades de um objeto e exibir somente as propriedades do tipo string que est~çao nesse objeto

const time = {
    nome: "Flamengo",
    fundacao: 1895,
    titulos: "Todos possíveis, rs",
    tecnico: "Paulo Sousa"
}
exibirPropriedades(time);

function exibirPropriedades(obj) {
    for (prop in obj) {
        if(typeof obj[prop] === 'string')
        console.log(prop,obj[prop])
    }
}