//length of a string
let stringText = "This is a class on string methods"
console.log(stringText.length)

let capitalLetter = stringText.toUpperCase()
let smallLetter = stringText.toLowerCase()

console.log(capitalLetter)
console.log(smallLetter)

let str = "       Hello, world   "
let trimmedStr = str.trim()
let frontTrimmedStr = str.trimStart()
let endTrimmedStr = str.trimEnd()

console.log(trimmedStr)
console.log(frontTrimmedStr)
console.log(endTrimmedStr)

let signUpName = " Esther"
let signInName = "Esther"

if ((signUpName.trim()) === signInName){
    console.log("Welcome back, Esther")
}else{
    console.log("Invalid login information")
}

//indexOf and includes

let userEmail = "iyaswlwalfred@gmail.com"
let emailIndex = userEmail.indexOf("@")
console.log(emailIndex)

let email_contains_at = userEmail.includes("@")
console.log(email_contains_at)

let userName = "techCrush Esther 6"

let starts = userName.startsWith("techCrush")
console.log(starts)

let ends = userName.endsWith("6")
console.log(ends)

// slice and substring

let testString = "My name is Esther!"
let slicedString = testString.slice(0, 10)
let substringString = testString.substring(0,10)

console.log(slicedString)
console.log(substringString)

// replace and replaceAll

let text = "Esther is a techie. Esther loves coding and Esther loves teaching"
let replacedText = text.replace("Esther", "She")
let replacedAllText = text.replaceAll("Esther", "She")

console.log(replacedText)
console.log(replacedAllText)

// classwork
const msg = "  Hello, WORLD!  "

let trimMsg = msg.trim()
let msgStartsHello = msg.startsWith("Hello")
let msgEndsWithWorld = msg.endsWith("WORLD!")
let msgToLowecase = msg.toLowerCase()
let msgIndexOfWorld = msg.indexOf("WORLD")
let msgReplace = msg.replace("WORLD", "Nigeria")
let msgReplaceALl = msg.replaceAll("L", "1")
let msgSlice = msg.slice(3, 8)
let msgSubstring = msg.substring(-1)

console.log(trimMsg)
console.log(msgStartsHello)
console.log(msgEndsWithWorld)
console.log(msgToLowecase)
console.log(msgIndexOfWorld)
console.log(msgReplace)
console.log(msgReplaceALl)
console.log(msgSlice)
console.log(msgSubstring)

//split

const sentence = "LANGUAGES: Javascript, Python, Java, C++"
let splitSentence = sentence.split("")
console.log(splitSentence)

let example = "she is a girl, she is teacher, she is eating"
console.log(example.split("she"))

