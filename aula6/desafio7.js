// Ache a lógica: 1 1 2 3 5 8 13
// Agora, sua tarefa é criar um programa que recebe um número inteiro N
// como entrada e retorna os primeiros N termos da sequência.
// Exemplo:
// Entrada: 6 Saída: [1 , 1, 2, 3, 5, 8]
// Entrada: 14 Saída: [1, 1, 2, 3, 5, 8, 13, …, 377]


function fibonacci(N) {
   let sequencia = [1, 1]; 

   
   for (let i = 2; i < N; i++) {
       let proximoTermo = sequencia[i - 1] + sequencia[i - 2];
       sequencia.push(proximoTermo);
   }

   return sequencia.slice(0, N); 
}

console.log(fibonacci(6)); 
console.log(fibonacci(14));