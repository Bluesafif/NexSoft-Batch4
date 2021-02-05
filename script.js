const h12 = document.querySelector("p[bebas='suka2']");
const h1s = document.querySelectorAll("p");
console.log("file:", h12);
console.log("file s:", h1s);

let styleList = h1s[1].classList
console.log(styleList);
console.log(styleList.add("textBold"));
console.log(styleList);
console.log(styleList.remove("bgAqua"));
console.log(styleList);

// h1s[1].innerHTML = `ini untuk <a href="/index2.html">paragraf 2</a>`
h1s[1].innerText = `ini untuk <a href="/index2.html">paragraf 2</a>`

let names = ["admin", 2, true]
names.push("empat")
console.log(names);
names.pop()
console.log(names);
names.shift()
console.log(names);
names.unshift(0)
console.log(names);

let user = {
    name: "admin",
    age: 21,
    "add-ress": "Jakarta"
}
let user2 = {
    name: "user",
    age: 20
}
let user3 = {
    name: "operator",
    age: 23
}
console.log(user.name);
console.log(user["add-ress"]);

let users = [user, user2, user3]

for (let index = 0; index < users.length; index++) {
    const element = users[index];
    console.log("element:", element);
}
function fn1(params) {
    console.log("fn1");
}
fn1()
const fn2 = function (params) {
    console.log("total = ", params);
}
const fn5 = () => { }
const fn6 = _ => { }
const fn3 = (param1, param2, cb) => {
    console.log("fn3");
    const total = param1 + param2
    cb(total)
}
fn3(1, 2, fn2)
const fn4 = (param1, param2) => { }