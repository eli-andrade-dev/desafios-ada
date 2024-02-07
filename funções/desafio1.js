// Verificação de Números Pares e Ímpares (If e Ternário)
// ● Escreva um programa que recebe um número como entrada e verifica
// se é par ou ímpar. Imprima "É par" se for par e "É ímpar" se for
// ímpar.

function parOuImpar(numero) {
    
    const mensagem = numero % 2 === 0 ? "É par" : "É ímpar";

    console.log(mensagem);
}

parOuImpar(6); 
parOuImpar(3);  
