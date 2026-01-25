// $$$$$$$$$$$$$$$$$$$$$$$  GREETINGS   $$$$$$$$$$$$$$$$$$$$

function greet (name) {
    console.log("Hello - Functions.js:4" + name);

}

greet("Hasnain")

// ADD TWO NUMBERS FUNCTION

 function add (num1,num2)  // Parameters
 {
    console.log(num1+num2);

 }
 add(12,8) // Arguments
 add(12,43)

function add (num1 , num2) {
return (
    num1+num2
)
}
let result = add(12,8)
console.log("Result is - Functions.js:26" ,result);

function loginUserMessage(username) {
  //   if (username === undefined) { // Same Both Methods
  if (!username) {
    // Short version on 29 line
    console.log("Please Enter Username - Functions.js:32");
    return;
  }
  return `${username} was just Logged in`;
}

console.log(loginUserMessage("Hasnain - Functions.js:38"));

// ++++++++++++++++++++++++++ Practice +++++++++++++++++++++

function add (num) {
  return num + 1
}

console.log(add(10));

let user = {
  name: "hasnain",
  price: 121, 

  message () {
    console.log(`${this.name} welcome to the Website - Functions.js:53`);
  }
};
user.message()

// %%%%%%%%%%%%%%%%%%%%%%%% "This" keyword in Arrow Function [Not working] %%%%%%%%%%%%%%%%%%%%%
// let user2 = {
//   name: "hasnain",
//   price: 121, 

//   message ()=> {  // In arrow function we can not use this 
//     console.log(`${this.name} welcome to the Website - Functions.js:64`);
//   }
// };
// user.message()
