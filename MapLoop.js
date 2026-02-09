// %%%%%%%%%%%%%%%%%%   .Map()   %%%%%%%%%%%%%%%%%%%%


// 1️⃣ .map() kya hota hai? (Simple words)
// map() array ke har element ko change karta hai
// aur naya array return karta hai.

// Purana array ❌ change nahi hota
// Naya array ✅ milta hai


let Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result =  Nums.map( (num) => num + 10 )  // Always save in Variable
console.log(result);