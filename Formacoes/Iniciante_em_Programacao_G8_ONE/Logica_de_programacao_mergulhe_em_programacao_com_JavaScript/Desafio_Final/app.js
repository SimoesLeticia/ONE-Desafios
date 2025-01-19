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

function executarDesafios() {
    alert('Boas-vindas ao jogo do número secreto!');

    // Gera um número secreto entre 1 e N
    let N = 100
    let numeroSecreto = Math.floor(Math.random() * N) + 1;
    console.log(`O número secreto sorteado é ${numeroSecreto}`);

    let palpite; // Variável para armazenar o palpite do usuário
    let tentativas = 0; // Contador de tentativas

    // Loop até o usuário acertar o número secreto
    while (palpite != numeroSecreto) {
        // Solicita um número entre 1 e N ao usuário
        palpite = parseInt(prompt(`Escolha um número entre 1 e ${N}`));

        // Verifica se o palpite é maior ou menor que o número secreto
        if (palpite > numeroSecreto) {
            alert(`O número secreto é menor que ${palpite}`);
        } else if (palpite < numeroSecreto) {
            alert(`O número secreto é maior que ${palpite}`);
        }

        // Incrementa o número de tentativas após cada palpite
        tentativas++;
    }

    // Determina a forma plural ou singular para "tentativa"
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

    // Exibe a mensagem final com o número de tentativas
    alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
}
