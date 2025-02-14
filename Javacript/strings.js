 console.log("this is string")
 let a ="harry"
 console.log(a[0])
 console.log(a[1])
 console.log(a[2])
 console.log(a[3])
 console.log(a[4])
// console.log(a[5]) --> error
console.log(a.length)
let name = "harry"
let friend = "rohan"
console.log("his name is "+ name + " and his friend name is "+friend)
//using template lie=terals
console.log(`his name is ${name} and his friend name is ${friend}`)
//escape characters

let c = "har\rkiiry"
console.log(c)

let b = "zaheerza"
console.log(b.length)
//bracket issliye kyunki yeh functions hai
console.log(b.toLowerCase())
console.log(b.toUpperCase())
console.log(b.slice(1,4))
//single numbr denge toh wo waha se end tk replace ho jayega
console.log(b.slice(1))
console.log(b.replace("za", "sa"))
//do occurence hui toh pehli change hogi bss
console.log(b.concat(a, "khan", "uddin"))

let d = "harrry"
console.log(d.trim())
console.log(d.indexOf("ry"))

//string is immutable means no matter how many operation you performed real string cant be changed

//if you use indexof function on any string and you asked the index of that characters that is not present than it gives you -1