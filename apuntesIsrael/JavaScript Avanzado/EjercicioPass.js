let baraja = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
];

let alfabeto = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// The Fisher-Yates algorith:

// It’s just a case of looping through the array (from the end to the start) and picking a
// random item from the array and swapping it with the item in the current iteration.

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

shuffleArray(baraja);
//console.log(baraja);

function encriptar(password) {
  let passwordEncriptada = "";
  for (let i = 0; i < password.length; i++) {
    let position = alfabeto.indexOf(password[i]);
    let valor = baraja[position];
    passwordEncriptada = passwordEncriptada.concat(alfabeto[valor]);
    //console.log(position, valor);
  }
  return passwordEncriptada;
}

console.log(encriptar("CATANZARO"));
