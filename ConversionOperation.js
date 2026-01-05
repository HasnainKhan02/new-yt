let score = 24


console.log(typeof score);
let valueInString = Boolean(score)
console.log(typeof valueInString)

let userID = 100;

let newUser = { name: "Ali", id: userID++ };
console.log(newUser.id); // 100
console.log(userID);     // 101
