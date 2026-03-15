//  Sort object entries by values (ascending)

let input = { a: 3, b: 1, c: 2 }

//  expected = [["b",1], ["c",2], ["a",3]]

let output = Object.entries(input).sort((a,b)=>a[1]-b[1]);

console.log(output);