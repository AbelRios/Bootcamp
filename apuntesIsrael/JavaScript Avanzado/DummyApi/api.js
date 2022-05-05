function init(numeroPagina) {
  let ulElement = document.getElementById("lista-ultimos-usuarios");
  let pageElement = document.getElementById("pages");
  let numUsuarios = 10;

  ulElement.innerHTML = "<li>Photo, Title, Name, Surname </li>";

  let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let usuarios = JSON.parse(this.responseText);

      for (const usuario of usuarios.data) {
        ulElement.innerHTML +=
          "<li>" +
          " " +
          `<a href='user.html?id=${usuario.id}'> <img  src='` +
          usuario.picture +
          "'" +
          "width='70px'> </a> " +
          " " +
          usuario.title +
          " " +
          usuario.firstName +
          " " +
          usuario.lastName +
          " " +
          "</li>";
      }

      let pages = "";
      for (let i = 1; i <= usuarios.total / usuarios.limit; i++) {
        pages += `<a href='#' onclick='init(${i})'> ${i} , </a>`;
      }
      let lastPage = parseInt(usuarios.total / usuarios.limit) + 1;
      pages += `<a href="#" onclick="init(${lastPage})"> ${lastPage}</a>`;

      pageElement.innerHTML = pages;
    }
  };

  let url = `https://dummyapi.io/data/v1/user?limit=${numUsuarios}&page=${
    numeroPagina - 1
  }`;

  http.open("GET", url, true);
  http.setRequestHeader("app-id", "620173e1ca6cf749d5a95c2f");
  http.send();
}

function loadUserData() {
  let userId = new URLSearchParams(window.location.search).get("id");
  console.log(userId);

  let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let usuarios = JSON.parse(this.responseText);
      document.getElementById("name").value = usuarios.firstName;
      document.getElementById("surname").value = usuarios.lastName;
      document.getElementById("phone").value = usuarios.phone;
      document.getElementById("location").value = usuarios.location.street;
      document.getElementById("city").value = usuarios.location.city;
      document.getElementById("state").value = usuarios.location.state;
      document.getElementById("country").value = usuarios.location.country;
      console.log(usuarios);
    }
  };
  let url = `https://dummyapi.io/data/v1/user/${userId}`;

  http.open("GET", url, true);
  http.setRequestHeader("app-id", "620173e1ca6cf749d5a95c2f");
  http.send();
}

function userFull() {
  let userId = new URLSearchParams(window.location.search).get("id");
  console.log(userId);
  let link = document.getElementById("link");
  let id = document.getElementById("id");
  let title = document.getElementById("title");
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let gender = document.getElementById("gender");
  let email = document.getElementById("email");
  let dateOfBirth = document.getElementById("dateOfBirth");
  let registerDate = document.getElementById("registerDate");
  let phone = document.getElementById("phone");
  let picture = document.getElementById("picture");
  let location = document.getElementById("location");
  let city = document.getElementById("city");
  let state = document.getElementById("state");
  let country = document.getElementById("country");
  //let timezone = document.getElementById("timezone");

  let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let datoUsuario = JSON.parse(this.responseText);
      console.log(datoUsuario);
      picture.innerHTML = `<img src='${datoUsuario.picture}' width='150px'>`;
      id.innerHTML = `<b>ID</b>: ${datoUsuario.id}`;
      title.innerHTML = `<b>${datoUsuario.title.toUpperCase()}</b>`;
      firstName.innerHTML = `<b>NOMBRE</b>: ${datoUsuario.firstName}`;
      lastName.innerHTML = `<b>SURNAME</b>: ${datoUsuario.lastName}`;
      gender.innerHTML = `<b>GENDER</b>: ${datoUsuario.gender}`;
      email.innerHTML = `<b> EMAIL </b>: ${datoUsuario.email}`;
      dateOfBirth.innerHTML = ` <b> DATE OF BIRTH </b>: ${datoUsuario.dateOfBirth}`;
      registerDate.innerHTML = `<b> REGISTER DATE </b>: ${datoUsuario.registerDate}`;
      phone.innerHTML = `<b> PHONE </b>: ${datoUsuario.phone}`;
      location.innerHTML = `<b> LOCATION </b>: ${datoUsuario.location.street}`;
      city.innerHTML = `<b> CITY </b>: ${datoUsuario.location.city}`;
      state.innerHTML = `<b> STATE </b>: ${datoUsuario.location.state}`;
      country.innerHTML = `<b> COUNTRY </b>: ${datoUsuario.location.country}`;
      //timezone.innerHTML = `<b> TIME ZONE </b>: ${datoUsuario.location.timezone}`;
      link.innerHTML = `<a href='updateuser.html?id=${userId}'> Update User Info </a>`;
    }
  };

  let url = `https://dummyapi.io/data/v1/user/${userId}`;

  http.open("GET", url, true);
  http.setRequestHeader("app-id", "620173e1ca6cf749d5a95c2f");
  http.send();
}

function sendInfo() {
  let title = document.getElementById("title").value;
  let nombre = document.getElementById("name").value;
  let apellido = document.getElementById("surname").value;
  let gender = document.getElementById("gender").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let picture = document.getElementById("picture").value;
  let dateOfBirth = document.getElementById("dateOfBirth").value;
  let location = document.getElementById("location").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let country = document.getElementById("country").value;
  let errore = document.getElementById("errore");
  errore.innerHTML = "";
  let successo = document.getElementById("success");
  successo.innerHTML = "";

  let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };
  if (nombre == "") {
    errore.innerHTML =
      "There is an error, please fill up all the lines correctly!";
    return false;
  }
  if (apellido == "") {
    errore.innerHTML =
      "There is an error, please fill up all the lines correctly!";
    return false;
  }
  if (phone < 0) {
    errore.innerHTML =
      "There is an error, please fill up all the lines correctly!";
    return false;
  }
  successo.innerHTML = "User Info updated successfully!";

  let url = `https://dummyapi.io/data/v1/user/create`;

  const data = {
    title: title,
    firstName: nombre,
    lastName: apellido,
    email: email,
    gender: gender,
    dateOfBirth: dateOfBirth,
    picture: picture,
    phone: phone,
    location: { street: location, city: city, state: state, country: country },
  };

  http.open("POST", url, true);
  http.setRequestHeader("app-id", "620173e1ca6cf749d5a95c2f");
  http.setRequestHeader("Content-Type", "application/json");
  http.send(JSON.stringify(data));
}

function updateInfo() {
  let userId = new URLSearchParams(window.location.search).get("id");
  console.log(userId);

  let titulo = document.getElementById("title").value;
  let nombre = document.getElementById("name").value;
  let apellido = document.getElementById("surname").value;
  let genero = document.getElementById("gender").value;
  let numero = document.getElementById("phone").value;
  let location = document.getElementById("location").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let country = document.getElementById("country").value;
  let errore = document.getElementById("errore");
  errore.innerHTML = "";
  let successo = document.getElementById("success");
  successo.innerHTML = "";

  if (nombre == "") {
    errore.innerHTML =
      "There is an error, please fill up all the lines correctly!";
    return false;
  }
  if (apellido == "") {
    errore.innerHTML =
      "There is an error, please fill up all the lines correctly!";
    return false;
  }
  if (numero < 0) {
    errore.innerHTML =
      "There is an error, please fill up all the lines correctly!";
    return false;
  }

  successo.innerHTML = "User Info updated successfully!";

  let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };
  let url = `https://dummyapi.io/data/v1/user/${userId}`;

  const data = {
    title: titulo,
    firstName: nombre,
    lastName: apellido,
    gender: genero,
    phone: numero,
    location: { street: location, city: city, state: state, country: country },
  };

  http.open("PUT", url, true);
  http.setRequestHeader("app-id", "620173e1ca6cf749d5a95c2f");
  http.setRequestHeader("Content-Type", "application/json");
  http.send(JSON.stringify(data));
}

function deleteUser() {
  let userId = new URLSearchParams(window.location.search).get("id");
  console.log(userId);

  let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      window.location = "/DummyApi/index.html";
    }
  };

  let url = `https://dummyapi.io/data/v1/user/${userId}`;

  http.open("DELETE", url, true);
  http.setRequestHeader("app-id", "620173e1ca6cf749d5a95c2f");
  http.setRequestHeader("Content-Type", "application/json");
  http.send();
}
/*function init(numeroPagina) {
  let numUsuarios = 10;

  let p;
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    let state = this.readyState;
    let status = this.status;
    let response = this.responseText;

    p = new Promise(function (resolve, reject) {
      if (state == 4 && status == 200) {
        resolve(response);
      } else if (state == 4) {
        reject("Error: ");
      }
    });

    p.then(sustituirLista).catch(error);
  };

  let url = `https://dummyapi.io/data/v1/user?limit=${numUsuarios}&page=${
    numeroPagina - 1
  }`;
  xhttp.open("GET", url, true);
  xhttp.setRequestHeader("app-id", "614c809883d7ac75ac446ba1");
  xhttp.send();
}

function sustituirLista(responseText) {
  let usuarios = JSON.parse(responseText);
  let ulElement = document.getElementById("lista-ultimos-usuarios");
  let paginationElement = document.getElementById("paginacion");

  ulElement.innerHTML = "<li>Foto, Titulo, Nombre, Apellidos</li>";

  for (const usuario of usuarios.data) {
    ulElement.innerHTML +=
      "<li><a href='usuario.html?id=" +
      usuario.id +
      "'>" +
      "<img width='100' height='60' " +
      "src='" +
      usuario.picture +
      "'/></a>" +
      usuario.title +
      ", " +
      usuario.firstName +
      ", " +
      usuario.lastName +
      "</li>";
  }

  let paginacion = "";
  for (let i = 1; i <= usuarios.total / usuarios.limit; i++) {
    paginacion += `<a href="#" onclick="init(${i})">${i}</a>`;
  }

  let ultimaPagina = parseInt(usuarios.total / usuarios.limit) + 1;
  paginacion += (
    <a href="#" onclick="init(${ultimaPagina})">
      ${ultimaPagina}
    </a>
  );

  paginationElement.innerHTML = paginacion;
}

function error(textoError) {
  let ulElement = document.getElementById("lista-ultimos-usuarios");

  ulElement.innerHTML = textoError;
}*/
