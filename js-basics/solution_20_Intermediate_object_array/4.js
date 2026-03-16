//  Check for permissions from roles

let roles={ admin:["read","write"], user:["read"], staff: ["write"]};
let checkRole="user";
let action="write";

//  expected = 

let output = roles[checkRole].includes(action);

console.log(output);