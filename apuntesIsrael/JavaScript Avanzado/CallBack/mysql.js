let mysql = require("mysql");

//Crear conexion a la base de datos
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pentone12",
  database: "ecommerce",
});

////////// Sacar la suma y la moltiplicacion de todos lo precios de los producctos

//Conectarse a ala base de datos
connection.connect(function (err) {
  if (err) {
    return console.error("error." + err.message);
  }
  console.log("Connected to the MySql server.");
});

connection.query("select * from productos", function (err, results) {
  if (err) {
    return console.error("error: " + err.message);
  }
  function calcular(arr, callback, imprime) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total = callback(results[i].precio, total);
    }
    imprime(total);
  }

  function suma(a, b) {
    return a + b;
  }

  function multiplica(a, b) {
    if (b === 0) {
      b = b + 1;
    }
    return b * a;
  }

  calcular(results, suma, function (total) {
    console.log(`La suma es ${total}`);
  });
  calcular(results, multiplica, function (total) {
    console.log(`La multiplicacion es ${total}`);
  });
});

////////// Sacar el avarage del rating //////////

connection.connect(function (err) {
  if (err) {
    return console.error("error." + err.message);
  }
  console.log("Connected to the MySql server.");
});

connection.query("select * from ventas", function (err, results) {
  if (err) {
    return console.error("error: " + err.message);
  }

  function calcular(arr, callback, imprime) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total = callback(results[i].ventas, total);
    }
    total = total / arr.length;
    imprime(total);
  }

  function avaregeVentas(a, b) {
    return a + b;
  }

  calcular(results, avaregeVentas, function (total) {
    console.log(`El average es ${total}`);
  });
});

///////////////////////// Update password if is not 1234//////////

connection.connect(function (err) {
  if (err) {
    return console.error("error." + err.message);
  }
  console.log("Connected to the MySql server.");
});

connection.beginTransaction(function(err) {
  if (err) {
      return console.error('error: ' + err.message);
  }

  let usuarios = [];

  connection.query("select * from usuarios", function(err, results, fields) {

      if (err) {
          connection.rollback();

          return console.error('Error: ' + err);
      }

      for (let i = 0; i < results.length; i++) {
          if (results[i].password == "1234") {
              console.log("Usuario correcto");
          } else {
              usuarios.push(results[i].id);
          }
      }

      connection.query("update usuarios set password = '1234' where id in (?)", [usuarios], function(err, results, fileds) {
          if (err) {
              connection.rollback();

              return console.error('Error: ' + err.message);
          }

          console.log(results);

          connection.commit(function(err) {
              if (err) { 
                connection.rollback();

                return console.error('error: ' + err.message);
              }

              console.log('Transaction Complete.');

              // Cerrar conexion
              connection.end(function(err) {

                  if (err) {
                      return console.error('error: ' + err.message);
                  }

                  console.log("Desconectado!");
              });
          });
      });
  });
});
