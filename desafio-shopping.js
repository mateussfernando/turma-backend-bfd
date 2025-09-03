const prompt = require("prompt-sync")();
limite = 1500;

criarMenuPrincipal();

loja(lojas);

function criarMenuPrincipal() {
  let lojas = Number(
    prompt(
      `Escolha 1,2 ou 3 para escolher a loja. \n 1.Loja de Roupas \n 2.Loja de Perfumes \n 3.Loja de Calçados \n 0.Sair`
    )
  );

  if (lojas === 1) {
    console.log("Você escolheu a loja de Roupas! \n");
    nomeProdutoRoupas = prompt("Qual o nome do produto que você deseja?");
  } else if (lojas === 2) {
    console.log("Você escolheu a loja de Perfumes! \n");
  } else if (lojas === 3) {
    console.log("Você escolheu a loja de Calçados! \n");
  } else if (lojas === 0) {
    console.log("Você escolheu sair! \n");
  } else {
    console.log("Digitou um valor inválido, tente novamente.");
  }
}

function finalizacaoDaCompra(total) {
  if (total < 850) {
    console.log("Compra aprovada, mas ainda dava pra acrescentar mais um mimo");
  } else if (total > 850 && total < 1000) {
    console.log(
      "Compra acima do valor combinado (R$850). Retire alguns itens, ou acrescente até chegar em 1.000"
    );
  } else if (total === 850) {
    console.log(`O valor total gasto foi: ${total}, sua compra foi aprovada!`);
  }
}
