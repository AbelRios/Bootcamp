const { response } = require('express')
const express = require('express')
const app = express()

app.use(express.json())

let persona = {
    name: "Abel",
    surname: "Rios"
}

let comunidadAnillo = {
    portador: "Frodo Bolsón",
    aliado1: "Sam Sagaz",
    espadachin: "Aragorn hijo de Arazorn",
    hacha: "Gimli el Enano de la ostia",
    arquero: "Légolas el que donde pone el ojo pone la flecha"
}

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(persona)
})

app.get('/iyokabesa', (request, response) => {
    response.send('Uno que va que dise papaaarl papaaaarl llévame al sirco!')
})

app.get('/comunity', (request, response) => {
    response.send(comunidadAnillo)
})

app.get('/id', (request, response) => {

    let id = request.query.id;
    let aux = request.query.aux;

    console.log(id, aux);

    const respuesta = {
        nombre: id,
        apellido: aux
    }

    console.log(request.query);

    response.send(request.query);
    // response.send(respuesta);
})

app.get('/api/ejemplo/:numero', (request, response) => {

    console.log(request.params.numero);

    response.send(request.params.numero);
})

app.get('/api/ejeParams/:nombre/:apellido', (request, response) => {

    console.log(request.params);

    response.send(request.params);
})

app.post('/newNote', (request, response) => {
    console.log(request.body);
    response.json(request.body);
})

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
let nota4 = new Nota(4, "Adri", "texto4", "Ramón");
miArray.push(nota4);
let nota5 = new Nota(5, "Miguel", "texto5", "Sara");
miArray.push(nota5);

app.get('/nota/:idnota', (request, response) => {

    let aux = request.params.idnota;

    let respuesta = miArray.find(item => item.id==aux);
    // usamos == en lugar de === porque lo que nos llega del params es un string, no un número

    console.log(respuesta);
    
    response.send(respuesta);
})

// app.put('/ejercicio2', (request, response) => {
    
//     let aux = request.body;
//     let indice = miArray.findIndex(item => item.id === aux.id)

//     miArray[indice].texto=aux.texto;

//     response.send(miArray);

//     console.log(request.body);
// })

app.put('/ejercicio2', (request, response) => {
    
    let aux = request.body;
    let nota = miArray.find(item => item.id === aux.id)

    nota.texto=aux.texto;

    response.send(miArray);

    console.log(request.body);
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})