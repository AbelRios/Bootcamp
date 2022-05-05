// Se il nome al contrario è uguale al nome allora è vero, se no è falso

let nombre = "ana";

function palindromo(name) {
  let nombreAlRevez = "";
  for (let i = name.length - 1; i >= 0; i--) {
    nombreAlRevez += name[i];
  }
  if (nombre === nombreAlRevez) {
    return true;
  }
  return false;
}

console.log(palindromo(nombre));
