//  Find intersection of all arrays in object

let input = { a: [1,2,3], b: [2,3,4], c: [3,4,5] }

//  expected = [3]

let output = Object.values(input).reduce((acc,curr)=>{
    return acc.filter((val)=> curr.includes(val));
})

console.log(output);