/**
 * Ejercicio:
Un artículo tiene un nombre, un proveedor y un precio. Y un proveedor tiene un nombre, email y telefono. 
Se pide definir una clase (Proveedor) para implementar el objeto proveedor y otra (Articulo) para el obejto artículo. 
Este objeto tiene los siguientes atributos o propiedades:

    proveedor: un objeto proveedor
    nombre: una cadena
    precio: un número

Y métodos:

    telefono(): devuelve un objeto con el nombre y elefono del proveedor

Por su parte el objeto proveedor tiene como propiedades

    nombre: cadena de texto
    email: un email
    teléfono: una cadena de dígitos 
Ejemplo
Por ejemplo podríamos tener un artículo monitor que vale 200€ y el proveedor es TecnoShop, 
con email: tcn@tecno.com y telefono 1234567.

Si hacemos articulo.telefono() nos dará  nombre y teléfono del proveedor: Teléfono de TenoShop es 1234567
 */

function Articulo(proveedor, nombre, precio) {
  this.nombre = nombre;
  this.proveedor = proveedor;
  this.precio = precio;
  this.average = 0;
}

function Proveedor(nombre, email, telefono) {
  this.nombre = nombre;
  this.email = email;
  this.telefono = telefono;

  this.telefono = function () {
    console.log(`El telefono de ${nombre} es ${telefono}`);
  };
}

let Proveedor1 = new Proveedor("NineTech", "tech@mail.com", "933213456");
let Articulo1 = new Articulo(Proveedor1, "Movil", 999.99);

let Proveedor2 = new Proveedor("FiveTech", "five@mail.com", "9332453456");
let Articulo2 = new Articulo(Proveedor2, "Laptop", 987.99);

let Proveedor3 = new Proveedor("TenTech", "ten@mail.com", "933267856");
let Articulo3 = new Articulo(Proveedor3, "Mouse Pad", 13.99);

let Proveedor4 = new Proveedor("ThreeTech", "threeh@mail.com", "943213456");
let Articulo4 = new Articulo(Proveedor4, "Keyboard", 34.99);

let Proveedor5 = new Proveedor("TwoTech", "two@mail.com", "935432456");
let Articulo5 = new Articulo(Proveedor5, "Ipad", 339.99);

let arrayProveedor = [
  Proveedor1,
  Proveedor2,
  Proveedor3,
  Proveedor4,
  Proveedor5,
];

let arrayArticulos = [Articulo1, Articulo2, Articulo3, Articulo4, Articulo5];

let sum = 0;
let artMasLargo = "";

for (let i = 0; i < arrayProveedor.length; i++) {
  //sacar el nombre y numero del proveedor
  arrayProveedor[i].telefono();

  //sacar el average de todo los precios
  sum = sum + arrayArticulos[i].precio;

  //sacar el articulo con el nombre mas largo
  if (arrayArticulos[i].nombre.length > artMasLargo.length) {
    artMasLargo = arrayArticulos[i].nombre;
  }
}
console.log(
  `El average de todo lo precios es: ${sum / arrayArticulos.length} €`
);
console.log(`El articulo con el nombre mas largo es: ${artMasLargo}`);
