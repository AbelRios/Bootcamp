let baraja = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
];

let alfabeto = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function Shuffle(array) {
  for (let i = 0; i < array.length; i++) {
    let j = Math.floor(Math.random() * array.length);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

console.log(Shuffle(baraja));

function encriptar(pass) {
  let passwordEncriptada = "";
  let position = 0;
  let valor = 0;
  for (let i = 0; i < password.length; i++) {
    for (let j = 0; j < alfabeto.length; j++) {
      if (pass[i] === alfabeto[j]) {
        position = j;
        //console.log(position);
      }
    }
    valor = baraja[position];
    passwordEncriptada += alfabeto[valor];
  }
  return passwordEncriptada;
}

let password = "holacompadre";

console.log(encriptar(password));
