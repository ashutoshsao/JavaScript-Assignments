//  Find student with highest average mark

let input = { A: [80, 90], B: [70, 75, 85] }

//  expected = A

let output = Object.entries(input).reduce((best,[student , marks])=>{
    let avg = marks.reduce((a,b)=>a+b,0)/marks.length;

    return avg > best.avg ? {student,avg} : best;
    
},{student:"",avg:-Infinity})

console.log(output.student);