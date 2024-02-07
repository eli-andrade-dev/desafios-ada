// Crie uma agenda de contatos que armazene vários contatos em um array,
// modelando o "contato" como um objeto: (Nome, telefone, email) (Não utilizar
// Map)

const agendaDeContatos = [];

function adicionarContato(nome, telefone, email) {
    const contato = {
        Nome: nome,
        Telefone: telefone,
        Email: email
    };
    agendaDeContatos.push(contato);
}

function exibirAgenda() {
    console.log("Agenda de Contatos:");
    agendaDeContatos.forEach(contato => {
        console.log(`Nome: ${contato.Nome}, Telefone: ${contato.Telefone}, Email: ${contato.Email}`);
    });
}

adicionarContato("João", "123456789", "joao@email.com");
adicionarContato("Maria", "987654321", "maria@email.com");
adicionarContato("Carlos", "555555555", "carlos@email.com");

exibirAgenda();
