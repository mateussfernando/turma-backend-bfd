const prompt = require("prompt-sync")();

//1.Crie um rograma que guarde os nomes de 5 frutas em um array e depois exiba todas elas no console, uma por linha.

const frutas = ["Banana", "Manga", "Pera", "Uva", "Melancia"];
for (i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

//2.Faça um programa que armazene as notas de 4 alunos em um arra e calcule a média das notas.
const notas1 = [5, 8, 3, 7];
let mediaFinal1 = 0;
for (i = 0; i < notas.length; i++) {
     mediaFinal1 = mediaFinal1 + notas1[i];

}
console.log(`A média das notas é: ${mediaFinal / notas.length}`);

//ou com entrada
const notas = [];
for (i = 1; i < 5; i++) {
  let entrada = Number(prompt(`Digite a nota ${i}:`));
  notas.push(entrada);
}
let mediaFinal = 0;
for (i = 0; i < notas.length; i++) {
  mediaFinal = mediaFinal + notas[i];
}
console.log(`A média das notas é: ${mediaFinal / notas.length}`);

//3.Monte um programa que guarde uma lista de números inteiros e mostre apenas os que são pares.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = [];
for (i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 == 0) {
    pares.push(numeros[i]);
  }
}
console.log(pares);
