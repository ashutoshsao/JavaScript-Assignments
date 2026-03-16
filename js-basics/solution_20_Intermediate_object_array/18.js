//  Sort array of objects by name then age

let input = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Alice", age: 22 }
  ]

//  expected = [
//   { name: "Alice", age: 22 },
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 }
// ]

let output = input.sort((a,b)=>{
    if(a.name === b.name) return a.age-b.age;
    else return a.name.localeCompare(b.name);
})

console.log(input);