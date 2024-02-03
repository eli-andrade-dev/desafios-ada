
let salario = parseFloat(prompt("Digite o salário:"));
let scoreDeCredito = parseInt(prompt("Digite o score de crédito:"));
let idade = parseInt(prompt("Digite a idade:"));


console.log(salario >= 5000 && scoreDeCredito >= 700 && idade >= 18? "Aprovado para o empréstimo." : "Não aprovado para o empréstimo.");
