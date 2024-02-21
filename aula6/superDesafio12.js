// 12 - Fazer um simulador de rolagem de dados, que receba como input N
// dados e N lados e quantidade de tentativas e mostre as rolagens
// individuais e a soma dos valores
// Entradas:
// Quantidade de dados: 3
// Quantidade de lados: 9
// Quantidade de tentativas: 3

function rolarDado(lados) {
   return Math.floor(Math.random() * lados) + 1;
}

function RolagemDeDados(quantidadeDados, quantidadeLados, quantidadeTentativas) {
   for (let t = 0; t < quantidadeTentativas; t++) {
       let soma = 0;

       for (let i = 0; i < quantidadeDados; i++) {
           let resultado = rolarDado(quantidadeLados);
           console.log(`Tentativa ${t + 1}, Dado ${i + 1}: ${resultado}`);
           soma += resultado;
       }


       console.log("Tentativa", t + 1, "- Soma dos valores:", soma);
   }
}

let quantidadeDados = parseInt(prompt("Quantidade de dados:"));
let quantidadeLados = parseInt(prompt("Quantidade de lados:"));
let quantidadeTentativas = parseInt(prompt("Quantidade de tentativas:"));

RolagemDeDados(quantidadeDados, quantidadeLados, quantidadeTentativas);
