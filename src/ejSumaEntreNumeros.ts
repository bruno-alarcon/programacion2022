let numero1: number = Number(prompt("Ingrese un Número"));
let numero2: number = Number(prompt("Ingrese otro numero"));
let suma: number = 0;
let actual: number = 0;
let cambio: number = 0;

if (numero1 > numero2) {
  cambio = numero1;
  numero1 = numero2;
  numero2 = cambio;
}
for (let actual: number = numero1; actual <= numero2; actual++) {
  suma = suma + actual;

  console.log("La suma es: ", suma);
}
