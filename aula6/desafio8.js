// Crie um programa que pede ao usuário para inserir uma palavra e
// conta quantas vogais (a, e, i, o, u) ela contém. Utilize um loop for
// e estruturas condicionais if para realizar a contagem.
// (Não precisa considerar acentos. Ex.: aviao)


function contarVogais(palavra) {

   palavra = palavra.toLowerCase();
   

   let contadorA = 0;
   let contadorE = 0;
   let contadorI = 0;
   let contadorO = 0;
   let contadorU = 0;

    for (let i = 0; i < palavra.length; i++) {
             if (palavra[i] === 'a') {
           contadorA++;
       } else if (palavra[i] === 'e') {
           contadorE++;
       } else if (palavra[i] === 'i') {
           contadorI++;
       } else if (palavra[i] === 'o') {
           contadorO++;
       } else if (palavra[i] === 'u') {
           contadorU++;
       }
   }

    return {
       'a': contadorA,
       'e': contadorE,
       'i': contadorI,
       'o': contadorO,
       'u': contadorU
   };
}

let palavra = prompt("Digite uma palavra:");

let contagemVogais = contarVogais(palavra);

console.log("Número de vogais na palavra '" + palavra + "':");
console.log("A: " + contagemVogais['a']);
console.log("E: " + contagemVogais['e']);
console.log("I: " + contagemVogais['i']);
console.log("O: " + contagemVogais['o']);
console.log("U: " + contagemVogais['u']);
