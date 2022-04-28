let compra: number = Number(prompt("Ingrese el total de su compra"));
let descuento: number = 0.1;
let preciofinal: number = 0;

if (compra > 1000) {
  preciofinal = compra * descuento - compra;
  console.log("El precio final de su compra es: ", preciofinal);
} else {
  console.log("No se aplicara el descuento a su compra");
}

let altura: number = Number(prompt("Ingrese su altura"));

if (altura >= 1.3) {
  console.log("Puede entrar al juego");
} else {
  console.log("No cuenta con la altura minima para ingresar al juego");
}
