const prompt = require("prompt-sync")();
let numero = Number(prompt("Escolha um número de 1 a 4"));

switch (numero) {
  case 1:
    console.log("Você escolheu a Primavera!");
    break;
  case 2:
    console.log("Você escolheu o Verão!");
    break;
  case 3:
    console.log("Você escolheu o Outono!");
    break;
  case 4:
    console.log("Você escolheu o Inverno!");
    break;
  default:
    console.log('Valor inválido.')
}




