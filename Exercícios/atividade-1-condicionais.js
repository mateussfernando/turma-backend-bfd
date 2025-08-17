const prompt = require("prompt-sync")();

// Exercicio 1 - Carteira de habilitação
let idade = Number(prompt('Qual a sua idade?'));

if(idade >= 18){
     carteiraHabilitação = prompt(
       "Possui carteira de habilitação? (Sim ou Não)"
     );
}

if (idade >= 18 && carteiraHabilitação == 'Sim') {
     console.log('Você Tem permissão para dirigir.');
} else {
     console.log('Você não tem permissão para dirigir.');
}

// Exercício 2 - Aprovação em disciplina
let mediaFinal = Number(prompt('Qual foi sua média final?'));
let frequencia = Number(prompt('Qual foi sua a frequência?'));

if (mediaFinal >= 7 && frequencia >= 75) {
     console.log('Você foi aprovado');
} else {
     console.log("Você foi reprovado");
}

// Exercício 3 - Dia da semana
let diaSemana = prompt("Qual o dia da semana?");
diaSemana = diaSemana.toLowerCase();

if (diaSemana === "segunda") {
  console.log("Hoje é segunda-feira!");
} else if (diaSemana === "terça" || diaSemana === "terca") {
  console.log("Hoje é terça-feira!");
} else if (diaSemana === "quarta") {
  console.log("Hoje é quarta-feira!");
} else if (diaSemana === "quinta") {
  console.log("Hoje é quinta-feira!");
} else if (diaSemana === "sexta") {
  console.log("Hoje é sexta-feira!");
} else if (
  diaSemana === "sábado" ||
  diaSemana === "sabado" ||
  diaSemana === "domingo"
) {
  console.log("Hoje é fim de Semana!");
} else {
  console.log("Dia inválido.");
}

//Exercício 4 - Calculadora
let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));
let operacao = prompt("Digite a operação (+, -, *, /):");

if (operacao === "+") {
  console.log("Resultado: " + (numero1 + numero2));
} else if (operacao === "-") {
  console.log("Resultado: " + (numero1 - numero2));
} else if (operacao === "*") {
  console.log("Resultado: " + numero1 * numero2);
} else if (operacao === "/") {
  if (numero2 === 0) {
    console.log("Não pode ser divido por zero.");
  } else {
    console.log("Resultado: " + numero1 / numero2);
  }
} else {
  console.log("Houve algum erro nas entradas.");
}

//Exercicio 5 - Verificador de faixa etária
let idade5 = Number(prompt("Digite sua idade:"));

if (idade5 < 12) {
     console.log("Você é uma criança.");
} else if (idade5 >= 12 && idade5 <= 17) {
     console.log("Você é um adolescente.");
} else if (idade5 >= 18 && idade5 <= 59) {
     console.log("Você é um adulto.");
} else if (idade5 >= 60) {
     console.log("Você é um idoso.");
} else {
     console.log("Idade inválida. Tente novamente.");
}

//Exercicio 6 - Calculadora de desconto
let valor = parseFloat(prompt("Digite o valor total da compra: R$ "));
let valorFinal;

if (valor > 0) {
  if (valor < 100) {
    console.log("Sem desconto.");
    valorFinal = valor;
  } else if (valor <= 199) {
    console.log("Desconto aplicado: 10%");
    valorFinal = valor * 0.9;
  } else if (valor <= 499) {
    console.log("Desconto aplicado: 20%");
    valorFinal = valor * 0.8;
  } else {
    console.log("Desconto aplicado: 30%");
    valorFinal = valor * 0.7;
  }
  console.log("Valor final com desconto: R$ " + valorFinal.toFixed(2));
} else {
  console.log("Valor inválido. Digite um número positivo.");
}

// Exercicio 7 - Verificação de número par ou ímpar
let numero6 = Number(prompt("Digite um número inteiro:"));

 if (numero6 % 2 === 0) {
     console.log("O número é par.");
} else if  (numero6 % 2 != 0) {
     console.log("O número é ímpar.");
} else {
     console.log("Número inválido.");
}

// Exercício 8 - Controle de Acesso
let idade8 = Number(prompt("Qual a sua idade? "));
let permissaoPais = ""; 

if (idade8 < 18) {
  permissaoPais = prompt(
    "Você tem permissão dos pais? (Sim ou Não) "
  ).toLowerCase();
}

if (idade8 >= 18 || (idade8 < 18 && permissaoPais === "sim")) {
  console.log("Acesso permitido.");
} else {
  console.log("Acesso negado.");
}





