let precio: number = Number(prompt("Ingrese precio del producto"));
let porcentajeDescuento: number = 0.1;
let descuento: number = precio * porcentajeDescuento;
let precioFinal: number = precio - descuento;

console.log("El precio final del producto es: ", precioFinal);
