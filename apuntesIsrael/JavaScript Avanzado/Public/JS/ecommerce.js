function init() {
  let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let productoMasVendido = document.getElementById("listaProductos");
      productoMasVendido.innerHTML = this.responseText;
    }
  };

  http.open("GET", "http://localhost:8080/productos", true);
  http.send();

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let usuarios = document.getElementById("listaUsuarios");
      usuarios.innerHTML = this.responseText;
    }
  };

  xhttp.open("GET", "http://localhost:8080/masGasto", true);
  xhttp.send();

  let xhttpDos = new XMLHttpRequest();
  xhttpDos.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let usuariosGasto = document.getElementById("masGastado");
      usuariosGasto.innerHTML = this.responseText;
    }
  };

  xhttpDos.open("GET", "http://localhost:8080/usuarioMasGasto", true);
  xhttpDos.send();
}

/* let productoMasVendido = document.getElementById("listaProductos");
  productoMasVendido.innerHTML =
    "<li>Mesa</li> <li>Estufa</li> <li>Bombona</li>";
  console.log(productoMasVendido); */
/* let usuarios = document.getElementById("listaUsuarios");
  usuarios.innerHTML = "<li>Orlando</li> <li>Giacomo</li> <li>Pedro</li>";
  console.log(usuarios); */
/*  let usuariosGasto = document.getElementById("masGastado");
  usuariosGasto.innerHTML = "<li>Giorgio</li> <li>Lidia</li> <li>Pablo</li>";
  console.log(usuariosGasto); */
