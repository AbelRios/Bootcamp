// SYMBOLS

// - Es un tipo de dato primitivo como Boolean, String o Number
// - No se puede tener dos symbols iguales
// - Nos sirven para asegurar que no hay ambiguedades

let producto = {
  nombre: "Pepe",
  apellidos: "Contreras Carretero",
  direccion: "C/ Malaga 12, 4D",
};

producto.id = Symbol("id"); // valor unico

console.log(Symbol("id") == Symbol("id")); // es siempre false

console.log(producto);
