let puesto: number = Number(prompt("Ingrese su posición final en la carrera"));

if (puesto <= 3) {
  if (puesto === 1) {
    console.log("Usted obtuvo una medalla de oro");
  }
  if (puesto === 2) {
    console.log("Usted obtuvo una medalla de plata");
  }
  if (puesto === 3) {
    console.log("Usted obtuvo una medalla de bronce");
  }
} else {
  console.log("Usted obtuvo un certificado de participación");
}
