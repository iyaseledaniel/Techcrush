"use strict";
// use map to get double of a list

const numbers = [1, 2, 3, 4, 5];
let doubleList = numbers.map(double => double * 2)
console.log(doubleList)

// scores greater than or equal to 300
const scores = [250, 300, 350, 200, 400, 180, 160];
let scoresGreaterThan = scores.filter(values => values >= 300)
console.log(scoresGreaterThan)

// sum of items
const sum = [2000, 3000, 400, 100, 600]
let totalSum = sum.reduce((acc, num) => acc + num, 0);
console.log(totalSum)

// add green to the end and remove red from the array
const color = ["blue", "yellow", "red"]

let addGreen = color.push("green")
console.log(color)

let removeRed = color.filter(cl => cl !== "red")
console.log(removeRed)

