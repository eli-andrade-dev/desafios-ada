// Crie um mapa chamado frutas onde as chaves são nomes de frutas e os valores
// são seus preços.
// Verifique se a maçã é mais cara que a banana
// Verifique se a pêra não custa o mesmo que a uva.


const frutas = new Map([
    ['maçã', 7.50],
    ['banana', 3.80],
    ['pêra', 4.00],
    ['uva', 8.00]
]);

const macaMaisCaraQueBanana = frutas.get('maçã') > frutas.get('banana');

const peraNaoCustaIgualAUva = frutas.get('pêra') !== frutas.get('uva');

console.log("A maçã é mais cara que a banana?", macaMaisCaraQueBanana);
console.log("A pêra não custa o mesmo que a uva?", peraNaoCustaIgualAUva);

// Esse "não" é proposital?
