//  Remove duplicate objects by id

let input = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" }
]
//  expected = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" }
// ]

let output = []

for(let obj of input){
    if(!output.find(o => o.id===obj.id))
        output.push(obj)
}

console.log(output);