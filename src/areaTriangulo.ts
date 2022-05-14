function calcularAreaTriangulo(base: number, altura: number): number {
  let area: number;

  area = (base * altura) / 2;
  return area;
}

let base: number = 1;
let altura: number = 2;

for (let cont: number = 0; cont <= 7; cont++) {
  console.log(calcularAreaTriangulo(base, altura));
  base++;
  altura = altura + 2;
}
