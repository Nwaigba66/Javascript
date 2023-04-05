
let userArray = process.argv.slice(2);

   // what goes here?  
let result = {};
[,result.username, result.email] = userArray;

console.log( result/* your result */); // {username: "jdoe", email: "john@doe.com"}