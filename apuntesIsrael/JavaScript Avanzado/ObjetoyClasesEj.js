function producto_alimenticio(codigo, nombre, precio) {
  this.codigo = codigo;
  this.nombre = nombre;
  this.precio = precio;

  this.imprimeDatos = function () {
    console.log(`Codigo : ${codigo} / Nombre: ${nombre} / Precio: ${precio} €`);
  };
}

let primerProducto = new producto_alimenticio(222, "Lechuga", 1.99);
let segundoProducto = new producto_alimenticio(333, "Orange", 3.5);
let tercerProducto = new producto_alimenticio(444, "Patata", 2.1);

/* primerProducto.imprimeDatos();
segundoProducto.imprimeDatos();
tercerProducto.imprimeDatos(); */

let inventario = [primerProducto, segundoProducto, tercerProducto];

for (let i = 0; i < inventario.length; i++) {
  inventario[i].imprimeDatos();
}
