// libreria de node --> express
const express = require("express");
// libreria --> path
const path = require("path");
const app = express();
// libreria ---> mysql
const mysql = require("mysql");

function conectar() {
  // crear conexion a la base de datos
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Pentone12",
    database: "e_commerce",
  });
  // conectarse a la base de datos
  connection.connect(function (err) {
    if (err) {
      return console.error("error: " + err.message);
    }

    console.log("Conectado!");
  });
}

// Obtener datos usando una query
function obtener(consulta, callback) {
  connection.query(consulta, function (err, results, fields) {
    if (err) {
      return console.error("error: " + err.message);
    }

    callback(results);
  });
}

function desconectar() {
  // Cerrar conexion
  connection.end(function (err) {
    if (err) {
      return console.error("error: " + err.message);
    }

    console.log("Desconectado!");
  });
}


// parte publica de mi web
app.use(express.static(path.join(__dirname, "public")));

// parte privata de mi web
app.get("/productos", function (request, response) {
  
  //Conexion a base de dato
  conectar();


  obtener(connection.query(
    "select nombre, sum(cantidad + cantidad_vendida) as total from productos inner join ventas on productos.id = ventas.id_producto group by nombre order by total desc limit 3;",
    function (err, results, fields) {
      if (err) {
        return console.error("error:" + err.message);
      }
      let productos = "";
      for (let i = 0; i < results.length; i++) {
        productos += "<li>" + results[i].nombre + "</li>";
      }
      response.send(productos);
    }
  ),callback)
  

  //Pedir listado de producto desde la base de dato
  connection.query(
    "select nombre, sum(cantidad + cantidad_vendida) as total from productos inner join ventas on productos.id = ventas.id_producto group by nombre order by total desc limit 3;",
    function (err, results, fields) {
      if (err) {
        return console.error("error:" + err.message);
      }
      let productos = "";
      for (let i = 0; i < results.length; i++) {
        productos += "<li>" + results[i].nombre + "</li>";
      }
      response.send(productos);
    }
  );
  
  //Cerrar conexion
  desconectar();
});

app.listen(8080);

const prompt = require("prompt-sync")();

function greeting(name) {
  console.log('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
