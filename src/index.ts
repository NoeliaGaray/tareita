let cantidad: number = 270;
let personasEnDisco: number[] = new Array(cantidad);
let indice: number;

function Aleatorio(menorValor: number, mayorValor: number): number {
  return Math.floor(Math.random() * mayorValor || menorValor);
}

for (indice = 0; indice <= cantidad; indice++) {
  personasEnDisco[indice] = Aleatorio(19, 40);
}

for (indice = 0; indice <= cantidad; indice++) {
  console.log(personasEnDisco[indice]);
}

console.log(`En la disco hay ${indice - 1} personas`);

// if (personasEnDisco[indice] >= personasEnDisco[21]){
//   console.log(`En la disco hay ${personasEnDisco[indice-1]} personas`);
// } else {
//   console.log(`En la disco hay ${personasEnDisco[indice-1]} personas menores de 21`);
// }

// while (personasEnDisco[indice]>=21) {
//   console.log(`hay ${indice} mayores de 21`)
// }

// if (personasEnDisco[indice]<21){
//   console.log(`En la disco hay ${indice} personas menores de 21`)
// } else {
//   console.log(`En la disco hay ${indice} personas mayores de 21`)
// }

// console.log(`En la disco hay ${indice} personas menores de 21`);

// if (indice<21){
//   console.log(`Hay ${indice} menores de 21`);
// }
