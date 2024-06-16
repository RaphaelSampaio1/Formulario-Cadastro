function atualizarLista() {
    var tabela = document.getElementById('tabela-cadastrados').getElementsByTagName('tbody')[0];
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var idade = document.getElementById('idade').value;
    var cpf = document.getElementById('cpf').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    
    var linha = tabela.insertRow();
    linha.insertCell(0).innerHTML = nome;
    linha.insertCell(1).innerHTML = sobrenome;
    linha.insertCell(2).innerHTML = idade;
    linha.insertCell(3).innerHTML = cpf;
    linha.insertCell(4).innerHTML = telefone;
    linha.insertCell(5).innerHTML = email;
}
