//  Check if all values in object are numbers

let input = { a: 1, b: "hello", c: 3 }

//  expected = false

let output = Object.values(input).reduce((bool,curr)=>{
    if(typeof(curr)!=="number") bool = false;
    return bool
},true)

console.log(output);