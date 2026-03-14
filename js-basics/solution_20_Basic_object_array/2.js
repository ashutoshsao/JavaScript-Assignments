//  Count word occurrences in array

let input = ["apple", "banana", "apple", "orange", "banana", "apple"]

//  expected= { apple: 3, banana: 2, orange: 1 }

let output = {}

for( let x of input){
    if(!output[x]) output[x]=0;
    output[x]++;
}

console.log(output);