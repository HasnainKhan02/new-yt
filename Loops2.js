// For Off Loop
const arr = ["Ali", "Hassan", "huzaifa", "zohaib", "akram"];
for (const val of arr) {
//   console.log(val);
}

// const map = new Map() 
// map.set('PK' , "Pakistan")
// map.set('GE' , "Germany")
// map.set('SWIS' , "Switzerland")

// // console.log(map);
// for (const [key , value] of map) {
//     console.log(key,value);
    
// }


// In Object can not working For-off Loop
// there for we use For-in Loop

// %%%%%%%%%%%%%%%%%     For-off Loop        %%%%%%%%%%%%%%%%%%


// let Obj = {
//     name: 'Hasnain' ,
//     age : 21 ,
//     City : 'Swabi',
//     Country: "Pakistan"
// }
// // console.log(Obj);
// for (const [key] of Obj) {
//     console.log(key);
    
// }
// ******************* OUtput *****************
// TypeError: Obj is not iterable

// ##########################    Use for-in Loop For Objects ################

// const Obj = {
    //     name: 'Hasnain' ,
    //     age : 21 ,
    //     City : 'Swabi',
//     Country: "Pakistan"
// }
// // console.log(Obj);

// for (const key in Obj) { // Check Syntax Must
//    console.log(key,Obj);
   

// }


// ##########################    Use for-in Loop For Arays ################

let Arr = [12,21,32,23,23,12,3]

// console.log(Arr);
for (const key in Arr) {
// console.log(key);

    
    
}


const map = new Map() 
map.set("PK" , "Pakistan")
map.set('GE' , "Germany")
map.set('SWIS' , "Switzerland")

console.log(map.get("PK - Loops2.js:74"));