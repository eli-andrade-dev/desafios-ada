// Adivinhe o Número
// ● Crie um programa que gere um número aleatório entre 1 e 100. Em
// seguida, peça ao usuário para adivinhar o número. Use um loop
// while para continuar pedindo ao usuário que adivinhe até que ele
// acerte o número. Forneça dicas informando se o número é maior ou
// menor.

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let tentativa;
let numeroDeTentativas = 0;

while (true) {
    tentativa = parseInt(prompt("Tente adivinhar o número (entre 1 e 100): "));
    numeroDeTentativas++;

    if (tentativa === numeroAleatorio) {
        console.log("Parabéns! Você acertou o número em " + numeroDeTentativas + " tentativas.");
        break;
    } else if (tentativa < numeroAleatorio) {
        console.log("O número é maior. Tente novamente.");
    } else {
        console.log("O número é menor. Tente novamente.");
    }
}
