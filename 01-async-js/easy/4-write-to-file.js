// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

function printContent(err){
    if(err)
        console.error(err.message)
    else{console.log("done!")}
}

fs.writeFile("./a.txt","i am loving it",printContent);
let sum = 0;
for(let i=1;i<=100000000;i++){
    sum+=i;
}
console.log(sum);