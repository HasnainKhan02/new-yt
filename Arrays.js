// let arr = [1,2,3,4,5,6,7]
// arr.pop() // Remove last Element from array
// arr.shift() // Remove Element From Beginning

// arr.unshift(11) // add in Beginning
// arr.push(99)
// console.log(arr);
// console.log(arr.indexOf(4)); // check array index
// console.log(arr.includes(44)); // check in array Value is Avilable or not
// let fruits = new Array("Banana" , "Mango" , "Govana" , "Graps" )

// console.log(fruits);

// ++++++++++++++++++++++++ Slice & Splice ++++++++++++++++++++++++

// ++++++++++++++++++++++++ Slice ++++++++++++++++++++++++

// let arr1 = [1,2,3,4,5,6]
// console.log("Origional" , arr1);

// console.log("SLICED" ,arr1.slice(0,4)); // Copy from index 0 to 4 Index Of Origional Array Also Origionl Array Can not Change

// ++++++++++++++++++++++++ Slice ++++++++++++++++++++++++

// let arr2 = [1,2,3,4,5,6]
// console.log("Origional" , arr2);

// console.log("SPICED" ,arr2.splice(2,4)); // Cut from index 2 to 4 Index Of Origional Array Also Origionl Array Can Change
// console.log("Origional After Splice" , arr2);



// ++++++++++++++++++++++++++++= BEST Splice() Example ++++++++++++++++++++++++++++


let marks = [22, 23, 24, 25, 26, 27, 28];

console.log("Orig ",marks);
console.log("Splice ",marks.splice(1,5)); // index 1 sa Start and goes to index 5 Remove all Values

console.log("After Splice ", marks);


// ++++++++++++++++++++++++++++= BEST Slice() Example ++++++++++++++++++++++++++++
// one thing in slice it can not read 0r copy last value like 5 index so it can copy till index 4 ignore index 5

let marks2 = [22, 23, 24, 25, 26, 27, 28];

console.log("Orig ",marks2);
console.log("Slice ",marks2.slice(1,5)); // index 1 sa Start and goes to index 5 Remove all Values

console.log("After Slice ", marks2);
