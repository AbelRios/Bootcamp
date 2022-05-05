function submit() {
  let nombre = document.getElementById("name").value;
  let apellido = document.getElementById("surname").value;
  let telefono = document.getElementById("phone").value;
  let correo = document.getElementById("email").value;
  let contrasena = document.getElementById("password").value;
  let direcion = document.getElementById("address").value;
  let payment = document.getElementById("pago").value;
  let error = document.getElementById("errore");
  let successText = document.getElementById("success");
  successText.innerHTML = "";
  error.innerHTML = "";
  if (nombre == "") {
    error.innerHTML = "There is an error, please review your form";
    return false;
  }
  if (apellido == "") {
    error.innerHTML = "There is an error, please review your form";
    return false;
  }
  let count = 0;
  for (let i = 0; i < correo.length; i++) {
    if (correo[i] == "@" || correo[i] == ".") {
      count++;
    }
  }
  if (count < 2) {
    error.innerHTML = "There is an error, please review your form";
    return false;
  }

  if (contrasena == "") {
    error.innerHTML = "There is an error, please review your form";
    return false;
  }

  if (telefono < 0) {
    error.innerHTML = "There is an error, please review your form";
    return false;
  }

  if (direcion == "") {
    error.innerHTML = "There is an error, please review your form";
    return false;
  }
  if (payment == "") {
    error.innerHTML = "There is an error, please review your form";
    return false;
  }

  let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      successText.innerHTML = "User created successfully";
    } else if (this.readyState == 4 && this.status == 409) {
      error.innerHTML = "User already exist";
    }
  };

  let url = "http://localhost:8080/crearUsuarioget";
  url += "/" + nombre;
  url += "/" + apellido;
  url += "/" + telefono;
  url += "/" + correo;
  url += "/" + contrasena;
  url += "/" + direcion;
  url += "/" + payment;

  http.open("GET", url, true);
  http.send();
}

function login() {
  let correo = document.getElementById("email").value;
  let contrasena = document.getElementById("password").value;
  let error = document.getElementById("errore");
  error.innerHTML = "";
  let successText = document.getElementById("success");
  successText.innerHTML = "";
  let count = 0;
  for (let i = 0; i < correo.length; i++) {
    if (correo[i] == "@" || correo[i] == ".") {
      count++;
    }
  }
  if (count < 2) {
    error.innerHTML = "There is an error, please review your form";
    return false;
  }
  if (contrasena == "") {
    error.innerHTML = "There is an error, please review your form";
    return false;
  }
  // TIPO GET / PARAMS
  /*   let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      if (this.responseText === "logged") {
        let successText = document.getElementById("success");
        successText.innerHTML = "Logged in successfully";
      } else {
        let error = document.getElementById("errore");
        error.innerHTML = "Email or password not recognize";
      }
    }
  };

  let url = "http://localhost:8080/loginget";
  url += "/" + correo;
  url += "/" + contrasena;

  http.open("GET", url, true);
  http.send(); */

  // TIPO POST / BODY
  let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      if (this.responseText === "logged") {
        successText.innerHTML = "Logged in successfully";
      } else {
        let error = document.getElementById("errore");
        error.innerHTML = "Email or password not recognize";
      }
    }
  };

  let url = "http://localhost:8080/login";

  const data = {
    email: correo,
    password: contrasena,
  };

  http.open("POST", url, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.send(JSON.stringify(data));
}

function add() {
  let nombreProducto = document.getElementById("name").value;
  let tipoDeProducto = document.getElementById("type").value;
  let quantityOnStock = document.getElementById("stock").value;
  let precio = document.getElementById("price").value;
  let error = document.getElementById("errore");
  error.innerHTML = "";
  let successText = document.getElementById("success");
  successText.innerHTML = "";

  if (nombreProducto == "") {
    error.innerHTML = "There is an error, please review your form";
    return false;
  }
  if (tipoDeProducto == "") {
    error.innerHTML = "There is an error, please review your form";
    return false;
  }
  if (precio <= 0) {
    error.innerHTML = "There is an error, please review your form";
    return false;
  }
  if (quantityOnStock <= 0) {
    error.innerHTML = "There is an error, please review your form";
    return false;
  }
  successText.innerHTML = "Product created successfully";
  let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };

  let url = "http://localhost:8080/crearProductoget";
  url += "/" + nombreProducto;
  url += "/" + tipoDeProducto;
  url += "/" + quantityOnStock;
  url += "/" + precio;

  http.open("GET", url, true);
  http.send();
}

function comprar() {
  let id_producto = document.getElementById("id_producto").value;
  let cantidad = document.getElementById("cantidad").value;
  let precio = document.getElementById("price").value;
  let id_usuarios = document.getElementById("id_usuarios").value;
  let comprado = document.getElementById("success");
  comprado.innerHTML = "";
  let noComprado = document.getElementById("errore");
  noComprado.innerHTML = "";

  if (id_producto <= 0) {
    noComprado.innerHTML = "Something went wrong, try again!";
    return false;
  }
  if (cantidad <= 0) {
    noComprado.innerHTML = "Something went wrong, try again!";
    return false;
  }
  if (precio <= 0) {
    noComprado.innerHTML = "Something went wrong, try again!";
    return false;
  }
  if (id_usuarios <= 0) {
    noComprado.innerHTML = "Something went wrong, try again!";
    return false;
  }
  comprado.innerHTML = "You bought the items successfully!";

  let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };

  let url = "http://localhost:8080/comprar";
  url += "/" + id_producto;
  url += "/" + cantidad;
  url += "/" + precio;
  url += "/" + id_usuarios;

  http.open("GET", url, true);
  http.send();
}

function addStock() {
  let id = document.getElementById("id").value;
  let stock = document.getElementById("stock").value;
  let update = document.getElementById("success");
  update.innerHTML = "";
  let errore = document.getElementById("errore");
  errore.innerHTML = "";

  if (id <= 0) {
    errore.innerHTML = "Something went wrong, try again!";
    return false;
  }
  if (stock <= 0) {
    errore.innerHTML = "Something went wrong, try again!";
    return false;
  }
  update.innerHTML = "Stock added correctly!";

  let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };

  let url = "http://localhost:8080/stock";

  const data = {
    stock: stock,
    id: id,
  };

  http.open("POST", url, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.send(JSON.stringify(data));
}
