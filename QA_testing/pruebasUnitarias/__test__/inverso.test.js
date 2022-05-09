const inverso = require("../inverso")

test("Palabra simple", () => {

    expect(inverso("jamon")).toBe("nomaj");

})

test("Frase con espacios", () => {

    expect(inverso("Hola qué tal")).toBe("lat éuq aloH");

})

test("Frase con espacios, números y caracteres extraños", () => {

    expect(inverso("Hol4 ¿Qué ta1?")).toBe("?1at éuQ¿ 4loH");

})

test("Frase vacía", () => {

    expect(inverso("")).toBe("");

})

test("Palíndromo", () => {

    expect(inverso("tenet")).toBe("tenet");

})

test.each([["hola","aloh"],["tenet","tenet"],["",""],["Hol4 ¿Qué ta1?","?1at éuQ¿ 4loH"]])(
    'i% invertido es: i%', (a,expected) =>{
        expect(inverso(a)).toBe(expected)
    }
)