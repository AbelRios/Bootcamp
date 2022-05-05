function factura(cliente, elemento, empresa) {
  this.cliente = cliente;
  this.elemento = elemento;
  this.empresa = empresa;
  this.baseImponible = 0;
  this.iva = 21;
  this.total = 0;
  this.formaDePago = "contado";

  this.calcTotal = function () {
    this.baseImponible =
      elemento[elemento.length - 1] * elemento[elemento.length - 2];
    this.total = this.baseImponible + this.baseImponible * (this.iva / 100);
  };

  this.imprimeFacturas = function () {
    console.log(`El total de su factura es: ${this.total} €`);
  };
}

function cliente(nombre, direcion, telefono, nif) {
  this.nombre = nombre;
  this.direcion = direcion;
  this.telefono = telefono;
  this.nif = nif;
}

let elemento = ["Obra", 1, 370];
let elemento1 = ["Ventanas", 3, 430];
let elemento2 = ["Suelo nuevo", 1, 500];

function empresa(nombre, direcion, telefono, cif) {
  this.nombre = nombre;
  this.direcion = direcion;
  this.telefono = telefono;
  this.cif = cif;
}

let PoloDigital = new cliente("PoloDigital", "C/Lar", "62234568", "Y9002435J");
let NinjaDer = new cliente("NinjaDer", "C/ Doro", "900876543", "J889900B");
let Gunin = new empresa("Gunin", "C/ Malaga", "611123456", "10203040H");
let EightClub = new empresa("EightClub", "C/ Fimos", "634568909", "T675656K");

let factura1 = new factura(PoloDigital, elemento, Gunin);
let factura2 = new factura(NinjaDer, elemento1, EightClub);
let factura3 = new factura(PoloDigital, elemento2, EightClub);

let facturas = [factura1, factura2, factura3];

for (let i = 0; i < facturas.length; i++) {
  facturas[i].calcTotal();
  facturas[i].imprimeFacturas();
}
