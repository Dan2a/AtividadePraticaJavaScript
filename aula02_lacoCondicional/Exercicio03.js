const leia = require("readline-sync");

let idade, nome, doador;

nome = leia.question("Digite o nome: ");
idade = leia.questionInt("Digite a idade: ");
doador = leia.question("E a sua primeira doacao? (sim/nao): ").toLowerCase();
doador = doador === "sim" ? true : false;

if (idade >= 18 && idade <= 59 && doador) {
  console.log(`${nome} está apto para doar sangue!`);
} else if (idade >= 60 && idade <= 69 && doador == false) {
  console.log(`${nome} está apto para doar sangue!`);
} else if (idade < 18 || idade > 69) {
  console.log(`${nome} não está apto para doar sangue!`);
} else if (idade >= 60 && idade <= 69 && doador == true) {
  console.log(`${nome} não está apto para doar sangue!`);
}
