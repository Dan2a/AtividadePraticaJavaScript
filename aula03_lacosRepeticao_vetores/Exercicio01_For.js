const leia = require("readline-sync");

let n1, n2
n1 = leia.questionInt("Digite o primeiro numero do intervalo: ");
n2 = leia.questionInt("Digite o segundo numero do intervalo: ");

if (n1 > n2) {
  console.log("Intervalo inválido! O primeiro número deve ser menor que o segundo.");
} else {
    for(let i = n1; i <= n2; i++) {
        if(i%3 == 0 && i%5 == 0) {
            console.log(`${i} é múltiplo de 3 e 5`);
        }
    }
}