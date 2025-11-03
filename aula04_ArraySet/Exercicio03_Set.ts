import leia = require("readline-sync");

const numeros: Set<number> = new Set<number>();

for(let i = 0; i< 10; i ++){
    let numero = leia.questionInt(`Digite o ${i+1}º numero: `, {limitMessage: "Por favor, digite um numero valido."});
    numeros.add(numero);
}

const numerosOrdenados: Array<number> = Array.from(numeros).sort((a,b) => a - b);
console.log("\nLista de dados do Set:\n");

numerosOrdenados.forEach((numero) => console.log(numero));