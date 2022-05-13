const express = require("express");
const app = express();
app.use(express.json());

//  Ejercicio 1

class Nota {
    constructor(id, autor, texto, receptor){
    this.id=id,
    this.autor=autor,
    this.texto=texto,
    this.receptor=receptor
    }
};

let miArray = [];

let nota1 = new Nota(1,"Paco", "texto1", "Jaime");
miArray.push(nota1);
let nota2 = new Nota(2, "Marta", "texto2", "Rocio");
miArray.push(nota2);
let nota3 = new Nota(3, "Lucia", "texto3", "Pedro");
miArray.push(nota3);

//  Endpoint de base "Hello World"
app.get("/", (request, response) => {
    response.json("hello world")
});

//  Endpoint para coger una nota (QueryString)
app.get("/notaquery", (request, response) => {

    let id = request.query.id;
    let aux = miArray.find((item) => item.id == id);
    //Aquí arriba usamos sólo dos iguales (==) porque lo que nos llega por el querystring es un string, no un número
    //por lo que no podemos usar el triple igual para comparar

    response.send(aux);

});

//  Endpoint para coger una nota (Params)
app.get("/notaparams/:id", (request, response) => {

    let id = request.params.id;
    let aux = miArray.find((item) => item.id == id);

    response.send(aux);

});

//  Endpoint para crear una nota (Postman)
app.post("/crearnota", (request, response) => {

    let aux = request.body;

    miArray.push(aux);

    response.json(miArray);

});

//  Endpoint para borrar una nota (QueryString usando Postman en lugar del navegador)
app.delete("/borrarnotaquery", (request, response) => {

    let id = request.query.id;

    //Aquí creamos en respuesta un nuevo array que NO incluye la nota con la id que queremos "borrar"
    let respuesta = miArray.filter(item => item.id != id);

    response.json(respuesta);
});

//  Endpoint para borrar una nota (Params, usando Postman en lugar del navegador)
app.delete("/borrarnotaparams/:id", (request, response) => {

    let id = request.params.id;
    let respuesta = miArray.filter(item => item.id!= id);

    response.json(respuesta)
});

// Endpoint para intercambiar el texto de dos notas:
app.put("/intercambiartexto/:id_a/:id_b", (request, response) => {

    let aux1 = miArray.find(item => item.id == request.params.id_a);
    let aux2 = miArray.find(item => item.id == request.params.id_b);
    let texto = aux1.texto;
    aux1.texto = aux2.texto;
    aux2.texto = texto;


    response.json(miArray);

});

//Ejercicio 2

const alumnos =
    [{
        dni:"00984564Y",
        telefono:"654786907",
        nombre:"Adrian",
        apellido:"Molina",
        edad:21,
        sexo:"Masculino"
    },
    {
        dni:"9874521J",
        telefono:"645789214",
        nombre:"Javier",
        apellido:"Gutierrez",
        edad:23,
        sexo:"Masculino"
    },
    {
        dni:"85632149O",
        telefono:"632459871",
        nombre:"Miguel",
        apellido:"Torres",
        edad:23,
        sexo:"Masculino"
    },
    {
        dni:"68542175U",
        telefono:"654786907",
        nombre:"Omar",
        apellido:"Montes",
        edad:24,
        sexo:"Masculino"
    },
     {
        dni:"58478962L",
        telefono:"685632641",
        nombre:"Paula",
        apellido:"Garcia",
        edad:24,
        sexo:"Femenino"
    },
     {
        dni:"6897452U",
        telefono:"653214789",
        nombre:"Marta",
        apellido:"Gonzalez",
        edad:24,
        sexo:"Femenino"
    },
    {
        dni:"68741298H",
        telefono:"693654217",
        nombre:"Marta",
        apellido:"Gutierrez",
        edad:23,
        sexo:"Femenino"
    }]

// Sacar todos los alumnos que tienen 23 años
app.get("/seleccionarporedad/:edad", (request, response) => {

    let respuesta = alumnos.filter(item => item.edad == request.params.edad);

    response.json(respuesta);
});

// Sacar aquellas personas que tienen el sexo femenino y no tienen 23 años
app.get("/seleccionarporsexoynoedad/:sexo/:edad", (request, response) => {

    let respuesta = alumnos.filter(item => (item.sexo == request.params.sexo) && (item.edad!=request.params.edad));

    response.json(respuesta);
});


// Introducir un alumno nuevo, si su DNI ya existe, entonces debe de sacar un mensaje de error y no crear el alumno
app.post("/introduciralumno", (request, response) => {

    let respuesta;

    if (alumnos.find(item => item.dni == request.body.dni)){
        respuesta = "Error. DNI de alumno ya está en la lista";
    } else {
        alumnos.push(request.body);
        respuesta = alumnos;
    }
    response.json(respuesta);
});


// Introducir un nuevo alumno, si ese alumno ya existe en la lista (DNI ya existe), 
//entonces actualizar sus datos, si no, crearlo de nuevo.
app.put("/introduciractualizaralumno", (request, response) => {

    let aux = alumnos.findIndex(item => item.dni == request.body.dni);

    if (aux != -1){ // findIndex devuelve -1 si no lo encuentra
        alumnos[aux] = request.body;
    } else {
        alumnos.push(request.body);
    }
    response.json(alumnos);
});

// OJO, cosita que he visto con Adri
// app.put("/introduciractualizaralumno", (request, response) => {

//     let aux = alumnos.find(item => item.dni == request.body.dni);

//     if (aux){
//         aux = request.body; //Así NO FUNCIONA porque aux es un puntero, y le estamos diciendo que apunte para otro lado
//         console.log(aux);
//     } else {
//         alumnos.push(request.body);
//     }
//     response.json(alumnos);
// }); 

// Eliminar los alumnos que tengan menos 23 años (23 incluido)

app.delete("/eliminaralumnos/:edad", (request, response) => {

    let respuesta = alumnos.filter(item => item.edad > request.params.edad);

    response.json(respuesta);
});

// Eliminar aquellos alumnos cuyo nombre empiece por M
app.delete("/eliminarnombre/:letra", (request, response) => {

    let respuesta = alumnos.filter(item => item.nombre[0] != request.params.letra);

    response.json(respuesta);
});

// Esqueleto de un endpoint:
// app.get("/", (request, response) => {
//     response.json()
// });



const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});