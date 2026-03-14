//  Group people by city

let input = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
]

//  expected = { Delhi: ["A", "C"], Mumbai: ["B"] }

let output = {};
for(let obj of input){
    if(!output[obj.city]){
        output[obj.city]=[];
    }
    output[obj.city].push(obj.name);
}

console.log(output);