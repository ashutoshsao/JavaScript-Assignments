//  Find longest string among object values

let input = { a: "apple", b: "banana", c: "kiwi" }

//  expected = banana

let output = Object.entries(input).reduce((best,curr)=>{
    return (curr[1].length > best[1].length)? curr : best
})

console.log(output[1]);