const express = require("express");
const path = require("path");
const { resourceLimits } = require("worker_threads");
const app = express();

const { MongoClient } = require('mongodb');

const client = new MongoClient("mongodb://localhost:27017");

app.get("/test", function (request, response) {
    response.send("Hola, aqui estoy");
});

app.get("/usuarios", function (request, response) { //esto es un "endpoint" de la API que estamos creando
    let usuarios = [{
        nombre: "Abel",
        apellidos: "Rios",
        email: "abel@email.com"
    }, {
        nombre: "otro",
        apellidos: "apellidos",
        email: "otro@otro.com"
    }];

    response.send(usuarios);
})

app.get("/usuariosYTipoPago", async function (request, response) {
    await client.connect();
    await client.db("ecommerce").command({ ping: 1 });

    console.log("Conectado a Ecommerce");

    const ventas = client.db("ecommerce").collection("ventas").find().project({
        _id: 0,
        "usuario.nombre": true,
        "usuario.tipoPago": true
    });

    let results = [];

    await ventas.forEach((v) => results.push(v));

    await client.close();

    console.log("Desconectado de MongoDB!");

    response.send(results);

})

app.get("/productoYganancias", async function (request, response) {

    await client.connect();
    await client.db("ecommerce").command({ ping: 1 });

    const ventas = client.db("ecommerce").collection("ventas").find().project({
        _id: 0,
        "producto.nombre": true,
        "producto.tipo": true,
        "cantidad": true,
        "precio": true
    });

    let results = new Map();

    await ventas.forEach(function (v) {
        if (results.has(v.producto.nombre)) {
            let c = results.get(v.producto.nombre);

            c.ganancias += (v.cantidad * v.precio);

            results.set(v.producto.nombre, c);
        } else {
            let gan = (v.cantidad * v.precio);

            results.set(v.producto.nombre, { tipo: v.producto.tipo, ganancias: gan });
        }
    });

    await client.close();

    response.send(Array.from(results)); //Lo transformamos en array, porque el send no muestra por el navegador los map

})

app.get("/usuarioMasComprador", async function (request, response) {
    await client.connect();
    await client.db("ecommerce").command({ ping: 1 });

    console.log("Conectado a Ecommerce");
    const ventas = client.db("ecommerce").collection("ventas").find().project({
        _id: 0,
        "usuario.correo": true,
        "cantidad": true,
    });

    let results = new Map();

    await ventas.forEach(function (v) {
        if (results.has(v.usuario.correo)) {
            let c = results.get(v.usuario.correo);

            c.articulosComprados += v.cantidad;

            results.set(v.usuario.correo, c);
        } else {

            results.set(v.usuario.correo, { nombre: v.usuario.correo, articulosComprados: v.cantidad });
        }
    });

    response.send(Array.from(results.values()).sort((a, b) => b.articulosComprados - a.articulosComprados));

    await client.close();

    console.log("Desconectado de MongoDB!");
})

app.get("/UsuarioDeMasGasto", async function (request, response) {
    await client.connect();
    await client.db("ecommerce").command({ ping: 1 });

    console.log("Conectado a Ecommerce");
    const ventas = client.db("ecommerce").collection("ventas").find().project({
        _id: 0,
        "usuario.correo": true,
        "cantidad": true,
        "precio": true
    });

    let results = new Map();

    await ventas.forEach(function (v) {
        if (results.has(v.usuario.correo)) {
            let c = results.get(v.usuario.correo);

            c.gasto += (v.cantidad * v.precio);

            results.set(v.usuario.correo, c);
        } else {
            results.set(v.usuario.correo, { nombre: v.usuario.correo, gasto: (v.cantidad * v.precio), divisa: "€" });
        }
    });

    response.send(Array.from(results.values()).sort((a, b) => b.gasto - a.gasto));
    
    // Array.from(results.values()).sort((a, b) => b.gasto - a.gasto).forEach(function(i){
    //     response.send(i,"€");
    // })

    await client.close();

})

app.listen(8080);