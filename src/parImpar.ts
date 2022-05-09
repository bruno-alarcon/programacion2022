let numUs: number = Number(prompt("Ingrese un numero"));

while (numUs <= 0) {
  numUs = Number(prompt("Vuelva a ingresar un valor mayor a 0: ");
}
if (numUs % 2 === 0) {
  console.log("Es par");
} else {
  console.log("Es impar");
}