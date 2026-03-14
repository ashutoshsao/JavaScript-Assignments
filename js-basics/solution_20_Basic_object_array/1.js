//  Sum values in object arrays

let input = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }

//  expected= { food: 60, travel: 20, bills: 100 }

let arr = Object.entries(input);
let arr2 = arr.map(([key ,arr])=>[
    key,
    arr.reduce((acc,curr)=>acc+curr,0)
])

let output = Object.fromEntries(arr2);

console.log(output);