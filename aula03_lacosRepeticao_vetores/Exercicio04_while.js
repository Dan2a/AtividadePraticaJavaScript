const leia = require("readline-sync");

let idade, genero, cargo;
let devBack = 0, devFront = 0, devMobile = 0, devFullstack = 0;
let numColaboradores = 0, somaIdades = 0;
let resp = true;

while (resp) { 
    idade = leia.questionInt("Idade: ");

    console.log(`------- Generos -------`);
    console.log(`1- Mulher Cis`);
    console.log(`2- Homem Cis`);
    console.log(`3- Não Binário`);
    console.log(`4- Mulher Trans`);
    console.log(`5- Homem Trans`);
    console.log(`6- Outros`);
    console.log(`-----------------------`);
    genero = leia.questionInt("Identidade de gênero: ");

    console.log(`------- Cargos -------`);
    console.log(`1- Backend`);
    console.log(`2- Frontend`);
    console.log(`3- Mobile`);
    console.log(`4- Fullstack`);
    console.log(`----------------------`);
    cargo = leia.questionInt("Cargo: ");

    if (cargo === 1) {
        devBack += 1;
    } else if (cargo === 2 && (genero === 1 || genero === 4)) {
        devFront += 1;
    } else if (cargo === 3 && (genero === 2 || genero === 5) && idade > 40) {
        devMobile += 1;
    } else if (cargo === 4 && genero === 3 && idade < 30) {
        devFullstack += 1;
    }

    numColaboradores += 1;
    somaIdades += idade;

    resp = leia.keyInYNStrict("Deseja continuar a leitura dos dados de um novo colaborador?");
    console.clear();

    if (resp === false) {
        const idadeMedia = somaIdades / numColaboradores;

        console.log("------ RESULTADOS FINAIS ------");
        console.log(`Total de pessoas desenvolvedoras Backend: ${devBack}`);
        console.log(`Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${devFront}`);
        console.log(`Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${devMobile}`);
        console.log(`Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${devFullstack}`);
        console.log(`O número total de pessoas que responderam à pesquisa: ${numColaboradores}`);
        console.log(`A média de idade das pessoas que responderam à pesquisa: ${idadeMedia.toFixed(2)}`);
        console.log("-------------------------------");

        break;
    }
}
