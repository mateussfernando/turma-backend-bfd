const prompt = require("prompt-sync")();

// Variáveis iniciais
let nomeProdutos = []; // nomes dos Produtos
let totalGasto = 0; // soma dos valores
let lojaAtual = "";
let opcao;

// Início
MenuPrincipal();

// Função do menu principal
function MenuPrincipal() {
  while (opcao !== 0) {
    opcao = Number(
      prompt(
        `\nEscolha uma loja:\n` +
          `1. Loja de Roupas\n` +
          `2. Loja de Perfumes\n` +
          `3. Loja de Joias (Brincos)\n` +
          `0. Sair\n:`
      )
    );

    if (opcao === 1) {
      lojaAtual = "Loja de Roupas";
      fazerPedido();
    } else if (opcao === 2) {
      lojaAtual = "Loja de Perfumes";
      fazerPedido();
    } else if (opcao === 3) {
      lojaAtual = "Loja de Joias";
      fazerPedido();
    } else if (opcao === 0) {
      console.log("\nSaindo do shopping...\n");
      finalizarCompra();
    } else {
      console.log("\nOpção inválida, tente novamente!");
    }
  }
}

// Função para adicionar Produtos
function fazerPedido() {
  let continuar = "sim";

  while (continuar.toLowerCase() === "sim") {
    let nome = prompt(
      `Qual o nome do produto que deseja comprar na ${lojaAtual}? `
    );
    let valor = Number(prompt(`Qual o valor do produto "${nome}"? R$ `));

    nomeProdutos.push(nome); // só o nome
    totalGasto += valor; // só soma o valor

    console.log(`\nProduto "${nome}" adicionado por ${formatarValor(valor)}.`);
    console.log(`Total gasto até agora: ${formatarValor(totalGasto)}.`);

    continuar = prompt(
      "Deseja adicionar mais Produtos nesta loja? (sim/não): "
    );
  }
}

// Função para finalizar compra e mostrar resultado
function finalizarCompra() {
  console.log("\nResumo da compra:");

  for (let i = 0; i < nomeProdutos.length; i++) {
    console.log(`${i + 1}. ${nomeProdutos[i]}`);
  }

  console.log(`\nTotal gasto: ${formatarValor(totalGasto)}\n`);

  if (totalGasto < 850) {
    console.log(
      "Compra aprovada, mas ainda dava pra acrescentar mais um mimo."
    );
  } else if (totalGasto === 850) {
    console.log(
      `O valor gasto foi: ${formatarValor(
        totalGasto
      )}, sua compra foi aprovada!`
    );
  } else if (totalGasto > 850 && totalGasto < 1000) {
    console.log(
      "Compra acima do valor combinado (R$850). Retire alguns itens, ou acrescente até chegar em R$1.000."
    );
  } else if (totalGasto === 1000) {
    let desconto = totalGasto * 0.15;
    let valorFinal = totalGasto - desconto;
    console.log(`Você ganhou 15% de desconto!`);
    console.log(
      `Total com desconto: ${formatarValor(valorFinal)} - Compra aprovada!`
    );
  } else if (totalGasto > 1000 && totalGasto <= 1500) {
    console.log(`Compra reprovada! O limite do cartão foi ultrapassado.`);
  } else if (totalGasto > 1500) {
    console.log(`Compra não permitida, você estourou o limite de R$1.500,00!`);
  } else {
    console.log("Erro ao calcular a compra.");
  }
}

// Função para formatar valores em R$
function formatarValor(valor) {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}
