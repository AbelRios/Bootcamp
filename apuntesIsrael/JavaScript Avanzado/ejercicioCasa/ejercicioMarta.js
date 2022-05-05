/** 
 * Crear un catálogo de productos, donde de cada producto contenga código, descripción y precio. 
 * Se permitirá añadir nuevos producto, eliminar productos por su código y buscar productos por código o descripción. 
 * La búsqueda por código será exacta y la búsqueda por descripción podrá especificar una parte de la descripción. 
 * La búsqueda podrá devolver varios productos. 
 * También se creará una función que nos liste el catálogo por consola
*/

function Producto (codigo, descripcion, precio) {
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.precio = precio;
}

function Catalogo (producto) {
    this.lista = [];
    this.search = function (codigo) {
        return this.lista.filter ((item) => item.codigo === codigo); /* El método filter busca un valor en el array
                                                                        que cumpla la condición de la función flecha
                                                                        que se le atribuye (CALLBACK)*/
    }
    this.add = function (producto) {
        const busqueda = this.search(producto.codigo);
        if (busqueda.length === 0) {
            this.lista.push (producto);
        }
    }
    this.delete = function (codigo) {
        const posicion = this.lista.findIndex ((item) => item.codigo === codigo);
        if (posicion >= 0) {
            this.lista.splice (posicion,1);
        }
    }
    this.size = function () {
        return this.lista.length;
    }
}

const cat = new Catalogo ();
cat.add (new Producto(2,'tomate',5.0));
console.assert (cat.size() === 1,"No añade codigo 2");
const array = cat.search (2);
console.assert (array.length === 1, "Falla el search");
cat.add (new Producto(2,'tomate',5.0));
console.assert (cat.size() === 1,"Añade producto 2 repetido");
cat.add (new Producto(1,'haba',6.0));
console.assert (cat.size() === 2,"Añade prodcto 1");
cat.add (new Producto(3,'lechuga',7.0));
console.assert (cat.size() === 3,"Añade producto 3");
cat.delete(1);
console.assert (cat.size() === 2,"No borra el producto 1");

console.log(cat);