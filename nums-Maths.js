let score = 399

 const balance = new Number(199)
 console.log(balance);
 console.log(score.length); // length not work in numbers ONly on Arrays an Objects

console.log(balance.toString())
 console.log(typeof balance.toString())
 console.log(typeof balance)


//  ********************** toFixed ***********************

 let price = 232.342210
 console.log(price.toFixed(2));
// // OUT_PUT is   232.34

//  Give those values which is right side of . DOT

let cost = 1312
console.log(cost.toFixed(2));
console.log(typeof cost.toFixed(2));

 // OUT_PUT is   1312.00
//  Give those values which is right side of . DOT => there is not values SO it Gives 00

 balance = 231211
 let rounded = Number(balance.toFixed(2));
 console.log(rounded); 


//  ********************** toprecised() ***********************

 let cost = 199.456


 console.log(cost.toPrecision(3));
 console.log(cost.toFixed(2));


//  ********************** toLocalString() ***********************

 let hundered = 100000
console.log(hundered.toLocaleString('en-PK')); //  100,000 Add Commas ,, For understand more batter


//  ********************** parseInt() ***********************


 let number = "12345.23"
console.log(parseInt(number)); // ParseInt => Convert string to Numbers Also remove flot numbers on Right side like => .23 

 let name = "Hasnian" 
console.log(parseInt(name)); //Output = "NaN"  => String is Converted to Numbers also Mean Name is not Number not String
//console.log(typeof parseInt(name)); // Output = "number"


//  ********************** parseFloat() ***********************

// parseFloat() string ko decimal number (floating number) mein convert karta hai.


let Brand_name = "Service"
console.log(parseFloat(Brand_name)); // Output = "NaN"

let Score = "23432.232"
console.log(parseFloat(Score)) // Convert String to Float Number Add also Right Number after .Dot like => 123.3212 

let Score2 = "23432.23kg"  // remove after the numbes string like kg removed 
console.log(parseFloat(Score2))

let Score3 = "kg23432.23"  
console.log(parseFloat(Score3)) // Output => NaN Because of Kg use before numbers
