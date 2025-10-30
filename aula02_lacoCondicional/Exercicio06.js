const leia = require("readline-sync");

let nome, codigo, salario, cargo;

console.log("---------------- Calculo do Salario ----------------");
console.log("Codigo do cargo|Cargo        |Percentual do reajuste");
console.log("      1        |Gerente      |       10%       ");
console.log("      2        |Vendedor     |       7%       ");
console.log("      3        |Supervisor   |       9%       ");
console.log("      4        |Motorista    |       6%       ");
console.log("      5        |Estoquista   |       5%       ");
console.log("      6        |Tecnico de TI|       8%       ");
console.log("----------------------------------------------------");

nome = leia.question("Nome do colaborador: ");
codigo = leia.questionInt("Cargo: ");
salario = leia.questionFloat("Salario: R$ ");

switch (codigo) {
  case 1:
    salario = salario + salario * 0.1;
    cargo = "Gerente";
    break;
  case 2:
    salario = salario + salario * 0.07;
    cargo = "Vendedor";
    break;
  case 3:
    salario = salario + salario * 0.09;
    cargo = "Supervisor";
    break;
  case 4:
    salario = salario + salario * 0.06;
    cargo = "Motorista";
    break;
  case 5:
    salario = salario + salario * 0.05;
    cargo = "Estoquista";
    break;
  case 6:
    salario = salario + salario * 0.08;
    cargo = "Tecnico de TI";
    break;
  default:
    console.log("Código inválido!");
    break;
}

console.log("Nome do colaborador: " + nome);
console.log("Codigo do cargo: " + cargo);
console.log("Salario: R$ " + salario.toFixed(2));
