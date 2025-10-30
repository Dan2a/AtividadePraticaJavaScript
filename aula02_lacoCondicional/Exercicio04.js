const leia = require("readline-sync");

let tipo;

console.log("--- Escolha o animal ---");
tipo = leia.question("Escolha entre (Vertebrado/Invertebrado): ").toLowerCase();
if (tipo === "vertebrado") {
  tipo = leia.question("Escolha entre (Ave/Mamifero): ").toLowerCase();
  if (tipo === "ave") {
    tipo = leia.question("Escolha entre (Carnivoro/Onivoro): ").toLowerCase();
    if (tipo === "carnivoro") {
      console.log("Águia");
    } else if (tipo === "onivoro") {
      console.log("Pomba");
    }
  } else if (tipo === "mamifero") {
    tipo = leia.question("Escolha entre (Onivoro/Herbivoro): ").toLowerCase();
    if (tipo === "onivoro") {
      console.log("Homem");
    } else if (tipo === "herbivoro") {
      console.log("Vaca");
    }
  }
} else if (tipo === "invertebrado") {
  tipo = leia.question("Escolha entre (Inseto/Anelideo): ").toLowerCase();
  if (tipo === "inseto") {
    tipo = leia
      .question("Escolha entre (Hematofago/Herbivoro): ")
      .toLowerCase();
    if (tipo === "hematofago") {
      console.log("Pulga");
    } else if (tipo === "herbivoro") {
      console.log("Lagarta");
    }
  } else if (tipo === "anelideo") {
    tipo = leia.question("Escolha entre (Hematofago/Onivoro): ").toLowerCase();
    if (tipo === "hematofago") {
      console.log("Sanguessuga");
    } else if (tipo === "onivoro") {
      console.log("Minhoca");
    }
  }
}
