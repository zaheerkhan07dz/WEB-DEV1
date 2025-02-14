let arr = [1,92,3,4,55]

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element)
// }

//for each --> print all things value and index of that array

// arr.forEach((value,index,arr)=> {
//     console.log(value,index,arr)
// });


//for in --> used for changed array and it pring original values
// let obj ={
//     a:1,
//     b:2,
//     c:3
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element)
        
//     }
// }

//for of --> work like for loop

// for (const iterator of arr) {
//     console.log(iterator)
// }

//mapping function --> used to return new array with existing array

// let brr = [1,3,6,7,9]
// let newbrr = [];
// for (let i = 0; i < brr.length; i++) {
//     const element = brr[i];
//     newbrr.push(element**2)
    
// }
// console.log(newbrr) this is normal zindgi

// let newbrr = brr.map(e =>{
// return e**2
// })

// console.log(newbrr) this is mentos zindgi

//filter function --> used in AI, used to filter things inside the array

// const greaterThanFive = (e) =>{
//     if(e>5){
//         return true
//     }
//     return false
// }
// console.log(arr.filter(greaterThanFive))


//reduce method --> used to reduce an array in single element
// const add = (a,b) =>{
//     return a+b
// }
// console.log(arr.reduce(add))

//array.form --> used to convert anything into array form -->error

// Array.from("harry")
// console.log(Array)
