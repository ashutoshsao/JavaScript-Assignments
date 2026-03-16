//  Transform API response to object (id → name)

let input = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
]

//  expected = { 1: "Alice", 2: "Bob" }

let output = {}
for(let obj of input){
    output[obj.id]=obj.name;
}

console.log(output);