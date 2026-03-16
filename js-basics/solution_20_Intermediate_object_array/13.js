//  Find most repeated word across categories

let input = { fruits: ["apple","apple","banana"], drinks: ["apple","tea"] }

//  expected = apple

let words = Object.values(input).flat();

let freq = {}

for(let word of words){
  if(!freq[word]) freq[word]=0;
  freq[word]++
}

let result = Object.entries(freq).reduce((max,curr)=>curr[1]>max[1]?curr:max,["a",-Infinity])[0]

console.log(result);