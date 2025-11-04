import { Queue } from "./Queue";
import leia = require("readline-sync");

let validador: boolean = true;
const fila = new Queue<string>();

do{
    console.log("********************************************************\n")
    console.log("           1 - Adicionar Cliente na Fila")
    console.log("           2 - Listar todos os Cliente")
    console.log("           3 - Retirar Cliente da Fila")
    console.log("           0 - Sair")
    console.log("\n********************************************************")

    let opcao: number = leia.questionInt("Digite uma opcao: ", {limitMessage:"*** Digite um numero de 0 a 3 ***"})
    switch(opcao){
        case 1:
            let nomeCliente =leia.question("Digite o nome: ")
            fila.enqueue(nomeCliente)
            console.log("Fila: \n")
            fila.printQueue()
            console.log("\nCliente adicionado!")
            break;
        case 2:
            fila.isEmpty()
            ? console.log("A fila está vazia!") 
            : console.log("fila: \n"), fila.printQueue()
            break;
        case 3:
        fila.isEmpty()
            ? console.log("A fila está vazia!")
            : (fila.dequeue(), console.log("Fila: \n"), fila.printQueue(), console.log("\n Cliente foi Chamado"));
        break;
        case 0:
            validador = false
            console.log("\nPrograma Finalizado!")
            break;
        default:
            console.log("\nDigite um valor valido de 0 a 3")
    }
}while(validador)