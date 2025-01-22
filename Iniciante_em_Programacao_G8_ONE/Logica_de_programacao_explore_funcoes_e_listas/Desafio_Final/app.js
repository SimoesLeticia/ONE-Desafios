"use strict";

// ************************************************************
//  Desafios Final de Lógica de Programação em JavaScript
// ************************************************************

// Objetivo: Desenvolver o jogo do número secreto.
// Regras do Jogo:
// - O programa gera um número aleatório entre 1 e N. Sendo o valor de N determinado por você.
// - O jogador deve tentar adivinhar qual é esse número.
// - O jogo continua até que o jogador acerte o número.
// - O programa informa quantas tentativas o jogador usou para acertar o número, incluindo a primeira tentativa.
// - A cada palpite:
//   - Se o palpite for menor que o número secreto, o programa informa que o número secreto é maior.
//   - Se o palpite for maior que o número secreto, o programa informa que o número secreto é menor.

// ************************************************************

// Inicialização de variáveis
const N = 100;
let listaNumerosSorteados = [];
let tentativas = 1;
let numeroSecreto = sortearNumeroSecreto();

// Exibe a mensagem inicial no jogo 
exibirMensagemInicial()

// Determina o limite que pode ser digitado no campo
document.getElementById("userInput").setAttribute("max", N);

// Exibe texto em um elemento HTML com o id fornecido
function exibirTexto(idElemento, texto) {
    let campo = document.getElementById(idElemento);
    campo.textContent = texto;
}

// Exibe a mensagem inicial no jogo
function exibirMensagemInicial() {
    exibirTexto("instructionChooseNumber", `Escolha um número de 1 a ${N}`);
    exibirTexto("gameTitle", "Jogo do Número Secreto");
}

// Atualiza o estado de um botão (habilitado ou desabilitado)
function atualizarEstadoBotao(idElemento, estado) {
    document.getElementById(idElemento).disabled = estado;
}

// Verifica se o número sorteado já foi adicionado à lista ou se a lista está cheia
function verificarNumeroNaLista(numerosorteado) {
    console.log(`Lista de números sorteados: ${listaNumerosSorteados}`);
    if (listaNumerosSorteados.length >= N) {
        listaNumerosSorteados = []; // Limpa a lista quando ela estiver cheia
    }
    return listaNumerosSorteados.includes(numerosorteado);
}

// Sorteia um número secreto entre 1 e N, garantindo que o número não tenha sido sorteado antes
function sortearNumeroSecreto() {
    let numeroSorteado = Math.floor(Math.random() * N) + 1; // Sorteia o número aleatório    
    if (verificarNumeroNaLista(numeroSorteado)) {
        return sortearNumeroSecreto();
    } else {
        console.log(`O número secreto sorteado é ${numeroSorteado}`);
        listaNumerosSorteados.push(numeroSorteado); // Adiciona o número à lista
        return numeroSorteado;
    }
}

// Limpa o campo de entrada de dados
function limparCampo(idElemento) {
    let campo = document.getElementById(idElemento);
    campo.value = "";
}

// Inicia o jogo, sorteando o número secreto e exibindo as mensagens iniciais
function iniciarJogo() {
    tentativas = 1; // Reseta o número de tentativas
    numeroSecreto = sortearNumeroSecreto();

    limparCampo("userInput");
    exibirMensagemInicial();
    atualizarEstadoBotao("newGameButton", true);
    atualizarEstadoBotao("guessButton", false);
}

// Valida o palpite do usuário
function validarPalpite() {
    let palpite = document.getElementById("userInput").value;
    console.log(`Palpite do usuário: ${palpite}`);

    // Verifica se o palpite é um número válido
    if (isNaN(palpite) || palpite < 1 || palpite > N) {
        alert(`Número inválido. Digite um número entre 1 e ${N}.`);
        limparCampo("userInput");
        return;
    }

    // Verifica se o palpite é correto
    if (palpite == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"; // Determina a forma plural ou singular para "tentativa"
        exibirTexto("gameTitle", "PARABÉNS! VOCÊ ACERTOU.");
        exibirTexto("instructionChooseNumber", `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`);
        atualizarEstadoBotao("newGameButton", false); // Habilita o botão "Novo Jogo"        
        atualizarEstadoBotao("guessButton", true); // Desabilita o botão "Adivinhar"        
    } else {
        if (palpite > numeroSecreto) {
            exibirTexto("instructionChooseNumber", `O número secreto é menor que ${palpite}.`);
        } else {
            exibirTexto("instructionChooseNumber", `O número secreto é maior que ${palpite}.`);
        }
        tentativas++; // Incrementa as tentativas
        limparCampo("userInput");
    }
}