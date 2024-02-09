// - Determinação do Maior Número
// ● Escreva um programa que receba três números como entrada e
// determina o maior deles. Imprima o número mais alto.


function determinarMaiorNumero(num1, num2, num3) {
    let maiorNumero = num1;

    if (num2 > maiorNumero) {
        maiorNumero = num2;
    }

    if (num3 > maiorNumero) {
        maiorNumero = num3;
    }

    console.log("O maior número é:", maiorNumero);
}

determinarMaiorNumero(10, 20, 15); 
determinarMaiorNumero(5, 3, 8);   
