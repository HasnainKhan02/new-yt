// let nums = [1,2,3,4,5,6,7,8,9]

// nums.forEach( (elem)=> {
// console.log(elem);

// } )


// ##################### SEQUENCE 3️⃣ Value + index + array   ########################

// nums.forEach((value, index, arr) => {
//   arr[index] = value * 2;
// });


// ✔ Works
// ✔ When you want to modify array

// 4️⃣ Skipping parameters (IMPORTANT TRICK)


// $$$$$$$$$$$$$$$$$$$$$$   ❌ This is WRONG:     $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$



// nums.forEach((index) => {
//   console.log(index);
// });


// 👆 index is actually value, not index 😅

// ✅ If you want index but not value:
// nums.forEach((_, index) => {
//   console.log(index);
// });


// 👉 _ means “I don’t need this value”

// ❌ Wrong order (NEVER WORKS)


let nums = [1,2,3,4,5,6,7,8,9]
nums.forEach( (it , d)=> {
console.log(it , d);

})


