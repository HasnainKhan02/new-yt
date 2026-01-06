// +++++++++++++++++++++++++++= Math.round +++++++++++++++++++++++++++++++==

// Math.round is used for round float number like 123.4 = 123 or .8 then 124 and remove that float numbrs after .Dot

// Number ko nearest integer mein round karta hai.
let score = 231.923
// console.log(Math.round(score)); 
 
// +++++++++++++++++++++++++++= Math.abs +++++++++++++++++++++++++++++++==

// Number ka absolute value return karta hai (negative → positive)

let num = -1234
// console.log(Math.abs(num)) // Value converted to that Positive always



// +++++++++++++++++++++++++++= Math.Max +++++++++++++++++++++++++++++++==

// let maximum = [23, 43 ,48 , 90 , 101] 
// console.log(Math.max(...maximum)) // ... is Used for Arrays 

// let minimum = [23, 43 ,48 , 90 , 101] 
// console.log(Math.min(...minimum)) // ... is Used for Arrays 


// ===============MIX AND MAX TAKE DIRECT VALUES===============
// console.log(Math.max(12,32,45)); // 45
// console.log(Math.min(12,32,45)); // 12


// ===============Math.ceil  && Math.floor===============

// Take always Heighter value means if 4.1 then it take always 5 and 4.9 also take 5
// Math.floor always take lower value 4.1 or 4.9 it always take 4 

// console.log(Math.ceil(4.1)); //5
// console.log(Math.floor(4.1)); //4



// ===============Math.random===============

// console.log(Math.round(Math.random() *10 )+ 1); // Generate rendom values between 1 & 0 +1 used b/c Value can not goes to zero after Multiply by 10

// Between 10 to 20

console.log(Math.random()); // Value between 0 & 1


// let min = 1
// let max = 6

// console.log(Math.floor(Math.random() * (max - min + 1) + min )); // FORMULA used to Predict Like ludo Dice

