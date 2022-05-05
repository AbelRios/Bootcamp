/**
 * Crea una clase que lamaremos Bus. Sus atributos serán:

    capacidad: número máximo de pasajeros
    pasajeros: número de pasajeros (inicialmente 0)
    conductor: objeto conductor.

Sus métodos

    subir(pasajeros): aumenta el numero de pasajeros
    bajar(pasajaeros): disminuye el número de pasajeros
    conductor: asigna un objeto conductor.

El ojeto conductor es de una clase (Conductor) cuyos atributos son:

    nombre: nombre del conductor
    licencia: un número que identifica al condcutor.

Al crear el objeto se asigna también el conductor

No pueden subir más pasajeros que los máximos admitidos y no pueden bajar más de los que hay.
Ejemplo
El autobús linea1 puede llevar 40 pasajeros y su conductor se llama José su licencia es la 1234.

Si se pide subir(25) , el atributo pasajeros valdrá 25.

Si a continuación se pide subir(35) solo subirán 15, (2 + 15 son los 40 de máximo)

Si pedimos bajar 45, el autobús se queda vacío.

Si teniendo 35 pasajeros se pide que bajen 40 el autobús se queda vacío.
 */

function Bus(capacidad, conductor) {
  this.capacidad = capacidad;
  this.pasajeros = 0;
  this.conductor = conductor;

  this.subir = function (numero) {
    if (this.pasajeros + numero > this.capacidad) {
      this.pasajeroFuera = this.pasajeros + numero - this.capacidad;
      this.pasajeros = this.pasajeros + this.capacidad - this.pasajeros;
      console.log(
        `Mucha jente, se han quedado fuera ${this.pasajeroFuera} pasajeros`
      );
    } else {
      this.pasajeros = this.pasajeros + numero;
      console.log(
        `Se han subido ${numero} pasajeros, quedan ${this.pasajeros} pasajeros`
      );
    }
    console.log(`En el bus hay ${this.pasajeros} pasajeros`);
  };

  this.bajar = function (numero1) {
    if (this.pasajeros - numero1 > 0) {
      this.pasajeros = this.pasajeros - numero1;
      console.log(
        `Se han bajado ${numero1} pasajeros, quedan ${this.pasajeros} pasajeros`
      );
    } else {
      this.pasajeros = 0;
    }
    console.log(`En el bus hay ${this.pasajeros} pasajeros`);
  };

  this.ImprimePas = function () {
    console.log(this.pasajeros);
  };
}

function Conductor(nombre, licencia) {
  this.nombre = nombre;
  this.licensia = licencia;
}

let conductor1 = new Conductor("Paul", "G555");
let bus1 = new Bus(40, conductor1);

bus1.subir(20);
bus1.subir(13);
bus1.subir(3);

bus1.bajar(5);
bus1.bajar(10);
bus1.bajar(5);
bus1.bajar(15);

bus1.ImprimePas();
