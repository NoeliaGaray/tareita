let cantidad: number = 270
let personasEnDisco: number[] = new Array(cantidad);
let indice: number;

function Aleatorio (menorValor: number,mayorValor: number):number{
  return Math.floor(Math.random()* mayorValor || menorValor);

}
for(indice = 0; indice <= cantidad; indice++){
  personasEnDisco[indice] = Aleatorio(19,40);
}
for (indice = 0 ; indice <= cantidad; indice++){
console.log(personasEnDisco[indice]);
}
console.log(`En la disco hay ${indice-1} personas`);


// console.log(`En la disco hay ${indice} personas menores de 21`);


// if (indice<21){
//   console.log(`Hay ${indice} menores de 21`);
// }