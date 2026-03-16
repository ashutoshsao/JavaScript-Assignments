//  Sum all transactions per user

let input = [
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 }
]

//  expected = { A: 150, B: 200 }

let output = {}

for(let obj of input){
    if(!output[obj.user]) output[obj.user]=0;
    output[obj.user]+=obj.amount;
}

console.log(output);