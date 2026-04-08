"use strict";
//Using map(),filter() and forEach() methods with array

// Task 1: forEach() to multiply items in array by 2
const numbers = [2, 4, 6, 8, 10];

numbers.forEach(function(number) {    
    console.log(number + " x 2 = " + number * 2) 
});

//Task 2: print names in array
const names = ["Esther", "John", "Ada", "Mike"];

names.forEach(function(name) {
    console.log("Hello " + name + "!")
});

//Task 3: use map() to get squares of numbers
const arrayNumbers = [1, 2, 3, 4, 5];

let squaresOfNum = arrayNumbers.map(num => num * num);
console.log(squaresOfNum)

//Task 4: use map() to get discounted prices
const prices = [100, 200, 300];
// To calculate discountPrice = price - (%discount * price)

let discountPrices = prices.map(price => (price - ((10/100) * price)));
console.log(discountPrices)

// Task 5: use filter() to get values > 10
const numbersToFilter = [5, 12, 8, 20, 3];

let numsGreaterThanTen = numbersToFilter.filter(num => (num > 10));
console.log(numsGreaterThanTen)

// Task 6: use filter() to get ages >= 18
const ages = [15, 22, 17, 30, 18];

let agesGreaterThan18 = ages.filter(age => age >= 18);
console.log(agesGreaterThan18)

// Task 7: 
const digits = [10, 15, 20, 25, 30];

let formattedDigits = digits
                        .filter(num => num > 20) // get array of numbers > 20
                        .map(double => double * 2); // double the filtered array

console.log(formattedDigits)
