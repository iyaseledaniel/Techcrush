// function functionName(){
//     //code to be executed
// }

// without argument
function greet(){
    console.log("Welcome back, Daniel")
}

greet()

// with argument
function farewell(name){
    console.log("see you again " + name)
}

farewell("Daniel")


// static function
function add(){
    let a = 5
    let b = 10
    console.log(a)
    console.log(b)
    return a + b
}

console.log(add())

// dynamic function
function addition(a, b){
    return a + b
}

console.log(addition(2, 3))
console.log(addition(10, 20))

// dynamic function
function isAdult(age){
    return age >= 18
}

console.log(isAdult(20))
console.log(isAdult(16))
console.log(isAdult(12))

const print = function(input){
    console.log(input)
}

print("My name is daniel")
