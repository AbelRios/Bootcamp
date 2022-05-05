async function init(numeroPagina) {
  let ulElement = document.getElementById("lista-ultimos-usuarios");
  let pageElement = document.getElementById("pages");
  let numUsuarios = 10;

  const response = await fetch(
    `https://dummyapi.io/data/v1/user?limit=${numUsuarios}&page=${
      numeroPagina - 1
    }`,
    {
      headers: {
        "app-id": "620173e1ca6cf749d5a95c2f",
      },
    }
  );

  ulElement.innerHTML = "<li>Photo, Title, Name, Surname </li>";

  const usuarios = await response.json();

  console.log(usuarios);

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

async function loadUserData() {
  let userId = new URLSearchParams(window.location.search).get("id");
  console.log(userId);

  const response = await fetch(`https://dummyapi.io/data/v1/user/${userId}`, {
    headers: {
      "app-id": "620173e1ca6cf749d5a95c2f",
    },
  });

  let usuarios = await response.json();

  document.getElementById("name").value = usuarios.firstName;
  document.getElementById("surname").value = usuarios.lastName;
  document.getElementById("phone").value = usuarios.phone;
  document.getElementById("location").value = usuarios.location.street;
  document.getElementById("city").value = usuarios.location.city;
  document.getElementById("state").value = usuarios.location.state;
  document.getElementById("country").value = usuarios.location.country;
  console.log(usuarios);
}

async function userFull() {
  let userId = new URLSearchParams(window.location.search).get("id");

  const response = await fetch(`https://dummyapi.io/data/v1/user/${userId}`, {
    headers: {
      "app-id": "620173e1ca6cf749d5a95c2f",
    },
  });
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

  let datoUsuario = await response.json();

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

async function sendInfo() {
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

  await fetch(`https://dummyapi.io/data/v1/user/create`, {
    method: "POST",
    headers: {
      "app-id": "620173e1ca6cf749d5a95c2f",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  successo.innerHTML = "User Info updated successfully!";
}

async function updateInfo() {
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

  const data = {
    title: titulo,
    firstName: nombre,
    lastName: apellido,
    gender: genero,
    phone: numero,
    location: { street: location, city: city, state: state, country: country },
  };

  await fetch(`https://dummyapi.io/data/v1/user/${userId}`, {
    method: "PUT",
    headers: {
      "app-id": "620173e1ca6cf749d5a95c2f",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

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
}
async function deleteUser() {
  let userId = new URLSearchParams(window.location.search).get("id");
  console.log(userId);

  await fetch(`https://dummyapi.io/data/v1/user/${userId}`, {
    method: "DELETE",
    headers: {
      "app-id": "620173e1ca6cf749d5a95c2f",
      "Content-Type": "application/json",
    },
  });

  window.location = "index.html";
}
