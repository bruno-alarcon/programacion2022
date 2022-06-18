function ingresarProductos(arregloProductos: string[]): void {
  for (let i: number = 0; i < arregloProductos.length; i++) {
    arregloProductos[i] = prompt("Ingrese los productos que va a comprar");
  }
}

function ingresarPrecioProductos(precioProducto: number[]): void {
  for (let i: number = 0; i < precioProducto.length; i++) {
    let precio: number = Number(
      prompt("Ingrese el precio del siguiente producto: " + tipoProducto[i])
    );
    while (precio <= 0) {
      precio = Number(
        prompt("Ingrese el precio del siguiente producto: " + tipoProducto[i])
      );
    }
    precioProducto[i] = precio;
  }
}

function ingresarCantDeCadaProducto(cantidadDeProductos: number[]): void {
  for (let i: number = 0; i < cantidadDeProductos.length; i++) {
    let cantidad: number = Number(
      prompt("Ingrese la cantidad de " + tipoProducto[i] + " que va a comprar.")
    );
    while (cantidad <= 0) {
      cantidad = Number(
        prompt(
          "Ingrese la cantidad de " + tipoProducto[i] + " que va a comprar."
        )
      );
    }
    cantidadDeProductos[i] = cantidad;
  }
}

function calcularCompraTotal(): number {
  let arrayPrecioParcial: number[] = new Array(cantidadProductos);
  let precioTotal: number = 0;

  for (let i: number = 0; i < arrayPrecioParcial.length; i++) {
    arrayPrecioParcial[i] = cantidadDeCadaProducto[i] * precioUnitario[i];
  }

  for (let i: number = 0; i < arrayPrecioParcial.length; i++) {
    precioTotal = arrayPrecioParcial[i] + precioTotal;
  }

  return precioTotal;
}

function evaluarCompra(compraT: number) {
  if (compraT < 1000) {
    console.log(
      "EL TOTAL DE SU COMPRA ES: $" +
        compraT +
        ".  USTED NO PARTICIPARÁ DEL SORTEO."
    );
  } else if (compraT > 3000) {
    console.log(
      "EL TOTAL DE SU COMPRA ES: $" +
        compraT +
        ".  USTED PARTICIPARÁ DEL SORTEO POR UN 0KM."
    );
  } else if (compraT > 2000) {
    console.log(
      "EL TOTAL DE SU COMPRA ES: $" +
        compraT +
        ".  USTED PARTICIPARÁ DEL SORTEO POR UNA MOTO."
    );
  } else if (compraT > 1000) {
    console.log(
      "EL TOTAL DE SU COMPRA ES: $" +
        compraT +
        ".  USTED PARTICIPARÁ DEL SORTEO POR UN TV LED."
    );
  }
}

function mostrarDetalleCompra() {
  console.log(
    "--------- * --------- * -------- * ------- * ---------- * ---------"
  );
  console.log("DETALLE DE COMPRA: ");

  for (let i: number = 0; i < tipoProducto.length; i++) {
    console.log(
      tipoProducto[i] +
        "    " +
        cantidadDeCadaProducto[i] +
        " Unidades " +
        " ---- Precio unitario $" +
        precioUnitario[i] +
        " ---- Total  $" +
        precioUnitario[i] * cantidadDeCadaProducto[i]
    );
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
mostrarDetalleCompra();
evaluarCompra(compraTotal);
