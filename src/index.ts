let cantidad: number = 270;
let mayores: number = 0;
let menores: number = 0;
let personasEnDisco: number[] = new Array(cantidad);

function Aleatorio(menorValor: number, mayorValor: number): number {
  return Math.floor(Math.random() * (mayorValor + menorValor) + menorValor);
}

for (let indice = 0; indice < cantidad; indice++) {
  personasEnDisco[indice] = Aleatorio(19, 40);
  console.log(personasEnDisco[indice]);
}
console.log(`En la disco hay ${personasEnDisco.length} personas`);

for (let indice = 0; indice < cantidad; indice++) {
  if (personasEnDisco[indice] >= 21) {
    mayores++;
  } else {
    menores++;
  }
}
console.log(`En la disco hay ${mayores} mayores de 21`);
console.log(`En la disco hay ${menores} menores de 21`);
