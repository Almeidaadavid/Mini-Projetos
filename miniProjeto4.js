// Medidor de velocidade
// velocidade máxima de até 70
// A cada 5km acima do limite ganha 1 ponto
// Pontos > 12 -> "Carteira suspensa"
verificarVelocidade(85);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if ( velocidade <= velocidadeMaxima) {
        console.log("Ok")
    } else {
        const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto);
        if (pontos >= 12) {
            console.log("Carteira suspensa");
        } else {
            console.log("Pontos:", pontos)
        }
    }
}