/*
Exercise 9 :
create a FAULTY CALCULATOR USING JS
This faulty calculator does the following:
1- It takes wo number as input from user
2- It performs wrong operation as follows:


+ --> -
* ---> +
- --->/
/---> **

Note : It performs wrong operations 10% of the time

*/

let random = Math.random()

console.log(random)
let a = prompt("enter the first number")
let c = prompt("enter operation")
let b = prompt("enter your second number")


let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"

}

if(random>0.1){
    console.log(`the result is ${a} ${c} ${b}`, )
    alert(`the result is ${eval(`${a}  ${c} ${b}`)}`)
  
}
else{
c=obj[c]
alert(`the result is ${eval(`${a}  ${c} ${b}`)}`)
}