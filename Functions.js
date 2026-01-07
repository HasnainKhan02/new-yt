// $$$$$$$$$$$$$$$$$$$$$$$  GREETINGS   $$$$$$$$$$$$$$$$$$$$

// function greet (name) {
//     console.log("Hello " + name);

// }

// greet("Hasnain")

// ADD TWO NUMBERS FUNCTION

//  function add (num1,num2)  // Parameters
//  {
//     console.log(num1+num2);

//  }
//  add(12,8) // Arguments
//  add(12,43)

// function add (num1 , num2) {
// return (
//     num1+num2
// )
// }
// let result = add(12,8)
// console.log("Result is " ,result);

function loginUserMessage(username) {
  //   if (username === undefined) { // Same Both Methods
  if (!username) {
    // Short version on 29 line
    console.log("Please Enter Username");
    return;
  }
  return `${username} was just Logged in`;
}

console.log(loginUserMessage("Hasnain"));
