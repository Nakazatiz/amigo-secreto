//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//1-Crie um array para armazenar os nomes
let amigos = []

//2-Implementa uma função para agregar amigos
//Capturar o valor do campo de entrada: Utilize document.getElementById
//  ou document.querySelector para obter o texto inserido pelo usuário.
function adicionarAmigo() {
    let nome = document.getElementById('amigo');
    let nomeAmigo = nome.value;
//Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
    if (nomeAmigo.trim() != '') {
//Atualizar o array de amigos: Se o valor for válido,adicione-o ao array que armazena
//  os nomes dos amigos usando o método .push().        
        amigos.push(nomeAmigo.trim());
//Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto
//  para uma string vazia.
        exibirNomes();

        nome.value = '';
        nome.focus();
//Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."
    } else {
        alert('Por favor, insira um nome.');
        nome.focus;
    }
}
//3-Implementa uma função para atualizar a lista de amigos
function exibirNomes() {
    let lista = document.getElementById('listaAmigos');
    let listaInformada = '';

    for (let nome of amigos) {
        listaInformada += `<li>${nome}</li>`;
    }
    lista.innerHTML = listaInformada;
}
//4-Implementa uma função para sortear os amigos
function sortearAmigo() {
    if (amigos.length <= 1) {
        alert('Insira mais de um nome para realizar o sorteio.');
        return;
    } else {
        let totalAmigos = amigos.length;
        let numeroSorteado = Math.floor(Math.random() * totalAmigos);

        // console.log(numeroSorteado);

        let amigoSorteado = amigos[numeroSorteado];

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = 'O amigo sorteado é: ' + amigoSorteado;
    }
}