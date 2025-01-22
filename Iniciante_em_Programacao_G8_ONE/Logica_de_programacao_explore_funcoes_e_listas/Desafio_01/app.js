// ************************************************************
//  Desafios de Lógica de Programação em JavaScript
// ************************************************************

// Objetivo: Praticar manipulação do DOM e eventos com JavaScript.
// ************************************************************

// 1. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Desafios JS.
let titulo = document.querySelector('h1');
titulo.textContent = 'Desafios JS';

// 2. Crie uma função que exiba no console a mensagem "O botão foi clicado!" sempre que o botão Console for pressionado.
function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!');
}

// 3. Crie uma função que exiba um alerta com a mensagem "Eu amo JS!" sempre que o botão Alerta for pressionado.
function exibirAlerta() {
    alert('Eu amo JS!');
}

// 4. Crie uma função que é executada quando o botão Prompt é clicado, perguntando qual o nome da cidade onde o usuário nasceu.
// Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: "Estive em {cidade} e lembrei de você".
function exibirPrompt() {
    let cidade = prompt('Digite o nome da cidade onde você nasceu');
    if (cidade) {
        alert(`Estive em ${cidade} e lembrei de você.`);
    } else {
        alert('Você não digitou nenhuma cidade.');
    }
}

// 5. Ao clicar no botão Soma, peça dois números inteiros e exiba o resultado da soma em um alerta.
function somarDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número inteiro'));
    let segundoNumero = parseInt(prompt('Digite o segundo número inteiro'));

    if (!isNaN(primeiroNumero) && !isNaN(segundoNumero)) {
        let resultado = primeiroNumero + segundoNumero;
        alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`);
    } else {
        alert('Por favor, insira apenas números inteiros.');
    }
}