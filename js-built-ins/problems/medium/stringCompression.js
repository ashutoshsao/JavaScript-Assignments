/*
  Write a function `compression` which takes a string as input and returns a compressed version of the string. The compression is done by replacing consecutive repeating characters with the character followed by the count of repetitions. If a character does not repeat, it is not followed by a count.

  Example:
  - Input: "aaabbbbcccvvmm"
  - Output: "a3b4c3v2m2"

  - Input: "abc"
  - Output: "abc"

  - Input: "aabbcc"
  - Output: "a2b2c2"

  - Input: ""
  - Output: ""

  Note:
  - The function should work for any alphanumeric string.

  Once you've implemented the logic, test your code by running
  - `npm run test-compressString`
*/
function compression(str){
  if (str.length === 0) return "";
  let output = "";
  let p=0;
  let q=0;
  while(p<str.length){
    if(str[p]===' ') continue;
    q=p;
    let cnt=0;
    while(q<str.length && str[q]===str[p]){
      cnt++;
      q++;
    }
    output+=str[p];
    if(cnt>1) output+=`${cnt}`;
    p=q
  }
  return output;
}

module.exports = compression;