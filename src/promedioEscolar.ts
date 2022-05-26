//function sumaNotas() {
//  let suma: number = 0;

/*  let cantalumnos:number=Number(prompt("Ingrese la cantidad de alumnos "))
let nombre: string = prompt("Ingrese el nombre del alumno");
let arregloAlumnos
let arregloNotas: number[] = new Array(3);
let suma: number = 0;
let notaFinal: number = 0;

for (let i: number = 0; i < 3; i++) {
  arregloNotas[i] = Number(prompt("Ingrese nota de los cuatrimestres"));
}

for (let indice: number = 0; indice < 3; indice++) {
  suma = suma + arregloNotas[indice];
}
console.log(suma);

for (let indice: number = 0; indice < 3; indice++) {
  notaFinal = suma / 3;
}
console.log("La nota final de " + nombre + " es " + notaFinal);
 */

/*  function sumarNotas(){
for (let i: number = 0; i < 3; i++) {
  arregloNotas[i] = Number(prompt("Ingrese nota de los cuatrimestres"));
}
}
*/

let cantalumnos: number = Number(prompt("Ingrese la cantidad de alumnos"));
let arregloAlumnos: string[] = new Array(cantalumnos);
let arregloNotas: number[] = new Array(3);
let suma: number = 0;
let promedio: number;

for (let indice: number = 0; indice < cantalumnos; indice++) {
  arregloAlumnos[indice] = prompt("Ingrese el nombre del alumno");
}
console.log(arregloAlumnos);

let pos: number = Number(
  prompt(
    "Ingrese la posicion del alumno que quiera cargar las notas: " +
      arregloAlumnos
  )
);
pos = pos - 1;
if (pos <= cantalumnos) {
  for (let i: number = 0; i < 3; i++) {
    arregloNotas[i] = Number(prompt("Ingrese nota de los cuatrimestres"));
  }
  console.log(arregloNotas);
}

for (let indice: number = 0; indice < 3; indice++) {
  suma = suma + arregloNotas[indice];
}

promedio = suma / 3;
console.log("la nota final de " + arregloAlumnos[pos] + " es " + promedio);
