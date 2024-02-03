function verificarElegibilidadeDesconto() {
 
    let idade = parseInt(prompt("Digite a idade:"));
    let compraMinima = parseFloat(prompt("Digite o valor da compra mínima:"));
    let isNewClient = prompt("É um novo cliente? (Digite 'true' ou 'false'):").toLowerCase() === 'true';

    
    return idade >= 60 && compraMinima >= 100 && !isNewClient;
}


console.log(verificarElegibilidadeDesconto());