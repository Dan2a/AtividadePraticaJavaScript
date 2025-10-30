const leia = require("readline-sync");

let a, b, c, soma;

a = leia.questionFloat("Digite o numero A: ");
b = leia.questionFloat("Digite o numero B: ");
c = leia.questionFloat("Digite o numero C: ");

soma = a + b;

if (soma > c) {
  console.log("A soma de A + B é maior que C");
} else if (soma < c) {
  console.log("A soma de A + B é menor que C");
} else if (soma == c) {
  console.log("A soma de A + B é igual a C");
}
