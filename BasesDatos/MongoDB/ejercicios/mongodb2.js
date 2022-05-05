const { MongoClient } = require('mongodb');

const client = new MongoClient("mongodb://localhost:27017");

async function obtenerUsuarios() {
    await client.connect();
    await client.db("ecommerce").command({ ping: 1 });

    console.log("Conectado a MongoDB!");

    const usuarios = client.db("ecommerce").collection("usuarios").find();

    await usuarios.forEach((u) => console.log(u));//El 'await' hace que el programa se espere aquí hasta que termine el proceso
    await client.close();                        //si no lo pusieramos, nos da error porque pasa directo a la siguiente linea

    console.log("Desconectado de MongoDB!");
}

async function ventasUsuarioYPago() {
    await client.connect();
    await client.db("ecommerce").command({ ping: 1 });

    console.log("Conectado a Ecommerce");

    const ventas = client.db("ecommerce").collection("ventas").find();

    await ventas.forEach((i) => console.log(i.usuario.nombre, i.usuario.tipoPago));

    await client.close();

    console.log("Desconectado de MongoDB!");
}

async function ventasUsuarioYPagoFind() {
    await client.connect();
    await client.db("ecommerce").command({ ping: 1 });

    console.log("Conectado a Ecommerce");

    const ventas = client.db("ecommerce").collection("ventas").find().project({
        _id: 0,
        "usuario.nombre": true,
        "usuario.tipoPago": true
    });

    await ventas.forEach((i) => console.log(i));

    await client.close();

    console.log("Desconectado de MongoDB!");
}

async function productosNombreYCantidad() {
    await client.connect();
    await client.db("ecommerce").command({ ping: 1 });

    console.log("Conectado a Ecommerce");
    const ventas = client.db("ecommerce").collection("ventas").find().project({
        _id: 0,
        "producto.nombre": true,
        "cantidad": true
    });

    await ventas.forEach((i) => console.log(i));

    await client.close();

    console.log("Desconectado de MongoDB!");
}

async function productosNombreYCantidadAgrupados() {
    await client.connect();
    await client.db("ecommerce").command({ ping: 1 });

    console.log("Conectado a Ecommerce");
    const ventas = client.db("ecommerce").collection("ventas").find().project({
        _id: 0,
        "producto.nombre": true,
        "cantidad": true
    });

    let results = [];

    await ventas.forEach(function (v) {
        let found = false;

        for (let i = 0; i < results.length; i++) {
            if (results[i].producto.nombre === v.producto.nombre) {
                results[i].cantidad += v.cantidad;

                found = true;

                break;
            }
        }

        if (!found) {
            results.push(v);
        }

    });

    console.log(results);

    await client.close();

    console.log("Desconectado de MongoDB!");
}

async function productosNombreYRating() {
    await client.connect();
    await client.db("ecommerce").command({ ping: 1 });

    console.log("Conectado a Ecommerce");
    const result = client.db("ecommerce").collection("productos").find().project({
        _id: 0,
        "nombre": true,
        "rating": true
    });

    await result.forEach((i) => console.log(i));

    await client.close();

    console.log("Desconectado de MongoDB!");
}

async function productoMasVendidoYCompradoresArray() {
    await client.connect();
    await client.db("ecommerce").command({ ping: 1 });

    console.log("Conectado a Ecommerce");
    const ventas = client.db("ecommerce").collection("ventas").find().project({
        _id: 0,
        "producto.nombre": true,
        "cantidad": true,
        "usuario":true
    });

    let results = [];

    await ventas.forEach(function (v) {
        let found = false;

        for (let i = 0; i < results.length; i++) {
            if (results[i].producto.nombre === v.producto.nombre) {
                results[i].cantidad += v.cantidad;
                results[i].compradores.push(v.usuario.correo);

                found = true;
                break;
            }
        }

        if (!found) {
            let aux={
                producto:{
                    nombre: v.producto.nombre
                },
                cantidad: v.cantidad,
                compradores: [v.usuario.correo]
            }
            results.push(aux);
        }
    });

    console.log(results);

    await client.close();

    console.log("Desconectado de MongoDB!");
}


productoMasVendidoYCompradores();
//productosNombreYRating();
// ventasUsuarioYPago();
// ventasUsuarioYPagoFind();
//productosNombreYCantidad();
//productosNombreYCantidadAgrupados();
// obtenerUsuarios();

