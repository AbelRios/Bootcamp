function init() {
  console.log("hola");
  document.getElementById("modulos").innerHTML =
    "<li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li>";
  let modulos = new Map();

  let moduloUnoSet = new Set();
  let moduloDosSet = new Set();
  let moduloTresSet = new Set();
  let moduloCuatroSet = new Set();
  let moduloCincoSet = new Set();

  moduloUnoSet.add("HTML");
  moduloUnoSet.add(10);
  moduloUnoSet.add(10);
  moduloDosSet.add("CSS");
  moduloDosSet.add(14);
  moduloDosSet.add(10);
  moduloTresSet.add("JavaScript");
  moduloTresSet.add(30);
  moduloTresSet.add(9);
  moduloCuatroSet.add("JavaScript Avanzado");
  moduloCuatroSet.add(20);
  moduloCuatroSet.add(9);
  moduloCincoSet.add("React");
  moduloCincoSet.add(12);
  moduloCincoSet.add(7);

  modulos.set("modulo 1", moduloUnoSet);
  modulos.set("modulo 2", moduloDosSet);
  modulos.set("modulo 3", moduloTresSet);
  modulos.set("modulo 4", moduloCuatroSet);
  modulos.set("modulo 5", moduloCincoSet);

  // EJERCICIO 1
  let listaModulos = Array.from(modulos.values());
  let listakeys = Array.from(modulos.keys());
  console.log(listaModulos);

  // EJERCICIO 2
  let modulosKeys = "";
  let modulosBoot = "";
  let modulosCompleto = "";

  for (let i = 0; i < listaModulos.length; i++) {
    modulosBoot += "<li>" + Array.from(listaModulos[i].values()) + "</li>";
    modulosKeys += "<li>" + listakeys[i] + "</li>";
    modulosCompleto +=
      "<li>" +
      listakeys[i] +
      " - " +
      Array.from(listaModulos[i].values()) +
      "</li>";
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
  let value = Array.from(listaModulos.values());
  let iFound = -1;
  let JavaScript = "Se ha encontrado el modulo JavaScript";
  for (let i = 0; i < listaModulos.length; i++) {
    if (value[i].has("JavaScript Avanzado")) {
      document.getElementById("buscar-JavaScript").innerHTML = JavaScript;
      iFound = i;
    }
    if (iFound >= 0) {
      modulos.delete(listakeys[iFound]);
    }

    let eliminarJsAvanzado = "";
    listaModulos = Array.from(modulos.values());

    for (let i = 0; i < listaModulos.length; i++) {
      eliminarJsAvanzado +=
        "<li>" + Array.from(listaModulos[i].values()) + "</li>";
    }
    document.getElementById("borrar").innerHTML = eliminarJsAvanzado;

    let totalModulosDos = 0;
    for (let i = 0; i < listaModulos.length; i++) {
      totalModulosDos++;
    }
    document.getElementById("total-modulosDos").innerHTML = totalModulosDos;
  }
}
