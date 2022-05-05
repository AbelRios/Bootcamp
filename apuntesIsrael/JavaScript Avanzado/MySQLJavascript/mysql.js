let mysql = require("mysql");

//Crear conexion a la base de datos
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pentone12",
  database: "ecommerce",
});

//Conectarse a ala base de datos
connection.connect(function (err) {
  if (err) {
    return console.error("error." + err.message);
  }
  console.log("Connected to the MySql server.");
});

//Obtener datos de base de datos (Select * from productos)
connection.query("select * from usuarios", function (err, results, fields) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log(results);
});

connection.query("select * from productos", function (err, results, fields) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log(results);
});

//Cerrar conexion
connection.end(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Disconnected.");
});
