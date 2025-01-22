// ************************************************************
//  Desafios de Lógica de Programação em JavaScript
// ************************************************************

// Objetivo: Praticar condicionais (if/else), operadores lógicos, 
// template strings e interação com o usuário usando o prompt.

// ************************************************************

function executarDesafios() {

    // 1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", 
    // mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
    let diaDaSemana = prompt('Qual é o dia da semana?');
	diaDaSemana = diaDaSemana.toLowerCase(); // Converte a entrada para minúsculas
    if (diaDaSemana == 'sábado' || diaDaSemana == 'domingo') {
        alert('Bom fim de semana!');
    } else {
        alert('Boa semana!');
    }

    // 2. Verifique se um número digitado pelo usuário é positivo ou negativo. 
    // Mostre um alerta informando.
    let numero = prompt('Digite um número positivo ou negativo');
    if (numero > 0) {
        alert('Número positivo!');
    } else if (numero < 0) {
        alert('Número negativo!');
    } else {
        alert('O número digitado é zero.');
    }

    // 3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, 
    // mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
    let pontuacao = prompt('Digite sua pontuação:');
    if (pontuacao >= 100) {
        alert('Parabéns, você venceu!');
    } else {
        alert('Tente novamente para ganhar.');
    }

    // 4. Crie uma mensagem que informa o usuário sobre o saldo da conta, 
    // usando uma template string para incluir o valor do saldo.
    let saldoConta = 500; // Exemplo de saldo
    alert(`Seu saldo na conta é de R$${saldoConta}.`);

    // 5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, 
    // mostre um alerta de boas-vindas usando esse nome.
    let nome = prompt('Qual o seu nome?');
    alert(`Boas-vindas, ${nome}!`);

}