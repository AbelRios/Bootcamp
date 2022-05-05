const { MongoClient } = require('mongodb');

const client = new MongoClient("mongodb://localhost:27017");

async function obtenerUsuarios(){
    await client.connect();
    await client.db("ecommerce").command({ping:1});

    console.log("Conectado a MongoDB!");

    const usuarios = client.db("ecommerce").collection("usuarios").find();

    await usuarios.forEach((u)=> console.log(u));//El 'await' hace que el programa se espere aquí hasta que termine el proceso
    await client.close();                        //si no lo pusieramos, nos da error porque pasa directo a la siguiente linea

    console.log("Desconectado de MongoDB!");
}

async function ventasUsuarioYPago(){
    await client.connect();
    await client.db("ecommerce").command({ping:1});

    console.log("Conectado a Ecommerce");

    const ventas = client.db("ecommerce").collection("ventas").find();
    
    await ventas.forEach((i)=> console.log(i.usuario.nombre,i.usuario.tipoPago));

    await client.close();

    console.log("Desconectado de MongoDB!");
}

async function ventasUsuarioYPagoFind(){ 
    await client.connect();
    await client.db("ecommerce").command({ping:1});

    console.log("Conectado a Ecommerce");

    const ventas = client.db("ecommerce").collection("ventas").find().project({
        _id:0,
        "usuario.nombre":true,
        "usuario.tipoPago":true});
    
    await ventas.forEach((i)=> console.log(i));

    await client.close();

    console.log("Desconectado de MongoDB!");
}

async function productosNombreYCantidad(){
    await client.connect();
    await client.db("ecommerce").command({ping:1});

    console.log("Conectado a Ecommerce");
    const ventas = client.db("ecommerce").collection("ventas").find().project({
        _id:0,
        "producto.nombre":true,
        "cantidad":true
    });
    
    await ventas.forEach((i)=> console.log(i));

    await client.close();

    console.log("Desconectado de MongoDB!");
}

async function productosNombreYCantidadAgrupados(){
    await client.connect();
    await client.db("ecommerce").command({ping:1});

    console.log("Conectado a Ecommerce");
    const ventas = client.db("ecommerce").collection("ventas").find().project({
        _id:0,
        "producto.nombre":true,
        "cantidad":true
    });

    let results=[];

    await ventas.forEach(function(v){
        let found = false;

        for (let i = 0; i < results.length; i++){
            if (results[i].producto.nombre === v.producto.nombre){
                results[i].cantidad += v.cantidad;

                found = true;

                break;
            }
        }

        if(!found){
            results.push(v);
        }
    
    });

    console.log(results);

    await client.close();

    console.log("Desconectado de MongoDB!");
}

async function productosNombreYRating(){
    await client.connect();
    await client.db("ecommerce").command({ping:1});

    console.log("Conectado a Ecommerce");
    const result = client.db("ecommerce").collection("productos").find().project({
        _id:0,
        "nombre":true,
        "rating":true
    });
    
    await result.forEach((i)=> console.log(i));

    await client.close();

    console.log("Desconectado de MongoDB!");
}

async function productoMasVendidoYCompradoresMap(){ //Forma del Map de Israel
    await client.connect();
    await client.db("ecommerce").command({ping:1});

    console.log("Conectado a Ecommerce");
    const ventas = client.db("ecommerce").collection("ventas").find().project({
        _id:0,
        "producto.nombre":true,
        "cantidad":true,
        "usuario": true
    });

    let results= new Map();

    await ventas.forEach(function(v) {
        if (results.has(v.producto.nombre)) {
            let c = results.get(v.producto.nombre);
            
            c.cantidad += v.cantidad;
            c.usuarios.push(v.usuario);

            results.set(v.producto.nombre, c); 
        } else {
            let u = v.usuario ? [v.usuario] : [];

            // Operador ternario, que es lo mismo que:

            // if (v.usuario){
            //     u = [v.usuario]
            // } else {
            //     u = []
            // }
            
            results.set(v.producto.nombre, { cantidad: v.cantidad, usuarios: u });
        }
    });

    console.log(results);
    
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
            if (results[i].nombre === v.producto.nombre) {
                results[i].cantidad += v.cantidad;
                results[i].compradores.push(v.usuario.correo);

                found = true;
                break;
            }
        }

        if (!found) {
            let aux={
                nombre: v.producto.nombre,
                cantidad: v.cantidad,
                compradores: [v.usuario.correo]
            }
            results.push(aux);
        }
    });

    console.log(results.sort((a,b)=> b.cantidad-a.cantidad)); //Lo ordenamos de menor a mayor

    await client.close();

    console.log("Desconectado de MongoDB!");
}

async function productoYganancias(){ //Forma de Map
    await client.connect();
    await client.db("ecommerce").command({ping:1});

    console.log("Conectado a Ecommerce");
    const ventas = client.db("ecommerce").collection("ventas").find().project({
        _id:0,
        "producto.nombre":true,
        "producto.tipo":true,
        "cantidad":true,
        "precio":true
    });

    let results= new Map();

    await ventas.forEach(function(v) {
        if (results.has(v.producto.nombre)) {
            let c = results.get(v.producto.nombre);
            
            c.ganancias += (v.cantidad*v.precio);

            results.set(v.producto.nombre, c); 
        } else {
            let gan = v.cantidad ? (v.cantidad*v.precio) : 0;

            
            results.set(v.producto.nombre, { tipo: v.producto.tipo, ganancias: gan });
        }
    });

    console.log(results);
    
    await client.close();

    console.log("Desconectado de MongoDB!");
}

async function usuarioMasComprador(){
    await client.connect();
    await client.db("ecommerce").command({ping:1});

    console.log("Conectado a Ecommerce");
    const ventas = client.db("ecommerce").collection("ventas").find().project({
        _id:0,
        "usuario.correo":true,
        "cantidad":true,
    });

    let results= new Map();

    await ventas.forEach(function(v) {
        if (results.has(v.usuario.correo)) {
            let c = results.get(v.usuario.correo);
            
            c.articulosComprados += v.cantidad;

            results.set(v.usuario.correo, c); 
        } else {
            
            results.set(v.usuario.correo, { nombre:v.usuario.correo, articulosComprados: v.cantidad });
        }
    });

    console.log(Array.from(results.values()).sort((a,b)=>b.articulosComprados-a.articulosComprados));
    
    await client.close();

    console.log("Desconectado de MongoDB!");
}

async function usuarioMasGasto(){
    await client.connect();
    await client.db("ecommerce").command({ping:1});

    console.log("Conectado a Ecommerce");
    const ventas = client.db("ecommerce").collection("ventas").find().project({
        _id:0,
        "usuario.correo":true,
        "cantidad":true,
        "precio":true
    });

    let results= new Map();

    await ventas.forEach(function(v) {
        if (results.has(v.usuario.correo)) {
            let c = results.get(v.usuario.correo);
            
            c.gasto += (v.cantidad*v.precio);

            results.set(v.usuario.correo, c); 
        } else {
            
            results.set(v.usuario.correo, { nombre:v.usuario.correo, gasto: (v.cantidad*v.precio)});
        }
    });

    console.log(Array.from(results.values()).sort((a,b)=>b.gasto-a.gasto));
    
    await client.close();

    console.log("Desconectado de MongoDB!");
}


usuarioMasGasto();
//usuarioMasComprador();
//productoYganancias();
//productoMasVendidoYCompradoresMap();
//productoMasVendidoYCompradoresArray();
//productosNombreYRating();
// ventasUsuarioYPago();
// ventasUsuarioYPagoFind();
//productosNombreYCantidad();
//productosNombreYCantidadAgrupados();
// obtenerUsuarios();

