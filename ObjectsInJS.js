let Obj = {
  name: "Hasnain",
  age: 21,
  email: "Hasnain@google=.com",
  isOnline: true,
};

function greeting() {
  let user = "Hasnain";
  let age = 21;

  return user;
}
// console.log(Obj); // for all valuses inside Obj
// console.log(Obj.isOnline); // For Find Unique Value inside Obj
//  console.log(`Hello ${greeting(this.user)} wellome  Back `);

// ***************************** New Object *************************

// let App = new Object()

// App.user = "Hasnain"
// App.age =  21
// App.email = "abc@gmail.com"

// console.log(App);

// $$$$$$$$$$$$$$$$$$$$  NESTED OBJECTS  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// let userName = {
//   name: "Ali",
//   fullName: {
//     firstName: "Huzaifa",
//     lastName: "Khan",
//   },
// };
// console.log(userName.fullName.lastName);


// $$$$$$$$$$$$$$$$$$$$  MERGE OBJECTS  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$


let obj1 = {
  a: "1",
  b: "2",
  c: "3",
  d: "4",
};
let obj2 = {
  e: "5",
  f: "6",
  g: "7",
  h: "8",
};

let obj3 = Object.assign({} , obj1 , obj2)
console.log(obj3);

