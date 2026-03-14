//  Flatten object of arrays into one array

let input = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }

//  expected = ["apple", "banana", "carrot", "pea"]

let output = Object.values(input).flat();

console.log(output);