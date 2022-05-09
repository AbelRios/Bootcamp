const suma = require("../suma");

test("Sumar dos números positivos", () => {

    expect(suma(2,2)).toBe(4);

})

test("Sumar dos números negativos", () => {

    expect(suma(-1,-1)).toBe(-2);

})

test("Sumar un número y una letra", () => {

    expect(suma(1,"a")).toBe("1a");

})

test("Sumar dos letras", () => {

    expect(suma("b","a")).toBe("ba");

})

//Ahora vamos a parametrizar

test.each([[2,2,4],[1,1,2],[3,5,8]])(
    'i%+i% igual a i%', (a,b,expected) =>{
        expect(suma(a,b)).toBe(expected)
    }
)