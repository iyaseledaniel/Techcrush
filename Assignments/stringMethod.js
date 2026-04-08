"use strict";
// Using slice and substring
const str = "Nigeria is awesome";
let extractNig = str.substring(0,7)
let sliceAwe = str.slice(-7)
let getIs = str.slice(8,10)

// using split()
const names = "John,Jane,Doe";
let splitName = names.split(",")
let joinNameWithSpace = splitName.join(" ")

const path = "/user/home/docs";
let splitPath = path.split("/")
let getHome = splitPath[splitPath.indexOf("home")]

// Mixing 
const email = "user@example.com";
let splitemail = email.split("@")
let getUsername = splitemail[0]
let isDotComDomain = email.endsWith(".com")
let replaceChar = email.replace("@", "AT")

// Output variables 
console.log(extractNig)
console.log(sliceAwe)
console.log(getIs)
console.log(splitName)
console.log(joinNameWithSpace)
console.log(splitPath)
console.log(getHome)
console.log(getUsername)
console.log("A dot com domain?: " + isDotComDomain)
console.log(replaceChar)