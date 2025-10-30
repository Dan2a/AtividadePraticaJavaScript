const leia = require("readline-sync");

let num;
num = leia.questionInt("Digite um numero inteiro: ");

if (num % 2 == 0 && num >= 0) {
  console.log(`O Número ${num} é par e positivo!`);
} else if (num % 2 == 0 && num < 0) {
  console.log(`O Número ${num} é par e negativo!`);
} else if (num % 2 != 0 && num >= 0) {
  console.log(`O Número ${num} é ímpar e positivo!`);
} else {
  console.log(`O Número ${num} é ímpar e negativo!`);
}
