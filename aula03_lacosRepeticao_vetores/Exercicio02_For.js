const leia = require("readline-sync")

let num
let pares= 0
let impares= 0 

for(let i = 0; i < 10; i++) {
    num = leia.questionInt(`Digite o ${i+1}- numero:`);
    if(num % 2 == 0) {
        pares += 1;
    }else{
        impares += 1;
    }
}

console.log(`Total de numeros pares: ${pares}`);
console.log(`Total de numeros impares: ${impares}`);