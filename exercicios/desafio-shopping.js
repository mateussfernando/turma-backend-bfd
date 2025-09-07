const prompt = require("prompt-sync")();

let nomeProdutos = [];
let valorProdutos;
let lojaAtual;
MenuPrincipal();

function fazerPedido() {
  if (lojaAtual == "Loja de Roupas") {
    for (let i = 0; i < 2; i++) {
      nomeProdutos.push = prompt(`Qual o nome do produto que você quer?`);
      valorProdutos = +Number(prompt(`Qual o valor do produto?`));
      AdicionarMaisProdutos();
    }
  }
}

function AdicionarMaisProdutos() {
  let repetir = prompt(
    `O valor gasto até agora foi de ${FormatarValor()} na ${lojaAtual}. Deseja adicionar mais produtos?`
  );
  repetir.toLocaleLowerCase;
  if (repetir == "sim" && lojaAtual == "Loja de Roupas") {
    fazerPedido();
  } else {
    MenuPrincipal();
  }
}

if (valorProdutos < 850) {
  console.log("Compra aprovada, mas ainda dava pra acrescentar mais um mimo");
} else if (valorProdutos > 850 && valorProdutos < 1000) {
  console.log(
    "Compra acima do valor combinado (R$850). Retire alguns itens, ou acrescente até chegar em 1.000"
  );
} else if (valorProdutos === 850) {
  console.log(`O valor valorProdutos gasto foi: ${valorProdutos}, sua compra foi aprovada!`);
}

function MenuPrincipal() {
  let lojas = Number(
    prompt(
      `Escolha 1,2 ou 3 para escolher a loja. \n 1.Loja de Roupas \n 2.Loja de Perfumes \n 3.Loja de Calçados \n 0.Sair \n:`
    )
  );

  if (lojas === 1) {
    console.log("Você escolheu a loja de Roupas! \n");
     lojaAtual = `Loja de Roupas`;
    fazerPedido();
  } else if (lojas === 2) {
    console.log("Você escolheu a loja de Perfumes! \n");
     lojaAtual = `Loja de Perfumes`;
  } else if (lojas === 3) {
    console.log("Você escolheu a loja de Calçados! \n");
     lojaAtual = `Loja de Calçados`;
  } else if (lojas === 0) {
    console.log("Você escolheu sair! \n");
  } else {
    console.log("Digitou um valor inválido, tente novamente.");
  }
}

function FormatarValor() {
  return `R$ ${valorProdutos.toFixed(2).replace(".", ",")}`;
}
