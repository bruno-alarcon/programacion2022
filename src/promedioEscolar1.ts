let n: string;

function ingresarAlumnos() {
  n = prompt("Ingrese el nombre del Alumno");
}

function ingresarNotas() {
  for (let i: number = 0; i < 3; i++) {
    arregloNotas1[i] = Number(prompt("Ingrese nota de los cuatrimestres"));
  }
  console.log(arregloNotas1);
}

function sumarNotasYPromedio() {
  for (let indice: number = 0; indice < 3; indice++) {
    suma1 = suma1 + arregloNotas1[indice];
  }
  promedio1 = suma1 / 3;
  console.log("La nota final de " + n + " es " + promedio1);
}

let arregloNotas1: number[] = new Array(3);
let suma1: number = 0;
let promedio1: number;
let opcion: number;
let condicion: boolean = true;

while (condicion == true) {
  opcion = Number(
    prompt(
      "Ingrese la opcion que desee 1_Calcular promedio de alumno  2 _ Salir"
    )
  );

  if (opcion == 1) {
    arregloNotas1 = [];
    suma1 = 0;
    condicion = true;
    ingresarAlumnos();
    ingresarNotas();
    sumarNotasYPromedio();
  } else {
    condicion = false;
    console.log("El programa finalizo");
  }
}
