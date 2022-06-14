function ingresarProductos1(arregloProductos: string[]): void {
  for (let i: number = 0; i < arregloProductos.length; i++) {
    arregloProductos[i] = prompt("Ingrese los productos que va a comprar");
  }
}

function ingresarCantDeCadaProducto1(cantidadDeProductos: number[]): void {
  for (let i: number = 0; i < cantidadDeProductos.length; i++) {
    cantidadDeProductos[i] = Number(
      prompt(
        "Ingrese la cantidad de " + tipoProducto1[i] + " que va a comprar."
      )
    );
  }
}

let cantidadProductos1: number = Number(
  prompt("Ingrese la cantidad de productos ")
);
let tipoProducto1: string[] = new Array(cantidadProductos1);
let precioUnitario1: number[] = new Array(cantidadProductos1);
let cantidadDeCadaProducto1: number[] = new Array(cantidadProductos1);
let compraTotal1: number;

//ingresarProductos1(tipoProducto1);
ingresarCantDeCadaProducto1(cantidadDeCadaProducto1);
//console.log(tipoProducto1);
console.log(cantidadDeCadaProducto1);
