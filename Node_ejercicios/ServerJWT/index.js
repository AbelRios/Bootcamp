const { response } = require('express');
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
app.use(express.json()); // esto lo añadimos para poder acceder a las propiedades del body (parsear)

// Ejemplo de creación de token

// const accessToken = jwt.sign({ username: user.username,  role: user.role }, 
//     accessTokenSecret, {expiresIn: '2h'});

// Crear un endpoint que sea un GET, se llame GenerateToken, le pasaremos como param un nombre. 

app.get('/generatetoken/:nombre', (request, response) =>{
    const accessToken = jwt.sign({ username: request.params.nombre}, "releevant", {expiresIn: '2h'});

    response.json(accessToken);
})

// Lo que va en las primeras llaves son los parametros que queremos que nuestro token tenga
// lo segundo será la palabra secreta para nuestro token

// ---------------------------------- //

// Ahora vamos a comprobar el token

app.get("/checktoken", (request, response) => {

    let result = "";

    const authorization = request.get("authorization");
    let token = "";

    if(authorization && authorization.toLowerCase().startsWith('bearer')){
        // 'bearer' es una convención que genera el navegador, pero que no forma parte del JWT
        token = authorization.substring(7)
    } else {
        token = authorization;
    }

    const decoded = jwt.verify(token, "releevant");
    // Aquí decodificamos el token, pasándole el token y la palabra secreta

    if(!token || !decoded.username){
        result = "token invalid";
        response.json(result)
    }else{
        result = decoded;
    }

    response.json(result)
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})