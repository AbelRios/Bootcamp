const usuarios = [{
    nombre: "Miguel",
    apellidos: "Lopez",
    edad: 20
}, {
    nombre: "Adri",
    apellidos: "Jimenez"
}, {
    nombre: "Jaime",
    apellidos: "Rodriguez",
    edad: 34
}]

// Mostrar por consola nombre, apellidos y edad de los usuarios
// Si un usuario no tiene edad lanzar excepción y sólo mostrar nombre y apellidos
// Se tiene que mostrar todos los usuarios
// Usar el finally para contar cuántas iteraciones se han hecho del bucle 

let count = 0;

usuarios.forEach(element => {
    try{
        if(element.edad){
            console.log(element.nombre, element.apellidos, element.edad)
        } else {
            throw "Edad no encontrada";
        }
    } catch(e) {
        console.log(element.nombre, element.apellidos, e)
    } finally {
        count++;
    }
});

console.log(`Se han ejecutado ${count} iteraciones.`);

// function mostrar(usuario){

    // for(let item in usuario){
       
    //     if(usuario[item]){
    //         console.log(`${item}: ${usuario[item]}`);
    //     } else {
    //         throw "Dato no encontrado"
    //     }
    // }
    // Esta función no lo saca bien, porque al no tener el valor "edad", 
    // no da error, sino que simplemente no entra al throw

    // if(usuario.nombre){
    //     console.log(usuario.nombre);
    // } else {
    //     throw "Nombre no encontrado"
    // }
    // if(usuario.apellidos){
    //     console.log(usuario.apellidos);
    // } else {
    //     throw "Apellidos no encontrados"
    // }
    // if(usuario.edad){
    //     console.log(usuario.edad);
    // } else {
    //     throw "Edad no encontrada"
    // }
// }














// function positivo(numero) {
//     if (numero > 0) {
//         console.log("positivo");
//     } else {
//         throw "EsNegativo";
//     }
// }

// try {
//     positivo(13);
// } catch (e) {
//     //
// }

// try {
//     positivo(-1);
// } catch (e) {
//     console.log(e);
// }
// console.log("OTRO CODIGO");