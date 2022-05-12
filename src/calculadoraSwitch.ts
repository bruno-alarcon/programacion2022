function dibujarLineas() {
  let linea: string = "-";
  for (let indice = 0; indice <= 40; indice++) {
    linea = linea + "-";
  }
  console.log(linea);
}

let numero1: number = Number(prompt("Ingrese el primer numero"));
let numero2: number = Number(prompt("Ingrese el segundo numero"));
let opcion: number = Number(
  prompt("Ingrese: 1_Sumar. 2_Restar 3_Multiplicar 4_Dividir")
);
let resultado: number = 0;

switch (opcion) {
  case 1:
    resultado = numero1 + numero2;
    dibujarLineas();
    console.log("El resultado de la suma es: ", resultado);
    dibujarLineas();
    break;

  case 2:
    resultado = numero1 - numero2;
    dibujarLineas();
    console.log("El resultado de la resta es: ", resultado);
    dibujarLineas();
    break;

  case 3:
    resultado = numero1 * numero2;
    dibujarLineas();
    console.log("El resultado de la multiplicacion es: ", resultado);
    dibujarLineas();
    break;

  case 4:
    resultado = numero1 / numero2;
    dibujarLineas();
    console.log("El resultado de la division es: ", resultado);
    dibujarLineas();
    break;

  default:
    console.log("Fin del programa");
}
