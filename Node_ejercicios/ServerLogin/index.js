const { response } = require('express');
const express = require('express');
const { ObjectId } = require("mongodb");
const md5 = require("nodejs-md5");
const jwt = require('jsonwebtoken');
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

// 1. endpoint registrar para registrar un usuario con email y password
// la password debe encriptarse con MD5
// Si email no valido, status code 400
// Si todo correcto, status code 200
// MD5 - nodejs-md5 (npm install nodejs-md5)
// Node JS - Status Code response.status(200).send()

// 2. endpoint login que acepte email y password, encriptar la password con md5
// y comprobar email y password encriptada es la misma del registro
// Si email no existe, status code 404
// Si email o password son diferentes, status code 401

// 3. Generar un token que contenga el id del usuario, email y tiempo de expiracion
// El token expira a los 60 segundos
// Formato del token idUsuario:email:expiracion
// El token se devuelve al hacer login resultado 200

// 4. Crear endpoint /me que comprueba si el token no ha expirado y devuelve los 
// datos del usuario de la base de datos excepto la password
// si el token ha expirado, status code 401


function validarEmail(email){

    let result = false;

    if(email.includes('@') && email.indexOf('@')>0 && email.indexOf('.', email.indexOf('@'))){
        result = true;
    } 

    return result;
}

app.post("/nuevousuario", async function (request, response){

    let database = db.db("basedeprueba");

    md5.string.quiet(request.body.password, function(err, md5){
        if (err) {
            console.log(err);
        }
        else {
            request.body.password = md5; 
        }
    })

    if (validarEmail(request.body.email)){
        await database.collection("usuarios").insertOne(request.body);
        response.status(200).send("Email OK");
    } else {
        response.status(400).send("Email no valido");
    }
});

app.post("/testlogin", async function (request, response){

    let database = db.db("basedeprueba");

    md5.string.quiet(request.body.password, async function(err, md5){
        if (err) {
            console.log(err);
        }
        else {
            request.body.password = md5; 
            await database.collection("usuarios").findOne({ email: { $eq: request.body.email } }, function(err,result){
                if(!result){
                    response.status(404).send("Usuario no existe");
                } else {
                    if(request.body.password === result.password){
                        response.status(200).send("Usuario verificado");
                    } else {
                        response.status(401).send("Password no valida.")
                    }
                }
            }) 
        }
    })
});

app.post("/logintoken", async function (request, response){

    let database = db.db("basedeprueba");

    md5.string.quiet(request.body.password, async function(err, md5){
        if (err) {
            console.log(err);
        }
        else {
            request.body.password = md5; 
            await database.collection("usuarios").findOne({ email: { $eq: request.body.email } }, function(err,result){
                if(!result){
                    response.status(404).send("Usuario no existe");
                } else {
                    if(request.body.password === result.password){
                        const accessToken = jwt.sign({ idObject: result._id, email:result.email}, "releevant", {expiresIn: 60});
                        response.status(200).send(accessToken);
                    } else {
                        response.status(401).send("Password no valida.")
                    }
                }
            }) 
        }
    })
});

app.get("/me", (request, response) => {

    const token = request.get("authorization");

    jwt.verify(token, "releevant", function(err,decoded){
        if(err){
            response.status(401).send("Token expirado");
        } else {
            response.json(decoded.idObject, decoded.email);
        }
    });
})

