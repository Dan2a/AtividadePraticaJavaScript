const leia = require("readline-sync")
let vetor = [2,5,1,3,4,9,7,8,10,6]

let num = leia.questionInt("Digite um numero que voce seja encontrar: ")

for(let i = 0; i < vetor.length; i++) {
    if(vetor[i] == num) {
        console.log(`O número ${num} foi encontrado na posição ${i} do vetor.`)
        break
    }
    if(i == vetor.length -1) {
        console.log(`O número ${num} não foi encontrado no vetor.`)
    }
}
