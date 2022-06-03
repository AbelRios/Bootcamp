const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const mysql = require("mysql");

// crear conexion a la base de datos
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "notas",
});

function conectar() {
    // conectarse a la base de datos
    connection.connect(function (err) {
        if (err) {
            return console.error("error: " + err.message);
        }
        console.log("Conectado!");
        const PORT = 3001; //esto es el puerto del Express
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    });
}

conectar()

function desconectar() {
    // Cerrar conexion
    connection.end(function (err) {
        if (err) {
            return console.error("error: " + err.message);
        }
        console.log("Desconectado!");
    });
}

conectar();
// Haciendo un GET de la BBDD Notas, tabla Cartas

app.get("/cartasidpersona/:id", (request, response) => {
    
    connection.query(
        `SELECT * FROM cartas WHERE idPersona = ${request.params.id}`,
        (err, rows, fields) => {
            if (err) throw err;
            response.json(rows);
        }
    );
});

// Haciendo un POST

app.post("/nuevacarta", (request, response) => {
    console.log(request.body);
    connection.query(
        `INSERT INTO cartas(texto,idPersona) VALUES ('${request.body.texto}','${request.body.idPersona}')`,
        (err, rows, fields) => {
            if (err) throw err;
            response.json(rows);
        }
    );
});

// Haciendo un PUT (modificando el valor texto de una carta)

app.put("/modificarcarta/:id", (request, response) => {
    conectar();
    connection.query(
        `UPDATE cartas SET texto = '${request.body.text}' WHERE id = ${request.params.id}`,
        (err, rows, fields) => {
            if (err) throw err;
            response.json("Modificado");
        }
    );
    desconectar();
});

// Haciendo el DELETE para eliminar una carta

app.delete("/borrarcarta/:id", (request, response) => {
    conectar();
    connection.query(
        `DELETE FROM cartas WHERE id = ${request.params.id}`,
        (err, rows, fields) => {
            if (err) throw err;
            response.json(rows);
        }
    );
    desconectar();
});

//  AHORA VOY A EMPEZAR CON EL EJERCICIO DE ALUMNOS

// 1 - Sacar todos los alumnos que tienen 23 años

app.get("/api/getalumnos/:edad", (request, response) => {
    conectar();
    connection.query(
        `SELECT * FROM alumnos WHERE edad = ${request.params.edad}`,
        (err, rows, fields) => {
            if (err) throw err;
            response.json(rows);
        }
    );
    desconectar();
});

// 2 - Sacar aquellas personas que tienen el sexo femenino y no tienen 23 años

app.get("/api/getsexodistintoedad/:sexo/:edad", (request, response) => {
    connection.query(
        `SELECT * FROM alumnos WHERE edad != ${request.params.edad} AND sexo = '${request.params.sexo}'`,
        (err, rows, fields) => {
            if (err) throw err;
            response.json(rows);
        }
    );
});

// 3 - Introducir un alumno nuevo, si su DNI ya existe, entonces debe de sacar un mensaje de error y no crear el alumno

app.post("/api/introduciralumno", (request, response) => {
    let respuesta;
    connection.query(
        `SELECT * FROM alumnos WHERE dni = ${request.body.id}`, //Aquí hacer un GET del alumno usando el dni por ejemplo
        (err, rows, fields) => {
            if (err) throw err;
            if (rows.length === 0){
                connection.query(
                    `INSERT INTO alumnos(dni,telefono,nombre,apellido,edad,sexo) VALUES ('${request.body.dni}','${request.body.telefono}','${request.body.nombre}','${request.body.apellido}','${request.body.edad}','${request.body.sexo}')`,
                    (err, rows, fields) => {
                        if (err) throw err;
                        respuesta = rows;
                    }
                );
            } else {
                respuesta = "Error, alumno ya existe."
            }
            response.json(respuesta);
        }
    );
    
});

// Esqueleto del endpoint con una query de SQL dentro
// app.get("/api/", (request, response) => {
//     conectar();
//     connection.query(
//         "sentencia",
//         (err, rows, fields) => {
//           if (err) throw err;
//           response.json(rows);
//         }
//       );
//     desconectar();
// });

