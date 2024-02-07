// Verificação de Triângulo
// ● Crie um programa que recebe três comprimentos de lados de um
// triângulo como entrada e determina se eles formam um triângulo
// equilátero (Todos os lados são iguais), isósceles (Dois lados
// são iguais) ou escaleno (Se nada é igual). Imprima a
// classificação do triângulo.

function classificarTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("Triângulo equilátero");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("Triângulo isósceles");
    } else {
        console.log("Triângulo escaleno");
    }
}


classificarTriangulo(5, 5, 5);  
classificarTriangulo(3, 4, 4);  
classificarTriangulo(3, 4, 5); 
