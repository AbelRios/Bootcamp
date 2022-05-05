// PROMESAS

// - Nos da control sobre operaciones asincronas
// - Llamadas a API suelen ser asincronas
// - Tratamiento de arrays o listas largas mejor asincronas

function promesa(ok) {
  let p = new Promise(function (resolve, reject) {
    // hacer un trabajo largo
    if (ok) {
      resolve("Trabajo completado.");
    } else {
      reject("ERROR, no se pudo realizar la tarea.");
    }
  });

  return p;
}

promesa(true)
  .then(function (texto) {
    console.log(texto);
  })
  .catch(function (texto) {
    console.log(texto);
  });

promesa(false)
  .then(function (texto) {
    console.log(texto);
  })
  .catch(function (texto) {
    console.log(texto);
  });
