console.log("hello world");
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);
console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.firstElementChild.childNodes);
console.log(document.body.firstElementChild.children);
//children aur child nodes me difference hota hai ki children me sirf html element aate hai aur child nodes me text commens sab
console.log(document.body.firstElementChild.children[0]);
console.log(document.body.firstElementChild.children[3].previousSibling);
console.log(document.body.firstElementChild.children[3].previousElementSibling);


