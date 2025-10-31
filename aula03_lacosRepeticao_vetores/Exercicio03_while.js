const leia = require("readline-sync");

let idade
let menor21 = 0
let maior50 = 0
let cont = true

while(cont){
    idade = leia.questionInt("Digite uma idade: ");
    if (idade < 0) {
        cont = false
    } else if (idade < 21) {
        menor21 += 1
    } else if (idade > 50) {
        maior50 += 1
    }
}

console.log(`Total de pessoas menores de 21 anos: ${menor21}`);
console.log(`Total de pessoas maiores de 50 anos: ${maior50}`);