// Números Primos
// ● Crie um programa que peça ao usuário para inserir um número e
// use um loop while para verificar se o número é primo ou não. Um
// número primo é aquele que só é divisível por 1 e por ele mesmo.
// Imprima se o número é primo ou não.


let numero = parseInt(prompt("Digite um número: "));
let divisor = 2;
let ehPrimo = true;

while (divisor < numero) {
    if (numero % divisor === 0) {
        ehPrimo = false;
        break;
    }
    divisor++;
}

if (ehPrimo && numero > 1) {
    console.log(numero + " é primo");
} else {
    console.log(numero + " não é primo");
}
