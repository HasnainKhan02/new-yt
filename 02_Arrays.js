// concat() in JavaScript (Arrays)


// ++++++++++++++++++++++++++++    concat()     ++++++++++++++++++++++++++++ //

// concat Combine Two or more Arrays in New Single Array

// concat TWO Arrays

// let Arr1 = [11,12,13,14,15]
// let Arr2 = [21,22,23,24,25]

// let Combine = Arr1.concat(Arr2)
// console.log(Combine);
// console.table(Combine);


// concat 3 Arrays

// let score = [1,2,3,4,5,6]
// let names = ["ali" ,"Hasnain" ,"Huzaifa" , "Ahmad"]
// let countries = ["Pakistan" , "Germany" , "UK" , "France" ," Swis"]

// let join = score.concat(names,countries);
// console.table(join);


// ++++++++++++++++++++   Spread() => Modern Version of concat   +++++++++++++++++ //

// let all = ([...score , ...names , ...countries]);

// console.log(all);
// console.table(all);


// ++++++++++++++++++ .flat ++++++++++++++++++++
// remove extra  nested arrays


// let NewArr = [1,2,3 ,[3,2,1 ,[4,5,6]]]
// // array in another array
// const smoothArray = NewArr.flat(Infinity)
// console.log(smoothArray);



// ++++++++++++++++++++ from Method +++++++++++++


// console.log(Array.isArray("Hasnain")); // Check that it is Array or Not
// console.log(Array.from("Hasnain")); // Make Array From this

// let score = 123451232;
// let arr = (Array.from(score.toString()));
// console.table(arr);
 

// +++++++++++++++++ .of ++++++++++++++++++


let sc1 = 100
let sc2 = 200
let sc3 = 300

console.log(Array.of(sc1,sc2,sc3));



