const leia = require("readline-sync")

let num, multiplo3, cont
multiplo3 = cont = 0

do {
    num = leia.questionInt("Digite um numero: ");
    if(num % 3 == 0 && num > 0){
        multiplo3 += num 
        cont += 1
    }
}while(num != 0)

console.log(`A media dos números múltiplos de 3 é: ${multiplo3/cont}`);

