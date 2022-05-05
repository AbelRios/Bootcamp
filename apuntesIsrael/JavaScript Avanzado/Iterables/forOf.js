let letras = ["a", "b", "c"];

//FOR
for (let i = 0; i < letras.length; i++) {
  console.log(letras[i]);
}

//FOR OF
for (let letra of letras) {
  console.log(letra);
}

let numeros = [1, 2, 3, 4, 5];

//FOR
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

//FOR OF
for (let numero of numeros) {
  console.log(numero);
}

let datos = { a: 1, b: 2, c: 3 };

//FOR IN
for (let d in datos) {
  console.log(d);
  console.log(datos[d]);
}

//FOR EACH
numeros.forEach(function (e) {
  console.log(e);
});

//FUNCTION FLECIA
numeros.forEach((e) => console.log(e));

//SORT
console.log(numeros.sort((a, b) => a - b));
