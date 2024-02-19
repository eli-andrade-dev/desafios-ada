// Crie um objeto representando uma pessoa com nome, idade e cidade.
// Utilize um loop for-in para imprimir no console todas as
// propriedades e os valores do objeto

let pessoa = {
   nome: "João",
   idade: 30,
   cidade: "São Paulo"
};

for (let propriedade in pessoa) {
   console.log(propriedade + ": " + pessoa[propriedade]);
}
