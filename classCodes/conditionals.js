//if-else statements
let userAge = 15
if (userAge >= 18){
    console.log("Welcome to club 9ja")
}else{
    console.log("sorry, you are not allowed to enter")
}

let gender = "female"

if (gender === "female"){
    console.log("welcome to the ladies section")
}else if(gender === "male"){
    console.log("welcome to the male section")
}else{
    console.log("we don't know where you belong")
}

let username = "esther"
let password = "password123"

if(username === "esther" && password === "password123"){
    console.log("login succesful")
}else if (username === "esther" || password === "password123"){
    console.log("Username or password is coreect")
}else{
    console.log("Log in failed")
}


// voting system

let voterAge = 23

if (voterAge >= 18){
    console.log("You can vote")
}else{
    console.log("You are not eligible to vote")
}