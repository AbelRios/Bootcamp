// PROMESSAS II

function sumaPositivosAsync(a, b) {
  let p = new Promise(function (resolve, reject) {
    if (a >= 0 && b >= 0) {
      resolve(a + b);
    } else {
      reject("Los numeros indicados no son positivos");
    }
  });
  return p;
}

sumaPositivosAsync(10, 20).then(ok).catch(error);

sumaPositivosAsync(-10, -20).then(ok).catch(error);

function error(err) {
  console.log("Error: ", err);
}

function ok(result) {
  console.log("Ok: ", result);
}

console.log("end");
