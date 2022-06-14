function asignaraulas() {}

let arrayAulaColor: string[] = ["Amarillo", "Verde", "Azul"];
let arrayCantidadAlumnos: number[] = new Array(3);
let alumnos;
for (let indice: number = 0; indice < 3; indice++) {
  alumnos = Number(prompt("Ingrese la cantidad de alumnos"));
  arrayCantidadAlumnos[indice] = alumnos;
}

console.log(arrayCantidadAlumnos);
