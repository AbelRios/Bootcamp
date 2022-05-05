function init() {
  let nombre = document.getElementById("nombre").value.toUpperCase();
  let profession = document.getElementById("profession").value.toUpperCase();
  let error = document.getElementById("errore");
  let success = document.getElementById("success");
  success.innerHTML = "";
  error.innerHTML = "";

  if (nombre == "") {
    error.innerHTML = "error";
    return false;
  }
  if (profession == "") {
    error.innerHTML = "error";
    return false;
  }
  success.innerHTML = hola`${nombre} ${profession}`;
}

function hola(strings, ...value) {
  if (value.length < 2) {
    return "error";
  }
  let nombre = value[0];
  let profession = value[1];

  return `Hola! Soy ${nombre} y me dedico a ${profession}!`;
}
