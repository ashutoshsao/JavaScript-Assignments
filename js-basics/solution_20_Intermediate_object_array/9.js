//  Build index of ids grouped by category

let input = [
  { id: 1, category: "fruit" },
  { id: 2, category: "veggie" },
  { id: 3, category: "fruit" }
]

//  expected = { fruit: [1,3], veggie: [2] }

let output = {}

for(let obj of input){
    if(!output[obj.category]) output[obj.category]=[]
    output[obj.category].push(obj.id)
}

console.log(output);