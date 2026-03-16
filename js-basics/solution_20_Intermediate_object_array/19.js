//  Reconcile two lists (missing + extra items)

let expected = ["a","b","c"]
let actual = ["b","c","d"]

//  expected = { missing:["a"], extra:["d"] }

let expectedSet = new Set(expected);
let actualSet = new Set(actual);

let output = {missing:[],extra:[]}

//missing
for(let key of expectedSet){
    if(!actualSet.has(key)) output.missing.push(key);
}

//extra
for(let key of actualSet){
    if(!expectedSet.has(key)) output.extra.push(key);
}

console.log(output);