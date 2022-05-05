let mysql = require("mysql");

//Crear conexion a la base de datos
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pentone12",
  database: "e_commerce",
});

//Conectarse a la base de datos
connection.connect(function (err) {
  if (err) {
    return console.error("error." + err.message);
  }
  console.log("Connected to the MySql server.");
});

//Ejercicio 1:
connection.query(
  "select payment_method, count(usuarios.payment_method) as total from usuarios group by usuarios.payment_method order by total desc limit 1",
  function (err, results, fields) {
    if (err) {
      return console.error("error: " + err.message);
    }
    for (let i = 0; i < results.length; i++) {
      console.log(`Metodo de pago mas usado: `);
      console.log(results[i]);
    }
  }
);
//Ejercicio 2:
connection.query(
  "select name, cantidad_vendida from productos order by cantidad_vendida desc ",
  function (err, results, fields) {
    if (err) {
      return console.error("error: " + err.message);
    }
    console.log(`Lista de productos che incluye la cantidad vendida: `);
    for (let i = 0; i < results.length; i++) {
      console.log(results[i]);
    }
  }
);
//Ejercicio 3:
connection.query(
  "select name, precio from productos order by precio desc ",
  function (err, results, fields) {
    if (err) {
      return console.error("error: " + err.message);
    }
    //console.log(results);
    console.log(
      `lista de productos con el precio desde el mas alto hasta al mas bajo y el contrario: `
    );
    for (let i = 0; i < results.length; i++) {
      results[i].precio = results[i].precio + "€";
      console.log(results[i]);
    }
    for (let i = results.length - 1; i >= 0; i--) {
      console.log(results[i]);
    }
    //console.log(results.reverse());
  }
);
//Ejercicio 4:
connection.query(
  "select name, avg(rating) as 'Average rating' from productos group by name order by 'Average rating' desc ",
  function (err, results, fields) {
    if (err) {
      return console.error("error: " + err.message);
    }
    console.log(`Lista de productos que incluye el average rating: `);
    for (let i = 0; i < results.length; i++) {
      console.log(results[i]);
    }
  }
);
//Ejercicio 5:
connection.query(
  "select id_producto, sum(cantidad) as Cantidad from ventas group by id_producto order by Cantidad desc limit 1 ",
  function (err, results, fields) {
    if (err) {
      return console.error("error: " + err.message);
    }
    for (let i = 0; i < results.length; i++) {
      console.log(`El producto mas venidio y la cantidad vendida: `);
      console.log(results[i]);
    }
  }
);
//Ejercicio 6:
connection.query(
  "select id_producto, sum(cantidad * precio) as Ganancia from ventas group by id_producto order by Ganancia desc limit 1 ",
  function (err, results, fields) {
    if (err) {
      return console.error("error: " + err.message);
    }
    for (let i = 0; i < results.length; i++) {
      console.log(`El producto que mas ganancia ha generado y la ganancia: `);
      console.log(results[i]);
    }
  }
);
//Ejercicio 7:
connection.query(
  "select id_usuarios, sum(cantidad) as cantidad from ventas group by id_usuarios order by cantidad desc limit 1 ",
  function (err, results, fields) {
    if (err) {
      return console.error("error: " + err.message);
    }
    for (let i = 0; i < results.length; i++) {
      console.log(`El ususario que mas ha comprado y la cantidad comprada: `);
      console.log(results[i]);
    }
  }
);

//
connection.query(
  "select id_usuarios, cantidad, precio from ventas",
  function (err, results, fields) {
    if (err) {
      return console.error("error: " + err.message);
    }
    for (let i = 0; i < results.length; i++) {
      let totGasto = results[i].cantidad * results[i].precio;
      console.log(`${results[i]} Gasto: ${totGasto}€`);
    }
  }
);

//Ejercicio 8:
connection.query(
  "select id_usuarios, sum(cantidad * precio) as Gasto from ventas group by id_usuarios order by Gasto desc limit 1 ",
  function (err, results, fields) {
    if (err) {
      return console.error("error: " + err.message);
    }
    //console.log(results);
    for (let i = 0; i < results.length; i++) {
      console.log(`El ususario que mas ha gastado y la cantidad gastada: `);
      results[i].Gasto = results[i].Gasto + "€";
      console.log(results[i]);
    }
  }
);

//Cerrar conexion
connection.end(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Disconnected.");
});
