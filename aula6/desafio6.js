// Faça um mecanismo de busca dentro de um array usando for.
// [1,2,3,4,5,6,7,8,9,10]
// Achei o número 7

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let encontrado = false;

for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
        encontrado = true;
        break; 
    }
}

if (encontrado) {
    console.log("Achei o número 7!");
} else {
    console.log("Não achei o número 7.");
}
