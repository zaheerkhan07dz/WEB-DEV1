function nice(name) {

    console.log("heyy "+name+" you are a nice guy")
    console.log("heyy "+name+" you are a hot guy")
    console.log("heyy "+name+" you are a cute guy")
    console.log("heyy "+name+" you are a stud guy")
    console.log("heyy "+name+" you are a muscular guy")
    
}

// nice("zaheer")

function sum(a, b, c=3) {
    // console.group(a+b)
    return a+b+c
}
// result = sum(6,) this throws error because you didnt pass b
result = sum(6,7)
result2 = sum(6,7,4)
console.log("the sum oof these number is "+ result)
console.log("the sum oof these number is "+ result2)

const func1 = (x) =>{
    console.log("i am an arrow function of",x)
}
func1(90)
func1(78)
func1(7)