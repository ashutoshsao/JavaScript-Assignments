//  Count even and odd numbers in array

let input = [1,2,3,4,5,6]

//  expected = { even: 3, odd: 3 }

let output = { even:0, odd:0 };

for(let x of input){
    if(x%2==0)  output.even++;
    else output.odd++;
}

console.log(output);