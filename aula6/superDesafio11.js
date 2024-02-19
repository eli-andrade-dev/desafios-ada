// 11 - Fazer um simulador de rolagem de dados, que receba como input N
// dados e N lados e mostre as rolagens individuais e a soma dos
// valores?
// Entradas:
// Quantidade de dados: 2
// Quantidade de lados: 9


function rolarDado(lados) {
   return Math.floor(Math.random() * lados) + 1;
}

function simuladorDeRolagemDeDados(quantidadeDados, quantidadeLados) {
   let soma = 0;

   for (let i = 0; i < quantidadeDados; i++) {
       let resultado = rolarDado(quantidadeLados);
       console.log(`Dado ${i + 1}: ${resultado}`);
       soma += resultado;
   }

   console.log("Soma dos valores:", soma);
}

let quantidadeDados = parseInt(prompt("Quantidade de dados:"));
let quantidadeLados = parseInt(prompt("Quantidade de lados:"));

simuladorDeRolagemDeDados(quantidadeDados, quantidadeLados);
