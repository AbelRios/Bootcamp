// DESESTRUCTURACION (I)

let a, b, rest;
[a, b] = [10, 20];

console.log(a); //muestra 10
console.log(b); //muestra 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest); // muestra [30, 40, 50]

// DESESTRUCTURACION (II)

({ a, b } = { a: 10, b: 20 });
console.log(a);
console.log(b);

({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); //muestra 10
console.log(b); //muestra 20
console.log(rest); //muestra {c: 30, d: 40}

// DESESTRUCTURACION (III)

const user = ["David", "Lopez", "C/ Malaga"];
const [nombre, apellido, direccion] = user;

console.log(nombre); //David
console.log(apellido); //Lopez
console.log(direccion); //C/ Malaga

// DESESTRUCTURACION (IV)

let c, d;

[c = 5, d = 7] = [1];

console.log(c); // 1
console.log(d); // 7

[c = 5, d = 7] = [4, 6];

console.log(c); // 4
console.log(d); // 6

// DESESTRUCTURACION (V)

let e = 1;
let f = 3;

[e, f] = [f, e];
console.log(e);
console.log(f);

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1, 3, 2]

// DESESTRUCTURACION (VI)

function g() {
  return [1, 2];
}

let h, i;
[h, i] = g();
console.log(h);
console.log(i);
