let numero: number = Number(prompt("Ingrese un número"));
let contPositivos: number = 0;
let contTotal: number = 0;
let porcPositivos: number = 0;

while (numero !== 0) {
  if (numero > 0) {
    contPositivos = contPositivos + 1;
  }
  contTotal = contTotal + 1;
  numero = Number(prompt("Ingrese un número"));
}
if (contTotal > 0) {
  porcPositivos = (contPositivos * 100) / contTotal;
  console.log(
    contPositivos,
    "Positivos, ",
    "el",
    porcPositivos,
    "% son positivos"
  );
}
