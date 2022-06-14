function ingresarProductos(arregloProductos: string[]): void {
  for (let i: number = 0; i < arregloProductos.length; i++) {
    arregloProductos[i] = prompt("Ingrese los productos que va a comprar");
  }
}

function ingresarPrecioProductos(precioProducto: number[]): void {
  for (let i: number = 0; i < precioProducto.length; i++) {
    precioProducto[i] = Number(
      prompt("Ingrese el precio del siguiente producto: " + tipoProducto[i])
    );
  }
}

function ingresarCantDeCadaProducto(cantidadDeProductos: number[]): void {
  for (let i: number = 0; i < cantidadDeProductos.length; i++) {
    cantidadDeProductos[i] = Number(
      prompt("Ingrese la cantidad de " + tipoProducto[i] + " que va a comprar.")
    );
  }
}

function calcularCompraTotal(): number {
  let arrayPrecioParcial: number[] = new Array(cantidadProductos);
  let precioTotal: number = 0;

  for (let i: number = 0; i < arrayPrecioParcial.length; i++) {
    arrayPrecioParcial[i] = cantidadDeCadaProducto[i] * precioUnitario[i];
  }
  console.log("arrayPrecioParcial " + arrayPrecioParcial);

  for (let i: number = 0; i < arrayPrecioParcial.length; i++) {
    precioTotal = arrayPrecioParcial[i] + precioTotal;
  }

  return precioTotal;
}

function evaluarCompra(compraT: number) {
  if (compraT < 1000) {
    console.log("usted no partcipara del sorteo.");
  } else if (compraT > 3000) {
    console.log("Usted participará del sorteo por un 0km.");
  } else if (compraT > 2000 && compraT < 3000) {
    console.log("Usted participará del sorteo por una moto.");
  } else if (compraT > 1000 && compraT < 2000) {
    console.log("Usted participará del sorteo por un TV led.");
  } else {
    console.log("Usted no partcipara del sorteo.");
  }
}

let cantidadProductos: number = Number(
  prompt("Ingrese la cantidad de productos ")
);
let tipoProducto: string[] = new Array(cantidadProductos);
let precioUnitario: number[] = new Array(cantidadProductos);
let cantidadDeCadaProducto: number[] = new Array(cantidadProductos);
let compraTotal: number;

ingresarProductos(tipoProducto);
ingresarPrecioProductos(precioUnitario);
ingresarCantDeCadaProducto(cantidadDeCadaProducto);
compraTotal = calcularCompraTotal();
console.log(tipoProducto);
console.log(precioUnitario);
console.log(cantidadDeCadaProducto);
console.log(compraTotal);
evaluarCompra(compraTotal);
