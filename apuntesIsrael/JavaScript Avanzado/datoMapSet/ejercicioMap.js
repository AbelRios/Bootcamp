function init() {
  console.log("hola");
  document.getElementById("modulos").innerHTML =
    "<li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li>";
  let modulos = new Map();

  modulos.set("modulo 1", "HTML");
  modulos.set("modulo 2", "CSS");
  modulos.set("modulo 3", "JavaScript");
  modulos.set("modulo 4", "JavaScript Avanzado");
  modulos.set("modulo 5", "React");
  modulos.set("modulo 6", "MySql");
  modulos.set("modulo 7", "MongoDB");

  // EJERCICIO 1

  let listaModulos = Array.from(modulos.values());
  let listakeys = Array.from(modulos.keys());
  console.log(listaModulos);

  // EJERCICIO 2
  let modulosKeys = "";
  let modulosBoot = "";
  let modulosCompleto = "";

  for (let i = 0; i < listaModulos.length; i++) {
    modulosBoot += "<li>" + listaModulos[i] + "</li>";
    modulosKeys += "<li>" + listakeys[i] + "</li>";
    modulosCompleto +=
      "<li>" + listakeys[i] + " - " + listaModulos[i] + "</li>";
  }
  document.getElementById("modulos").innerHTML = modulosBoot;

  // EJERCICIO 3

  let totalModulos = 0;
  for (let i = 0; i < listaModulos.length; i++) {
    totalModulos++;
  }
  document.getElementById("tot-modulos").innerHTML = totalModulos;
  // O SE PUEDE HACER
  // document.getElementById("tot-modulos").innerHTML = modulos.size;

  // EJERCICIO 4

  document.getElementById("modulos-keys").innerHTML = modulosKeys;

  document.getElementById("modulos-values").innerHTML = modulosBoot;

  // EJERCICIO 5

  document.getElementById("nombre-completo").innerHTML = modulosCompleto;

  // EJERCICIO 6
  let iFound = -1;
  let JavaScript = "aqui";
  for (let i = 0; i < listaModulos.length; i++) {
    if (listaModulos[i] === "JavaScript Avanzado") {
      document.getElementById("buscar-JavaScript").innerHTML = JavaScript;
      iFound = i;
    }
  }

  if (iFound >= 0) {
    modulos.delete(listakeys[iFound]);
  }

  let eliminarJsAvanzado = "";
  listaModulos = Array.from(modulos.values());

  for (let i = 0; i < listaModulos.length; i++) {
    eliminarJsAvanzado += "<li>" + listaModulos[i] + "</li>";
  }
  document.getElementById("borrar").innerHTML = eliminarJsAvanzado;
}
