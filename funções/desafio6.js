// Verificação de Idade que é permitido dirigir (If e Ternário)
// ● Crie um programa que verifica a idade de uma pessoa e determina
// se ela pode dirigir ou não. Se a pessoa tiver 18 anos ou mais,
// ela pode dirigir; caso contrário, não pode.


function verificarPermissaoParaDirigir(idade) {
    const podeDirigir = idade >= 18 ? "Pode dirigir" : "Não pode dirigir";
    console.log(podeDirigir);
}

verificarPermissaoParaDirigir(20); 
verificarPermissaoParaDirigir(16); 
