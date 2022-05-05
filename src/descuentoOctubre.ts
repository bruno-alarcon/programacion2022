let total: number = Number(prompt("Ingrese total de la compra"));
let mes: string = prompt("Ingrese el mes actual");
let descuento: number = 0;
let nuevoTotal: number = 0;

if (mes == "octubre") {
  descuento = (15 / 100) * 100;
  nuevoTotal = total - descuento;

  console.log(
    "A su compra se le aplicará un 15% de descuento, el nuevo total es: ",
    nuevoTotal
  );
} else {
  console.log("Su compra no tiene el descuento");
}
