const leia = require("readline-sync");

let n1, n2, Codigo;

console.log("Escolha a operação desejada:");
console.log("1 - Soma");
console.log("2 - Subtracao");
console.log("3 - Multiplicacao");
console.log("4 - Divisao");

n1 = leia.questionFloat("Digite o primeiro numero: ");
n2 = leia.questionFloat("Digite o segundo numero: ");
Codigo = leia.questionInt("Operacao: ");

switch (Codigo) {
  case 1:
    console.log(
      `A soma entre ${n1.toFixed(1)} + ${n2.toFixed(1)} = ${(n1 + n2).toFixed(
        1
      )}`
    );
    break;
  case 2:
    console.log(
      `A subtracao entre ${n1.toFixed(1)} - ${n2.toFixed(1)} = ${(
        n1 - n2
      ).toFixed(1)}`
    );
    break;
  case 3:
    console.log(
      `A multiplicacao entre ${n1.toFixed(1)} * ${n2.toFixed(1)} = ${(
        n1 * n2
      ).toFixed(1)}`
    );
    break;
  case 4:
    if (n2 !== 0) {
      console.log(
        `A divisao entre ${n1.toFixed(1)} / ${n2.toFixed(1)} = ${(
          n1 / n2
        ).toFixed(1)}`
      );
    } else {
      console.log("Erro: Divisao por zero nao e permitida.");
    }
    break;
  default:
    console.log("Operação Invalida!");
    break;
}
