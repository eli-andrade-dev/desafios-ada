// Jogo de Adivinhação com Limite
// ● Modifique o jogo de adivinhação do Desafio 4 para limitar o
// número de tentativas. Se o usuário não adivinhar o número dentro
// de um determinado número de tentativas (por exemplo, 5
// tentativas), o programa deve encerrar e informar o número
// correto.

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

const maxTentativas = 5;
let numeroDeTentativas = 0;

let tentativa;

while (numeroDeTentativas < maxTentativas) {
    tentativa = parseInt(prompt("Tente adivinhar o número (entre 1 e 100): "));
    numeroDeTentativas++;

    if (tentativa === numeroAleatorio) {
        console.log("Parabéns! Você acertou o número em " + numeroDeTentativas + " tentativa(s).");
        break;
    } else if (tentativa < numeroAleatorio) {
        console.log("O número é maior. Tente novamente.");
    } else {
        console.log("O número é menor. Tente novamente.");
    }
}

// Se o usuário não adivinhar dentro do número máximo de tentativas
if (numeroDeTentativas === maxTentativas) {
    console.log("Suas " + maxTentativas + " tentativas acabaram. O número correto era: " + numeroAleatorio);
}
