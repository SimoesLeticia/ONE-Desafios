// ************************************************************
//  Desafios de Lógica de Programação em JavaScript
// ************************************************************

// Objetivo: Resolver desafios básicos de lógica em JavaScript.
// ************************************************************

// 1. Calcular o índice de massa corporal (IMC)
// Fórmula: IMC = peso / (altura x altura)
function calcularIMC(altura, peso) {
    if (altura <= 0 || peso <= 0) {
        console.error("Altura e peso devem ser maiores que zero.");
        return;
    }
    let imc = peso / (altura * altura);
    return imc.toFixed(2);
}

// 2. Calcular o fatorial de um número
// O fatorial de um número é dado pelo produto de todos os números inteiros de 1 até N.
function calcularFatorial(numero) {
    if (numero < 0) {
        console.error("Não é possível calcular o fatorial de números negativos.");
        return;
    }
    if (numero === 0 || numero === 1) {
        return 1;
    }
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

// 3. Converter valor em dólar para reais
// Fórmula: valor em reais = valor em dólar × cotação do dólar.
// Considere a cotação do dólar igual 6.08
function converterDolarParaReal(valorEmDolar) {
    const cotacaoDolar = 6.08;
    if (valorEmDolar < 0) {
        console.error("O valor em dólar deve ser maior ou igual a zero.");
        return;
    }
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
}

// 4. Calcular a área e o perímetro de um retângulo
// Fórmulas:
// Área = altura × largura
// Perímetro = 2 × (altura + largura)
function calcularAreaPerimetroRetangulo(altura, largura) {
    if (altura <= 0 || largura <= 0) {
        console.error("Altura e largura devem ser maiores que zero.");
        return;
    }
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log(`Área do retângulo: ${area} metros quadrados`);
    console.log(`Perímetro do retângulo: ${perimetro} metros`);
}

// 5. Calcular a área e o perímetro de um círculo
// Fórmulas:
// Área = π × raio²
// Perímetro = 2 × π × raio
function calcularAreaPerimetroCirculo(raio) {
    if (raio <= 0) {
        console.error("O raio deve ser maior que zero.");
        return;
    }
    let area = Math.PI * Math.pow(raio, 2);
    let perimetro = 2 * Math.PI * raio;

    console.log(`Área do círculo: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro do círculo: ${perimetro.toFixed(2)} metros`);
}

// 6. Mostrar a tabuada de um número
// A função deve exibir a tabuada de 1 a 10 para o número fornecido.
function mostrarTabuada(numero) {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

function executarDesafios() {
    console.log('Executando: calcularIMC(1.7, 65)');
    console.log("IMC de 1.70m e 65kg:", calcularIMC(1.7, 65));

    console.log('Executando: calcularFatorial(5)');
    console.log("Fatorial de 5:", calcularFatorial(5));

    console.log('Executando: converterDolarParaReal(10)');
    console.log("US$10 em reais:", converterDolarParaReal(10));

    console.log('Executando: calcularAreaPerimetroRetangulo(5, 10)');
    calcularAreaPerimetroRetangulo(5, 10);

    console.log('Executando: calcularAreaPerimetroCirculo(3)');
    calcularAreaPerimetroCirculo(3);

    console.log('Executando: mostrarTabuada(7)');
    mostrarTabuada(7);
}