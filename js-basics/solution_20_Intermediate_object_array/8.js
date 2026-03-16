//  Convert the object where languages are the top-level keys, and inside each are translation strings by key into an object where translation keys are the top-level keys, and inside each you store values per language [HARD**]

let input = {
  en: { hello: "Hello", bye: "Goodbye" },
  fr: { hello: "Bonjour", bye: "Au revoir" },
  es: { hello: "Hola" }
}

//  expected = {
//   hello: { en: "Hello", fr: "Bonjour", es: "Hola" },
//   bye: { en: "Goodbye", fr: "Au revoir" }
// }

let output = {}

for(let lang in input){
  for(let word in input[lang]){
    if(!output[word]) output[word]={}
    output[word][lang]= input[lang][word]
  }
}

console.log(output);