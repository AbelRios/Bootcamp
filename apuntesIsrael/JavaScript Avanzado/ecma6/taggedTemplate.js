function useless(strings, ...value) {
  console.log(strings);
  console.log(value);
  return "I render everything useless";
}

let nameUser = "Benedict";
let occupation = "being awesome";

let sentence = useless`Hi! I'am ${nameUser} and I'm busy at ${occupation}.`;

console.log(sentence);
