//  Chunk object entries into groups of size

let input = { a: "apple", b: "banana", c: "kiwi" }
let size=2

//  expected = [ [["a",1],["b",2]], [["c",3],["d",4]] ]

let output = []

let arr = Object.entries(input)

for(let i=1;i<arr.length;i+=size){
    output.push([arr[i-1],arr[i]]);
}
if(arr.length%2!=0) output.push([arr[arr.length-1]]);

console.log(output);