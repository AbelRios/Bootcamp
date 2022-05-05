// DESESTRUCTURACION

console.log("---------------------Desestructuracion 1-----------------------");

let a, b, rest;

[a, b] = [10, 20];

console.log(a);
console.log(b);

console.log(
  "---------------------Desestructuracion 1.1-----------------------"
);

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(a);
console.log(b);
console.log(rest);

console.log(
  "---------------------Desestructuracion 1.2-----------------------"
);

[filmOne, filmTwo, filmThree, ...rest] = [
  { title: "Will Smith" },
  { title: "John Cena" },
  { title: "Orlando Bloom" },
  { title: "Pato negro" },
  { title: "Crocodile" },
];

console.log(`La mejor peli es ${filmOne.title}`);
console.log(`En segunda posicion ${filmTwo.title}`);
console.log(`En tercera posicion ${filmThree.title}`);
console.log(`El resto son ${rest.length} peliculas`);

// Desestructuracion (II)
console.log(
  "---------------------Desestructuracion 2------------------------------"
);

// - hacer la prueba con :

[({ a, b } = { a: 10, b: 20 })];

console.log(a);
console.log(b);

console.log(
  "---------------------Desestructuracion 2.1-----------------------"
);

[({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 })];

console.log(a);
console.log(b);
console.log(rest);

// Desestructuracion (III)
console.log(
  "---------------------Desestructuracion 3------------------------------"
);

const foo = ["one", "two", "three"];
const [red, yellow, green] = foo;

console.log(red);
console.log(yellow);
console.log(green);

// Desestructuracion (V)
console.log("---------------------Desestructuracion 5-----------------------");

let c, d;

[c = 5, d = 7] = [1];

console.log(c); // 1
console.log(d); // 7

console.log(
  "---------------------Desestructuracion 5.1-----------------------"
);

[c = 5, d = 7] = [4, 6];

console.log(c); // 4
console.log(d); // 6

// Desestructuracion (VI)
console.log("---------------------Desestructuracion 6 -----------------------");

let e = 1;
let f = 3;

[e, f] = [f, e];

console.log(e);
console.log(f);

console.log(
  "---------------------Desestructuracion 6.1-----------------------"
);

const arr = [1, 2, 3];

[arr[2], arr[1]] = [arr[1], arr[2]];

console.log(arr);

// Desestructuracion (VII)
console.log("---------------------Desestructuracion 7-----------------------");

function i() {
  return [1, 2];
}

let g, h;

[g, h] = i();

console.log(g);
console.log(h);

// Desestructuracion (VIII)
console.log("---------------------Desestructuracion 8-----------------------");

const [aa, ...bb] = [1, 2, 3];

console.log(aa);
console.log(bb);
