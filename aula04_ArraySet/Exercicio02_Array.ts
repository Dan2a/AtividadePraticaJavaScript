import leia = require("readline-sync");

const numeros: Array<number> = new Array<number>(2,5,1,3,4,9,7,8,1,6);

let numero = leia.questionInt("Digite um numero que voce deseja encontrar: ", {limitMessage: "Por favor, digite um numero valido."});

numeros.includes(numero) ? console.log(`O numero ${numero} está localizado na possição ${numeros.indexOf(numero)}`) : console.log(`O numero ${numero} nao foi encontrado na lista.`);