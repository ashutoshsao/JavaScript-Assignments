//  Convert object to query string

let input = { name: "Alice", age: 25 }

//  expected = "name=Alice&age=25"

let output = Object.entries(input).map(([key , val])=>`${key}=${val}`).join('&')

console.log(output);