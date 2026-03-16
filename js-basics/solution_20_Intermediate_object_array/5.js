//  Transform array of orders into revenue per category

let input=[
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 }
]

//  expected = { electronics: 300, clothes: 50 }

let output = {}
for(let obj of input){
    if(!output[obj.category])output[obj.category]=0;
    output[obj.category]+=obj.price
}

console.log(output);