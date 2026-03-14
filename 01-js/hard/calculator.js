/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Arithmatics {
  constructor(x){
    this.value = x
  }
  static total = 100;
  static about(){
    console.log("this is from the parent Atithmatics class with attribute total : "+ Arithmatics.total);
  }

  add(){
    console.log("parent class value is : "+this.value)
    throw new Error("must implement add function in child class")
  }
}

class Calculator extends Arithmatics {
  constructor(x){
    super(x);
    this.result = 0;
  }

  // add(n){
  //   this.result+=n;
  //   return this;
  // }
  subtract(n){
    this.result-=n;
    return this;
  }
  multiply(n){
    this.result*=n;
    return this;
  }
  divide(n){
    if (n === 0) throw new Error("Cannot divide by zero");
    this.result /= n;
    return this;
  }
  clear(){
    this.result=0;
    return this;
  }
  getResult(){
    return this.result;
  }
  calculate(expression) {
    if (typeof expression !== "string") {
      throw new Error("Invalid expression");
    }

    const cleaned = expression.replace(/\s+/g, '');

    if (!/^[0-9+\-*/().]+$/.test(cleaned)) {
      throw new Error("Invalid characters in expression");
    }

    try {
      const value = Function(`"use strict"; return (${cleaned})`)();
      this.result = value;
      return this;
    } catch {
      throw new Error("Invalid mathematical expression");
    }
  }
}

try{
  let calc = new Calculator(10);
  Calculator.about();
}
catch(err){
  console.error(err.message);
}


module.exports = Calculator;