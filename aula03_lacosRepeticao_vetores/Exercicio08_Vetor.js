const leia = require("readline-sync");

let vetor = [];
let somatotal = 0;

for(let i = 0; i<10; i++) {
    vetor[i] = leia.questionInt(`Digite o ${i+1}- numero:`);
    somatotal += vetor[i];
}

console.log("Elementos nos indices impares:");
let impares = ""
for(let i = 0; i<vetor.length; i++) {
    if(i % 2 != 0) {
        impares += `${vetor[i]} `;
    }
}
console.log(impares);

console.log("Elementos pares:");
let pares = ""
for(let i = 0; i<vetor.length; i++) {
    if(vetor[i] % 2 == 0) {
        pares += `${vetor[i]} `;
    }
}
console.log(pares);

let media = somatotal / vetor.length;
console.log(`Soma: ${somatotal}`);
console.log(`Media: ${media.toFixed(2)}`);