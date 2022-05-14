function esMultiplo(numero1: number, numero2: number): boolean {
  return numero1 % numero2 === 0;
}

function cantidadDeDivisores(numero: number): number {
  let cantDiv: number = 0;

  for (let indice: number = 1; indice <= numero; indice++) {
    if (esMultiplo(numero, indice)) {
      cantDiv = cantDiv + 1;
    }
  }
  return cantDiv;
}

let num: number = Number(prompt("Ingrese un número"));
let cantDivisores: number = cantidadDeDivisores(num);

console.log("El número ", num, "tiene ", cantDivisores, " divisores");
