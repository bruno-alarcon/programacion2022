function ingresarNumeros() {
  let aux: number = arreglo1;
  for (let i: number = 0; i < 2; i++) {
    for (let indice: number = 0; indice < 6; indice++) {
      aux[indice] = Number(prompt("Ingrese un numero "));
    }
    aux = arreglo2;
  }
}

function sumaArreglos(): number {
  let suma: number[] = new Array(6);

  for (let indice: number = 0; indice < 6; indice++) {
    suma[indice] = arreglo1[indice] + arreglo2[indice];
  }
  console.log(suma);
}

let arreglo1: number[] = new Array(6);
let arreglo2: number[] = new Array(6);

ingresarNumeros();

console.log(arreglo1);
console.log(arreglo2);
console.log("La suma entre arreglos es de:");
sumaArreglos();
