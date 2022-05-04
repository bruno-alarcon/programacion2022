let numero1: number = Number(prompt("Ingrese un numero"));
let condicion: boolean = true;

if (numero1 % 2 == 0) {
  condicion = true;
} else {
  condicion = false;
}

switch condicion {
  case true:
    if(numero1==0){
      console.log("El numero ingresado es cero")
    }
    console.log("El numero ingresado es par");
    break;

  case false:
    console.log("El numero ingresado es impar");
    break;
}
