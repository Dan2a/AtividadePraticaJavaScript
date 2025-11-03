import leia = require ("readline-sync");

const numeros:Set<number> = new Set<number>([2,5,1,3,4,9,7,8,10,6]);

let numero = leia.questionInt("Digite um numero que voce deseja encontrar: ", {limitMessage: "Por favor, digite um numero valido."});

numeros.has(numero) ? console.log(`O numero ${numero} foi encontrado!`) : console.log(`O numero ${numero} nao foi encontrado!`);