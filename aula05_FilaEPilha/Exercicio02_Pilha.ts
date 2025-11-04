import leia = require("readline-sync");
import { Stack } from "./Stack";

let validador: boolean = true;
const pilha = new Stack<string>();

do{
    console.log("********************************************************\n")
    console.log("           1 - Adicionar Livro na pilha")
    console.log("           2 - Listar todos os Livros")
    console.log("           3 - Retirar Livro da pilha")
    console.log("           0 - Sair")
    console.log("\n********************************************************")

    let opcao: number = leia.questionInt("Digite uma opcao: ", {limitMessage:"*** Digite um numero de 0 a 3 ***"})
        switch(opcao){
            case 1:
                let nomeLivro =leia.question("Digite o nome: ")
                pilha.push(nomeLivro)
                console.log("pilha: \n")
                pilha.printStack()
                console.log("\nLivro adicionado!")
                break;
            case 2:
                pilha.isEmpty()
                ? console.log("A pilha está vazia!") 
                : console.log("pilha: \n"), pilha.printStack()
                break;
            case 3:
            pilha.isEmpty()
                ? console.log("A pilha está vazia!")
                : (pilha.pop(), console.log("pilha: \n"), pilha.printStack(), console.log("\n Livro foi retirado da pilha!"));
            break;
            case 0:
                validador = false
                console.log("\nPrograma Finalizado!")
                break;
            default:
                console.log("\nDigite um valor valido de 0 a 3")
        }

}while(validador)
