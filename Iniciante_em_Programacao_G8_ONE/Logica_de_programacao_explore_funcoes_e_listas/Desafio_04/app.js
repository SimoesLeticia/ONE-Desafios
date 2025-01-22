// ************************************************************
//  Desafios de Lógica de Programação em JavaScript
// ************************************************************

// Objetivo: Trabalhar com listas e manipulação de arrays.
// ************************************************************

function executarDesafios() {
    // 1. Crie uma lista vazia chamada listaGenerica e exiba essa lista no console.
    let listaGenerica = [];
    console.log("Lista genérica:", listaGenerica);

    // 2. Crie uma lista chamada linguagensDeProgramacao com 3 linguagens de programação que você conhece.
    // Exiba essa lista no console.
    let linguagensDeProgramacao = ["JavaScript", "Delphi", "Python"];
    console.log("Linguagens de programação:", linguagensDeProgramacao);

    // 3. Adicione à lista linguagensDeProgramacao os elementos: Java, Ruby e GoLang.
    // Exiba a lista atualizada no console.
    linguagensDeProgramacao.push("Java", "Ruby", "GoLang");
    console.log("Linguagens de programação após adições:", linguagensDeProgramacao);

    // 4. Crie uma lista chamada nomes com 3 nomes próprios.
    // Exiba no console apenas o primeiro elemento da lista.
    let nomes = ["Enzo", "Gael", "Valentina"];
    console.log("Primeiro nome na lista:", nomes[0]);

    // 5. Crie uma lista chamada paises com 3 nomes de países.
    // Exiba no console apenas o segundo elemento da lista.
    let paises = ["Brasil", "Argentina", "Chile"];
    console.log("Segundo país na lista:", paises[1]);

    // 6. Crie uma lista chamada frutas com 3 nomes de frutas.
    // Exiba no console apenas o último elemento da lista, sem usar um índice fixo.
    let frutas = ["Banana", "Maçã", "Morango"];
    console.log("Última fruta na lista:", frutas[frutas.length - 1]);
}