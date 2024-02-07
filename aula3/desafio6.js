// Crie um objeto chamado aluno com as propriedades nome, nota1, e nota2.
// Calcule a média das notas.
// Verifique se a média é maior ou igual a 7 usando operadores de comparação.

const aluno = {
    nome: "Aquele",
    nota1: 8,
    nota2: 7
};

const media = (aluno.nota1 + aluno.nota2) / 2;

const aprovado = media >= 7;

console.log("Média das notas:", media);
console.log("Aprovado:", aprovado);
