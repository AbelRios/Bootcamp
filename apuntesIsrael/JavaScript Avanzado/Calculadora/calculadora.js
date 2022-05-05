let operacion;
let nro1;
let nro2;

function init() {

    let resultado = document.querySelector('#resultado');
    let uno = document.querySelector('#uno');
    let dos = document.querySelector('#dos');
    let tres = document.querySelector('#tres');
    let cuatro = document.querySelector('#cuatro');
    let cinco = document.querySelector('#cinco');
    let seis = document.querySelector('#seis');
    let siete = document.querySelector('#siete');
    let ocho = document.querySelector('#ocho');
    let nueve = document.querySelector('#nueve');
    let cero = document.querySelector('#cero');
    let sumar = document.querySelector('#sumar');
    let restar = document.querySelector('#restar');
    let dividir = document.querySelector('#dividir');
    let multiplicar = document.querySelector('#multiplicar');
    let reset = document.querySelector('#reset');
    let igual = document.querySelector('#igual');

}
//operaciones


//Eventos de click
uno.onclick = function (e) {
    resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function (e) {
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function (e) {
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function (e) {
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function (e) {
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function (e) {
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function (e) {
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function (e) {
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function (e) {
    resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function (e) {
    resultado.textContent = resultado.textContent + "0";
}
reset.onclick = function (e) {
    resetear();
}
sumar.onclick = function (e) {
    nro1 = resultado.textContent;
    operacion = "+";
    limpiar();
}
restar.onclick = function (e) {
    nro1 = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicar.onclick = function (e) {
    nro1 = resultado.textContent;
    operacion = "*";
    limpiar();
}
dividir.onclick = function (e) {
    nro1 = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function (e) {
    nro2 = resultado.textContent;
    resolver();
}

function limpiar() {
    resultado.textContent = "";
}

function resetear() {
    resultado.textContent = "";
    nro1 = 0;
    nro2 = 0;
    operacion = "";
}

function resolver() {
    var resuelto = 0;
    if (operacion === "+") {
        resuelto = parseFloat(nro1) + parseFloat(nro2);
    } else if (operacion === "-") {
        resuelto = parseFloat(nro1) - parseFloat(nro2);
    } else if (operacion === "*") {
        resuelto = parseFloat(nro1) * parseFloat(nro2);
    } else if (operacion === "/") {
        resuelto = parseFloat(nro1) / parseFloat(nro2);
    }

    resetear();
    resultado.textContent = resuelto;
}