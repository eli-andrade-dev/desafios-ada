// Crie um vetor (array) chamado notas com as notas de um aluno em três
// disciplinas. Em seguida, calcule a média das notas usando a fórmula matemática
// da média aritmética.

let notas = [7.5, 8.0, 9.5];

let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}

let media = somaNotas / notas.length;

console.log("Notas: " + notas.join(", "));
console.log("Média: " + media.toFixed(2));
