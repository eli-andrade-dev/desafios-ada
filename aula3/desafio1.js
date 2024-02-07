// Crie um mapa para representar uma lista de compras
// const listaDeCompras = new Map()
// 1. Adicione itens à lista de compras com a quantidade desejada
// Maçã - 5
// Banana - 3
// Leite - 4
// Pão - 10
// 2. Verifique se um item específico está na lista de compras
// 3. Verifique a quantidade de um item específico da lista
// 4. Modifique a quantidade de um item específico da lista
// 5. Remova um item específico da lista


const listaDeCompras = new Map();

listaDeCompras.set('Maçã', 5);
listaDeCompras.set('Banana', 3);
listaDeCompras.set('Leite', 4);
listaDeCompras.set('Pão', 10);

const itemEspecifico = 'Banana';
console.log(`O item "${itemEspecifico}" está na lista de compras? ${listaDeCompras.has(itemEspecifico) ? 'Sim' : 'Não'}`);

const quantidadeItemEspecifico = 'Leite';
console.log(`A quantidade de "${quantidadeItemEspecifico}" na lista é: ${listaDeCompras.get(quantidadeItemEspecifico)}`);

const novoValorLeite = 6;
listaDeCompras.set('Leite', novoValorLeite);
console.log(`Nova quantidade de "${quantidadeItemEspecifico}": ${listaDeCompras.get(quantidadeItemEspecifico)}`);

const itemRemovido = 'Banana';
listaDeCompras.delete(itemRemovido);
console.log(`Item "${itemRemovido}" removido da lista.`);

console.log('Lista de Compras Atualizada:', [...listaDeCompras.entries()]);
