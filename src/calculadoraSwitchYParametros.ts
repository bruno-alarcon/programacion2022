function sumarNumeros(num1: number, num2: number, r: number): number {
  r = num1 + num2;
  return r;
}

function restarNumeros(n1: number, n2: number, res: number): number {
  res = n1 - n2;
  return res;
}
function multiplicarNumeros(
  valor1: number,
  valor2: number,
  result: number
): number {
  result = valor1 * valor2;
  return result;
}
function dividirNumeros(v1: number, v2: number, resultado: number): number {
  resultado = v1 / v2;
  return resultado;
}

let numero1: number = Number(prompt("Ingrese un numero"));
let numero2: number = Number(prompt("Ingrese otro numero"));
let opcion: number = Number(
  prompt("ingrese: 1_Sumar. 2_Restar. 3_Multiplicar. 4_Dividir")
);
let resul: number;

switch (opcion) {
  case 1:
    resul = sumarNumeros(numero1, numero2, resul);
    console.log("El resultado es: ", resul);
    break;

  case 2:
    resul = restarNumeros(numero1, numero2, resul);
    console.log("El resultado es: ", resul);
    break;

  case 3:
    resul = multiplicarNumeros(numero1, numero2, resul);
    console.log("El resultado es: ", resul);
    break;

  case 4:
    resul = dividirNumeros(numero1, numero2, resul);
    console.log("El resultado es: ", resul);
    break;

  default:
    console.log("Opcion no valida. Fin del programa");
}
