const mayuscula = require("../mayuscula");

test("Palabra en minúsculas", () => {

    expect(mayuscula("hola")).toBe("HOLA");

})

test("Palabra con mezcla de minúsculas y mayúsculas", () => {

    expect(mayuscula("hOLaQueTAl")).toBe("HOLAQUETAL");

})

test("Frase con caracteres extraños y espacios", () => {

    expect(mayuscula("¿Qué tal?")).toBe("¿QUÉ TAL?");

})

test.each([["hola","HOLA"],["hOLaQueTAl","HOLAQUETAL"],["¿Qué tal?","¿QUÉ TAL?"]])(
    'i% en mayúsuculas es: i%', (a,expected) =>{
        expect(mayuscula(a)).toBe(expected)
    }
)