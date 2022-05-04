let sueldo: number = Number(prompt("Ingrese su sueldo"));
let nuevoSueldo: number = 0;

if (sueldo > 0 && sueldo <= 15000) {
  nuevoSueldo = sueldo * 1.2;
  console.log("Usted recibirá un 20& de aumento");
  console.log("Su nuevo sueldo sera de: ", nuevoSueldo);
} else if (sueldo > 15000 && sueldo <= 20000) {
  nuevoSueldo = sueldo * 1.1;
  console.log("Usted recibirá un 10% de aumento");
  console.log("Su nuevo sueldo sera: ", nuevoSueldo);
} else if (sueldo > 20000 && sueldo <= 25000) {
  nuevoSueldo = sueldo * 1.05;
  console.log("Usted recibirá un 5% de aumento");
  console.log("Su nuevo sueldo será de: ", nuevoSueldo);
} else {
  console.log("Usted no recibirá un aumento");
}
