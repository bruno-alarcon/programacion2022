let sueldo: number = Number(prompt("Ingrese su sueldo actual"));
let nuevoSueldo: number = 0;
let sueldoActual: number = 0;

//Cambio la variable del switch según el sueldo ingresado.
if (sueldo > 0 && sueldo <= 15000) {
  sueldoActual = 1;
}

if (sueldo > 15000 && sueldo <= 20000) {
  sueldoActual = 2;
}

if (sueldo > 20000 && sueldo <= 25000) {
  sueldoActual = 3;
}

//Según el valor que tomo la variable sueldoActuel ingresa a uno de los casos, de lo contrario ingresa al default.
switch (sueldoActual) {
  case 1:
    nuevoSueldo = sueldo * 1.2;
    console.log("Usted recibirá un 20& de aumento");
    console.log("Su nuevo sueldo sera de: ", nuevoSueldo);
    break;

  case 2:
    nuevoSueldo = sueldo * 1.1;
    console.log("Usted recibirá un 10% de aumento");
    console.log("Su nuevo sueldo sera: ", nuevoSueldo);
    break;

  case 3:
    nuevoSueldo = sueldo * 1.05;
    console.log("Usted recibirá un 5% de aumento");
    console.log("Su nuevo sueldo será de: ", nuevoSueldo);
    break;

  default:
    console.log("Usted no obtendrá un aumento");
}
