//1. Sum values in object arrays

let input = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }

//   expected= { food: 60, travel: 20, bills: 100 }

let output = Object.fromEntries(
        Object.entries(input).map(([key ,arr])=>[
            key,
            arr.reduce((acc,curr)=>acc+curr,0)
        ])
)
console.log(output);
