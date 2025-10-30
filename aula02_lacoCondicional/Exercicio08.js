const leia = require("readline-sync");

let codigo, valor;
let saldo = 1000;

console.log("------ Conta Bancaria ------");
console.log("Codigo     |  Operacao ");
console.log("   1       | Saldo");
console.log("   2       | Saque");
console.log("   3       | Deposito");
console.log("----------------------------");

codigo = leia.questionInt("Operacao: ");

switch (codigo) {
  case 1:
    console.log(`Operacao: Saldo`);
    console.log(`Saldo: R$ ${saldo.toFixed(2)}`);
    break;
  case 2:
    console.log(`Operacao: Saque`);
    valor = leia.questionFloat(`Valor: R$`);
    if (valor <= saldo) {
      saldo -= valor;
      console.log(`Novo saldo: R$ ${saldo.toFixed(2)}`);
    } else {
      console.log(`Saldo insuficiente!`);
    }
    break;
  case 3:
    console.log(`Operacao: Deposito`);
    valor = leia.questionFloat(`Valor: R$ `);
    saldo += valor;
    console.log(`Novo saldo: R$ ${saldo.toFixed(2)}`);
    break;
  default:
    console.log("Operacao invalida!");
    break;
}
