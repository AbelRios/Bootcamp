let productos = [];

let producto1 = {
    stock : 10,
    nombre : "patatas",
    descripcion : "bolsa de patatas fritas",
    categorias : ["alimentacion", "snack"],
    precio : 5.50
}

let producto2 = {
    stock : 15,
    nombre : "RedBull",
    descripcion : "bebida energetica",
    categorias : ["bebidas","refresco"],
    precio : 1.50
}
 
let producto3 = {
    stock : 30,
    nombre : "Boomer",
    descripcion : "chicles",
    categoria : ["alimentacion", "dulces"],
    precio : 0.05
}

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);

let ventas = [];

let venta1 = {
    precio : 15,
    codigo : "V001",
    cantidad : 4,
    fechaCompra : "12-03-20",
    usuario : {
        tipo: "cliente",
        nombre: "Jaime Rojas",
        codigoCliente : "001",
    }
}

let venta2 = {
    precio : 20,
    codigo : "V002",
    cantidad : 2,
    fechaCompra : "15-03-20",
    usuario : {
        tipo: "cliente",
        nombre: "Alicia Gomez",
        codigoCliente : "002",
    }
}

ventas.push(venta1);
ventas.push(venta2);

console.log(venta1.cantidad, venta1.usuario.nombre);

let usuarios = [];

let usuario1 = {
    tipo : "cliente",
    codigo : "001",
    nombre : "Jaime Rojas"
}

let usuario2 = {
    tipo : "cliente",
    codigo : "002",
    nombre : "Alicia Gomez"
}

usuarios.push(usuario1);
usuarios.push(usuario2);

let categorias = ["alimentacion", "bebidas", "otros"];

let carritos = [];

let carrito1 = {
    producto
}