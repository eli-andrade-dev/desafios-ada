// Dado um array notas, calcule a média aritmética das notas, mas ignore a nota
// mais baixa e a nota mais alta do conjunto.
// const notas = [8, 9, 7, 5, 10, 6];

const notas = [8, 9, 7, 5, 10, 6];

const menorNota = Math.min(...notas);
const maiorNota = Math.max(...notas);

const notasFiltradas = notas.filter(nota => nota !== menorNota && nota !== maiorNota);

const media = notasFiltradas.reduce((acc, nota) => acc + nota, 0) / notasFiltradas.length;

console.log("Notas originais: " + notas.join(", "));
console.log("Notas após remoção da menor e maior: " + notasFiltradas.join(", "));
console.log("Média aritmética: " + media.toFixed(2));
