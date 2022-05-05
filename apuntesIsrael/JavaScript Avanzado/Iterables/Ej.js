function init() {
  let letras = ["H", "o", "l", "a"];
  let ulElement = document.getElementById("lista-hola");

  for (let letra of letras) {
    ulElement.innerHTML += "<li>" + letra + "</li>";
  }

  let palabras = ["Hola", "soy", "un", "parrafo"];

  let parrafo = document.getElementById("parrafo");

  for (let palabra of palabras) {
    parrafo.innerHTML += palabra + " ";
  }
}
