function dibujarLinea() {
  let linea: string = "-";
  for (let indice = 0; indice <= 40; indice++) {
    linea = linea + "-";
  }
  console.log(linea);
}
let numero1: number = Number(prompt("Ingrese el rimer numero"));
let numero2: number = Number(prompt("Ingrese el segundo numero"));
let opcion: number = Number(
  prompt("ingrese 1 si quiere sumar. ingrese 2 si quiere restar")
);
let resultado: number = 0;

if (opcion === 1) {
  resultado = numero1 + numero2;
  dibujarLinea();
  console.log("El resultado es: ", resultado);
  dibujarLinea();
} else if (opcion === 2) {
  resultado = numero1 - numero2;

  dibujarLinea();
  console.log("El resultado es: ", resultado);
  dibujarLinea();
} else {
  dibujarLinea();
  console.log("El programa finalizó");
  dibujarLinea();
}
