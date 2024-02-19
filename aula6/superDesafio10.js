// 10 - Fazer um simulador de rolagem de dados, que receba como input N
// dados de 6 lados e mostre as rolagens individuais e a soma dos
// valores
// Entradas:
// Quantidade de dados: 2

function rolarDado() {
   return Math.floor(Math.random() * 6) + 1;
}

function simuladorDeRolagemDeDados(quantidadeDados) {
   let soma = 0;

   for (let i = 0; i < 2; i++) {
       let resultado = rolarDado();
       console.log(`Dado ${i + 1}: ${resultado}`);
       soma += resultado;
   }


   console.log("Soma dos valores:", soma);
}

let quantidadeDados = parseInt(prompt("Quantidade de dados (N) de 6 lados:"));

simuladorDeRolagemDeDados();
