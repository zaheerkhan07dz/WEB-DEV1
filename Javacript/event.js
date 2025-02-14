let button = document.getElementById("btn")
//by click
// button.addEventListener("click", ()=>{
//     alert("your button is pressed")
// })
//by click
// button.addEventListener("click", ()=>{
//     document.querySelector(".box").innerHTML= "<b>clicked</b>"
// })
//by double click
// button.addEventListener("dblclick", ()=>{
//     document.querySelector(".box").innerHTML= "<b>clicked</b>"
// })
//by right click(in mac two finger click)
// button.addEventListener("contextmenu", ()=>{
//     alert("you pressed the right button")
// })
//first click on the button then press any button
button.addEventListener('keydown', (e)=>{
    console.log(e,e.key,e.keyCode);
})




