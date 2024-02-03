// Crie um vetor (array) chamado vetor1 com valores de coordenadas x e outro
// vetor vetor2 com valores de coordenadas y. Calcule o produto escalar (produto
// interno) desses dois vetores usando a fórmula matemática do produto escalar.

let notas = [7.5, 8.0, 9.5];

let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}

let media = somaNotas / notas.length;

console.log("Notas: " + notas.join(", "));
console.log("Média: " + media.toFixed(2));
