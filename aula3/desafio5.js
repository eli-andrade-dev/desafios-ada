// Crie um objeto chamado pessoa com as propriedades nome, idade, e cidade.
// Verifique se a pessoa tem 18 anos ou mais (Exibir apenas true ou false)
// Verifique se a pessoa não é de uma cidade chamada "São Paulo" (True ou False)

const pessoa = {
    nome: "Renata",
    idade: 25,
    cidade: "São Paulo"
};

const maiorDeIdade = pessoa.idade >= 18;

const naoSaoPaulo = pessoa.cidade !== "São Paulo";

console.log("Maior de idade:", maiorDeIdade);
console.log("Não é de São Paulo:", naoSaoPaulo);

// Fiquei confusa, não é de São Paulo tem que retornar true e é de São Paulo tem que retornar false?