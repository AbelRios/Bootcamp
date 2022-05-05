//PARAMETROS CON VALOR POR DEFECTO
function miFunction(a, b = 10) {
  return a + b;
}

console.log(miFunction(1)); //devuelve 11
console.log(miFunction(1, 2)); //devuelve 3
console.log(miFunction(1, 10)); //devuelve 11
console.log(miFunction(6)); //devuelve 16

//PARAMETROS INDEFINIDOS
function miSegFunction(a, ...numeros) {
  let sum = a;
  numeros.forEach(function (n) {
    sum += n;
  });
  return sum;
}

const a = [1, 2, 3, 4, 5];
console.log(miSegFunction(10, ...a)); //devuelve 25
console.log(miSegFunction(10, ...[1, 2, 3, 4, 5, 6])); //devuelve 31
