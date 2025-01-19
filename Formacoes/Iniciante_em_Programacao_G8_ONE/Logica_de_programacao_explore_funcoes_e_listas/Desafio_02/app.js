// ************************************************************
//  Desafios de Lógica de Programação em JavaScript
// ************************************************************

// Objetivo: Praticar funções com JavaScript.
// ************************************************************

// 1. Criar uma função que exibe "Olá, mundo!" no console.
function exibirOlaMundo() {
    console.log("Olá, mundo!");
}

// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirOlaNome(nome) {
    console.log(`Olá, ${nome}!`);
}

// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calcularDobro(numero) {
    return numero * 2;
}

// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles (arredondada para duas casas decimais).
function calcularMedia(a, b, c) {
    return ((a + b + c) / 3).toFixed(2);
}

// 5. Criar uma função que recebe quatro números como parâmetros e retorna o maior deles.
function encontrarMaior(a, b, c, d) {
    return Math.max(a, b, c, d);
}

// 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
function calcularQuadrado(numero) {
    return numero * numero;
}

// Exemplo de chamadas (para testes):
function executarDesafios() {
    console.log("Executando: exibirOlaMundo");
    exibirOlaMundo();

    console.log("Executando: exibirOlaNome");
    exibirOlaNome("Letícia");

    console.log("Executando: calcularDobro(256)");
    console.log(calcularDobro(256));

    console.log("Executando: calcularMedia(6, 8, 9)");
    console.log(calcularMedia(6, 8, 9));

    console.log("Executando: encontrarMaior(-1, -3, -2, -20)");
    console.log(encontrarMaior(-1, -3, -2, -20));

    console.log("Executando: calcularQuadrado(5)");
    console.log(calcularQuadrado(5));
}