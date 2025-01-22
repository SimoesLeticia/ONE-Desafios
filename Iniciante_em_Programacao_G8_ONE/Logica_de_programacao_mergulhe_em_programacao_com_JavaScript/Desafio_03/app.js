// ************************************************************
//  Desafios de Lógica de Programação em JavaScript
// ************************************************************

// Objetivo: Desenvolver exercícios práticos para aprimorar lógica de programação.

// ************************************************************

function executarDesafios() {
    // 1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
    console.log('Boas-vindas!');

    // 2. Crie uma variável chamada "nome" e atribua a ela o seu primeiro nome. 
    // Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!".
    let nome = 'Letícia';
    console.log(`Olá, ${nome}!`);

    // 3. Crie uma variável chamada "nomeCompleto" e atribua a ela o seu nome completo.
    // Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!".
    let nomeCompleto = 'Letícia Simões';
    alert(`Olá, ${nomeCompleto}!`);

    // 4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?
    // Em seguida, armazene a resposta em uma variável e mostre no console.
    let linguagemPreferida = prompt('Qual a linguagem de programação que você mais gosta?');
    console.log(`Você gosta de: ${linguagemPreferida}`);

    // 5. Crie duas variáveis numéricas, some os valores e exiba o resultado.
    let valor1 = 448;
    let valor2 = 52;
    let resultado = valor1 + valor2;
    console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

    // 6. Atribua novos valores às variáveis numéricas, realize uma subtração e exiba o resultado.
    valor1 = 144;
    valor2 = 72;
    resultado = valor1 - valor2;
    console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

    // 7. Peça ao usuário que infome sua idade. Verifique se o usuário é maior ou menor de idade.
    // Em seguida, exiba a mensagem correspondente no console.
    let idade = parseInt(prompt('Digite a sua idade:'));
    if (idade >= 18) {
        console.log('Você é maior de idade.');
    } else {
        console.log('Você é menor de idade.');
    }

    // 8. Peça um número ao usuário, verifique se é positivo, negativo ou zero, e exiba a mensagem correspondente no console.    
    let numero = parseInt(prompt("Digite um número:"));
    let mensagem = numero > 0 ? "O número é positivo." : numero < 0 ? "O número é negativo." : "O número é zero.";
    console.log(mensagem);

    // 9. Use um loop while para imprimir os números de 1 a 10 no console.
    let contador = 1;
    while (contador <= 10) {
        console.log(contador);
        contador++;
    }

    // 10. Verifique se uma nota é maior ou igual a 7. Exiba "Aprovado" ou "Reprovado".
    let nota = 9;
    if (nota >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }

    // 11. Gere um número aleatório e exiba-o no console.
    let numeroAleatorio = Math.random();
    console.log(`Número aleatório: ${numeroAleatorio}`);

    // 12. Gere um número inteiro entre 1 e 10 e exiba-o no console.
    numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    console.log(`Número inteiro entre 1 e 10: ${numeroAleatorio}`);

    // 13. Gere um número inteiro entre 1 e 1000 e exiba-o no console.
    numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
    console.log(`Número inteiro entre 1 e 1000: ${numeroAleatorio}`);
}