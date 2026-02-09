// reduce() kya hota hai? (Simple words)

// reduce() array ko ek single value mein badal deta hai.

// many values → ONE final result

// accumulator (acc)	result ko jama karta
// currentValue (cur)	current item
// initialValue	starting value

let nums = [1, 2, 3, 4];

let sum = nums.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(sum);
