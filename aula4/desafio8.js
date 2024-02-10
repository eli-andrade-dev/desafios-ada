// Conversão de Notas em Conceitos
// ● Faça um programa que peça ao usuário para digitar uma letra e
// verifique se é uma vogal ou uma consoante utilizando o comando
// switch case. Se o usuário digitar uma vogal (a, e, i, o, u), o
// programa deve exibir a mensagem "É uma vogal". Se o usuário
// digitar uma consoante, o programa deve exibir a mensagem "É uma
// consoante".

function VogalOuConsoante(letra) {
    switch (letra.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log("É uma vogal");
            break;
        default:
            console.log("É uma consoante");
    }
}

let letra = prompt("Digite uma letra: ");

VogalOuConsoante(letra);
