//  Convert array of objects to lookup by id

let input = [{ id: 1, name: "A" }, { id: 2, name: "B" }]

//  expected = { 1: { id:1, name:"A" }, 2: { id:2, name:"B" } }

let output = Object.fromEntries(
    input.map(obj=>[obj.id,obj])
)

console.log(output);