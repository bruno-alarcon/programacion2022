function ingresarNumeros() {
  for (let indice: number = 0; indice < longitud; indice++) {
    arreglo1[indice] = Number(prompt("Ingrese un numero"));
  }
}

let longitud: number = Number(prompt("Ingrese la dimension del arreglo"));
let arreglo1: number[] = new Array(longitud);

function numerosPositivos();

ingresarNumeros();
console.log(arreglo1);
