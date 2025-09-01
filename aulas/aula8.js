const prompt = require("prompt-sync")();

//função com parâmetro e com retorno
function multiplicar(a, b) {
  return a * b;
}

let resultado = multiplicar(5, 2);
console.log(resultado);

//função com valores padrão
function saudar(nome = "Visitante") {
  console.log(`Olá, ${nome}! Seja bem-vindo(a)!`);
}

saudar("Maria");

//função com múltiplos parâmetros
function saudar(nome, idade, cidade) {
  console.log(
    `Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`
  );
}
saudar();
saudar("Mateus", 23, "Recife");

//hoisted

//
function formatarValor(valor) {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}
console.log(formatarValor(12.0));

function pedirValorAoUsuario() {
  let valorDigitado = parseFloat(prompt("Digite o valor da compra: "));

  if (isNaN(valorDigitado)) {
    console.log("valor inválido");
    return null;
  }

  let valorFormatado = formatarValor(valorDigitado)
  return valorFormatado;
  
}

//pedirValorAoUsuario("");
// ou
let final = pedirValorAoUsuario();
console.log(`O valor formatado é: ${final}`);