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
app.use(express.json());

// parte privata de mi web
app.get("/productos", function (request, response) {
  //Conexion a base de dato
  conectar();

  //Pedir listado de producto desde la base de dato
  connection.query(
    "call ProductosMasVendidos()",
    function (err, results, fields) {
      if (err) {
        return console.error("error:" + err.message);
      }
      let productos = "";
      for (let i = 0; i < results[0].length; i++) {
        productos += "<li>" + results[0][i].nombre + "</li>";
      }
      response.send(productos);
    }
  );

  //Cerrar conexion
  desconectar();
});

app.get("/masGasto", function (request, response) {
  conectar();

  //Pedir listado de producto desde la base de dato
  connection.query(
    "select sum(cantidad) as compra, nombreUS from ventas inner join usuarios on ventas.id_usuarios = usuarios.id group by nombreUS order by compra desc limit 3;",
    function (err, results, fields) {
      if (err) {
        return console.error("error:" + err.message);
      }
      let usuarios = "";
      for (let i = 0; i < results.length; i++) {
        usuarios += "<li>" + results[i].nombreUS + "</li>";
      }
      response.send(usuarios);
    }
  );

  //Cerrar conexion
  desconectar();
});
app.get("/usuarioMasGasto", function (request, response) {
  conectar();

  //Pedir listado de producto desde la base de dato
  connection.query(
    "select sum(cantidad * precio) as Gasto , nombreUS from ventas inner join usuarios on ventas.id_usuarios = usuarios.id group by nombreUS order by Gasto desc limit 3;",
    function (err, results, fields) {
      if (err) {
        return console.error("error:" + err.message);
      }
      let usuariosMasGasto = "";
      for (let i = 0; i < results.length; i++) {
        usuariosMasGasto += "<li>" + results[i].nombreUS + "</li>";
      }
      response.send(usuariosMasGasto);
    }
  );
  //Cerrar conexion
  desconectar();
});

app.get(
  "/comprar/:id_producto/:cantidad/:precio/:id_usuarios",
  function (request, response) {
    let id_producto = request.params.id_producto;
    let cantidad = request.params.cantidad;
    let precio = request.params.precio;
    let id_usuarios = request.params.id_usuarios;
    conectar();

    //Pedir listado de producto desde la base de dato
    connection.query(
      "insert into ventas (id_producto, cantidad, precio, id_usuarios) value (?, ?, ?, ?)",
      [id_producto, cantidad, precio, id_usuarios],
      function (err, results, fields) {
        if (err) {
          return console.error("error:" + err.message);
        }
        response.send(results);
      }
    );
    //Cerrar conexion
    desconectar();
  }
);

app.get(
  "/crearUsuarioget/:usuario/:apellido/:telefono/:email/:password/:address/:pago",
  function (request, response) {
    let usuario = request.params.usuario;
    let apellido = request.params.apellido;
    let telefono = request.params.telefono;
    let email = request.params.email;
    let password = request.params.password;
    let address = request.params.address;
    let pago = request.params.pago;

    conectar();

    connection.query(
      "insert into usuarios (nombreUS, surname, telephone, address, payment_method, email, password) value (?, ?, ?, ?, ?, ?, ?)",
      [usuario, apellido, telefono, address, pago, email, password],
      function (error, results, fields) {
        if (error && error.errno == 1062) {
          response.send(409, "User alreay exist");
        } else {
          response.send("User created succesfully");
        }
      }
    );
    desconectar();
  }
);

app.get(
  "/crearProductoget/:nombre/:tipo/:stock/:precio",
  function (request, response) {
    let nombre = request.params.nombre;
    let tipo = request.params.tipo;
    let stock = request.params.stock;
    let precio = request.params.precio;

    conectar();

    connection.query(
      "insert into productos (nombre, tipo, stock, precio) value (?, ?, ?, ?)",
      [nombre, tipo, stock, precio],
      function (error, results, fields) {
        response.send(
          "Ok get: " + nombre + "-" + tipo + "-" + stock + "-" + precio
        );
      }
    );
    desconectar();
  }
);

app.get("/loginget/:email/:password/", function (request, response) {
  let email = request.params.email;
  let password = request.params.password;

  conectar();
  connection.query(
    "select email, password from usuarios where email like '" +
      email +
      "'   and password like '" +
      password +
      "'",
    function (err, results, fields) {
      if (results.length == 0) {
        response.send("email or password not recognize");
      } else if (results[0].email == email && results[0].password == password) {
        response.send("logged");
      }
    }
  );
  desconectar();
});

app.get("/crearUsuarioquery", function (request, response) {
  let usuario = request.query.usuario;
  let password = request.query.password;
  response.send("Ok query: " + usuario + "-" + password);
});

app.post("/login", function (request, response) {
  console.log(request.body);
  let email = request.body.email;
  let password = request.body.password;

  conectar();
  connection.query(
    "select email, password from usuarios where email like '" +
      email +
      "'   and password like '" +
      password +
      "'",
    function (err, results, fields) {
      if (results.length == 0) {
        response.send("email or password not recognize");
      } else if (results[0].email == email && results[0].password == password) {
        response.send("logged");
      }
    }
  );
  desconectar();
});

app.post("/stock", function (request, response) {
  let id = request.body.id;
  let stock = request.body.stock;

  conectar();
  connection.query(
    "update productos set stock = stock + ? where id = ?",
    [stock, id],
    function (error, results, fields) {
      if (error) {
        response.send("Errore");
      } else {
        response.send("ok");
      }
    }
  );
  desconectar();
});

app.listen(8080);
