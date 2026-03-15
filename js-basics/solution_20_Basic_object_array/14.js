//  Capitalize string values inside object

let input = { name: "alice", city: "delhi" }

//  expected = { name: "Alice", city: "Delhi" }

let output = input

for(let key in output){
    output[key] = output[key][0].toUpperCase() + output[key].slice(1);
}

console.log(output);