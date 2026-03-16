//  Deep flatten nested arrays inside object

let input = { a: [1, [2, [3]]], b: [4, [5]] }

//  expected = { a: [1,2,3], b: [4,5] }

let output = {}

for(let key in input){
    output[key]=input[key].flat(Infinity)
}

console.log(output);