// Callback es una function que se delega desde la function padre

// El callback es una function que tengo en mi codigo
// que puedo pasar como parametro en otra function de mi codigo

function doSomething(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

const a = [1, 2, 3, 4, 5, 6];

function mostrarNumero(numero) {
  console.log(`Este numero ed ${numero}`);
}

function mostrarNumerDos(numero) {
  console.log(`Otra function ${numero}`);
}

doSomething(a, mostrarNumero);
doSomething(a, mostrarNumerDos);

//////////////////////////////////////////////////////////////

function calcular(arr, callback, imprime) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = callback(arr[i], total);
  }
  imprime(total);
}

const b = [10, 8, 2, 5, 8, 19, 9, 8];

function suma(a, b) {
  return a + b;
}

function multiplica(a, b) {
  if (b === 0) {
    b = b + 1;
  }
  return b * a;
}

calcular(b, suma, function (total) {
  console.log(`La suma es ${total}`);
}); // muestra el resultado de sumar todos los numeros
calcular(b, multiplica, function (total) {
  console.log(`La multiplicacion es ${total}`);
}); // muestra el resultado de multiplicar todos los numeros
