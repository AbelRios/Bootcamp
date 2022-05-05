let arrayNum = [];
let total = 10000;
for (let i = 0; i < total; i++) {
  arrayNum.push(Math.floor(Math.random() * 1000));
}
function sumaPositivosAsync(...b) {
  let p = new Promise(function (resolve, reject) {
    let sum = 0;
    for (let i = 0; i < b.length; i++) {
      if (b[i] >= 0) {
        sum += b[i];
      } else {
        reject("Los numeros indicados no son positivos");
      }
    }
    resolve(sum);
  });
  return p;
}

// Crear array de 10000 numeros con random
// Modificar sumaPositivosAsync para que acepte array
// Modificar sumaPositivosAsync para que compruebe los 10000 numeros (for)

sumaPositivosAsync(...arrayNum)
  .then(ok)
  .catch(error);

let numeroPosYNeg = [];

for (let i = 0; i < total; i++) {
  let r = Math.random();
  if (r > 0.5) {
    numeroPosYNeg.push(Math.floor(Math.random() * 10000));
  } else {
    numeroPosYNeg.push(Math.floor(Math.random() * -10000));
  }
}
console.log(numeroPosYNeg);

sumaPositivosAsync(...numeroPosYNeg)
  .then(ok)
  .catch(error);

function error(err) {
  console.log("Error: ", err);
}

function ok(result) {
  console.log("Ok: ", result);
}
