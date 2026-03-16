//  Remove deeply nested key from object

let input = { a: { b: { c: 1, d: 2 } } }
let remove ="c"

//  expected = { a: { b: { d: 2 } } }

function removeKey(obj,key){
    for(let k in obj){
        if( k===key) delete obj[k];
        else if(typeof(obj[k])==="object" && obj[k]!==null) removeKey(obj[k],key);
    }
    return obj
}

let output = removeKey(input,remove);

console.log(output);