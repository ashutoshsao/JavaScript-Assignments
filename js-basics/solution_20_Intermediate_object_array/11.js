//  Check if two objects are deeply equal

let obj1 = { a: { x: 1, y: 2 } }
let obj2 = { a: { x: 1, y: 2 } }

//  expected = true

let output = deepEqual(obj1,obj2)

function deepEqual(obj1,obj2){
    //check if reference is same
    if(obj1 === obj2) return true;

    //check type and null
    if(typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null)
        return false

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if(keys1.length!==keys2.length) return false

    for(let key of keys1){
        if(!keys2.includes(key) || !deepEqual(obj1[key],obj2[key]))
            return false
    }
}

console.log(output);