//  Find student with highest average marks

let input = { name: "Rahul", age: 23, city: "Noida" } 
let keys = ["name","city"]

//  expected = { name: "Rahul", city: "Noida" }

let output = Object.entries(input).filter(([key,val])=>keys.includes(key));

console.log(output);