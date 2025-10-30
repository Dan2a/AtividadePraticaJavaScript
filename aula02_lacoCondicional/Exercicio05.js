const leia = require("readline-sync");

let codigo, quantidade, valorTotal;

console.log("----- Tabela de produtos -----");
console.log("1 - Cachorro Quente - R$ 10,00");
console.log("2 - X-Salada - R$ 15,00");
console.log("3 - X-Bacon - R$ 18,00");
console.log("4 - Bauru - R$ 12,00");
console.log("5 - Refrigerante - R$ 8,00");
console.log("6 - Suco de laranja - R$ 13,00");
console.log("------------------------------");

codigo = leia.questionInt("Digite o codigo do produto desejado: ");

switch (codigo) {
  case 1:
    quantidade = leia.questionInt("Digite a quantidade desejada: ");
    valorTotal = quantidade * 10.0;
    console.log("Produto: Cachorro Quente");
    console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
    break;
  case 2:
    quantidade = leia.questionInt("Digite a quantidade desejada: ");
    valorTotal = quantidade * 15.0;
    console.log("Produto: X-Salada");
    console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
    break;
  case 3:
    quantidade = leia.questionInt("Digite a quantidade desejada: ");
    valorTotal = quantidade * 18.0;
    console.log("Produto: X-Bacon");
    console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
    break;
  case 4:
    quantidade = leia.questionInt("Digite a quantidade desejada: ");
    valorTotal = quantidade * 12.0;
    console.log("Produto: Bauru");
    console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
    break;
  case 5:
    quantidade = leia.questionInt("Digite a quantidade desejada: ");
    valorTotal = quantidade * 8.0;
    console.log("Produto: Refrigerante");
    console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
    break;
  case 6:
    quantidade = leia.questionInt("Digite a quantidade desejada: ");
    valorTotal = quantidade * 13.0;
    console.log("Produto: Suco de laranja");
    console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
    break;
  default:
    console.log("Código inválido!");
    quantidade = 0;
    break;
}
