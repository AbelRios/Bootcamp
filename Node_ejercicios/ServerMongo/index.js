const express = require("express");
const { ObjectID } = require("mongodb");
const app = express();
app.use(express.json());

let db = null;
let MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost:27017/", (err, client) => {
    if (err) throw err;
    db = client
    const PORT = 3001;
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
});


// Haciendo un GET de menores de la edad que nos llegue por params

app.get("/menoresde/edad/:edad", async function (request, response){

    let database = db.db("basedeprueba");
    
    await database.collection("personas").find({ edad: { $lt: Number(request.params.edad) } }) 
    // Hacemos el Number() porque lo que nos llega por params es un string
    .toArray((err, results) => {
      if (err) throw err;
      response.json(results);
    });

}); // FUNCIONA


// Haciendo un GET del nombre que nos llegue por params

app.get("/menoresde/nombre/:nombre", async function (request, response){

    let database = db.db("basedeprueba");
    
    await database.collection("personas").find({ nombre: { $eq: request.params.nombre } }) 
    // Hacemos el Number() porque lo que nos llega por params es un string
    .toArray((err, results) => {
      if (err) throw err;
      response.json(results);
    });

}); // FUNCIONA


// Haciendo un POST de una persona 

app.post("/nuevapersona", async function (request, response){

    let database = db.db("basedeprueba");
    
    await database.collection("personas").insertOne(request.body);
    
    response.json("Dato insertado en la Base de Datos");
});

// Haciendo un PUT que modifique una persona existente (usando body+params)

app.put("/modificarnombrepersona/id/:id", async function (request, response){

    let database = db.db("basedeprueba");
    
    await database.collection("personas").updateOne(
        {_id:ObjectID(request.params.id)},
        {$set: {nombre: request.body.nombre}}
    );
    
    response.json("Dato modificado en la Base de Datos");

});

// Haciendo un PUT que modifique una persona existente (usando solo body)

app.put("/modificarnamepersona", async function (request, response){

    let database = db.db("basedeprueba");
    
    await database.collection("personas").updateOne(
        {_id: ObjectID(request.body.id)},
        {$set: {nombre: request.body.nombre}}
    );
    
    response.json("Dato modificado en la Base de Datos");

});


// Haciendo el Delete

app.delete("/eliminarpersona", async function (request, response){

    let database = db.db("basedeprueba");
    
    await database.collection("personas").deleteOne(
        {_id: ObjectID(request.body.id)}
        );
    
    response.json("Dato eliminado de la Base de Datos");

});

//  Collection: alumnos

//  1 - Sacar todos los alumnos que tienen 23 años

app.get("/edad/:edad", async function (request, response){

    let database = db.db("basedeprueba");
    
    await database.collection("alumnos").find({ edad: { $eq: Number(request.params.edad) } }) 
    // Hacemos el Number() porque lo que nos llega por params es un string
    .toArray((err, results) => {
      if (err) throw err;
      response.json(results);
    });

}); 

//  2 - Sacar aquellas personas que tienen el sexo femenino y no tienen 23 años

app.get("/sexoyedad/:sexo/:edad", async function (request, response){

    let database = db.db("basedeprueba");
    
    await database.collection("alumnos").find({ 
        edad: { $ne: Number(request.params.edad) },
        sexo: { $eq: request.params.sexo }
    }) 
    // Hacemos el Number() porque lo que nos llega por params es un string
    .toArray((err, results) => {
      if (err) throw err;
      response.json(results);
    });

}); 

// 3 - Introducir un alumno nuevo, si su DNI ya existe, entonces debe de sacar un mensaje de error 
// y no crear el alumno

app.post("/introduciralumno", async function (request, response){

    let result;

    let database = db.db("basedeprueba");
    
    let existe = await database.collection("alumnos").findOne({ 
        dni: { $eq: request.body.dni },
    });

    if(!existe){
        await database.collection("alumnos").insertOne(request.body);
        result="Dato insertado en la Base de Datos";
    } else {
        result="No se ha podido insertar."
    }
    response.json(result);
}); 







// Esqueleto del endpoint con una query de MongoDB dentro

// app.get("/", async function (request, response){

//     let database = db.db("basedeprueba");
    
//     await database.collection("personas").find().toArray((err, results) => {
//       if (err) throw err;
//       response.json(results);
//     });
// });