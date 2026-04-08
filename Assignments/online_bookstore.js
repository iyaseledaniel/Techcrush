// Online Bookstore
// Task1: Declare and assign user's order details using JS variables

const customerName = "Daniel"
const customerAge = 20
const bookTitle = "Psychology of Money"
let bookPrice = 8500
let quantity = 2
let isStudent = false

/* Task2: Create a variable totalPrice, 
     Use arithmetic operator (+) to calculate total price of customer's order,
     then store result in totalPrice
*/
let totalPrice = bookPrice * quantity

// Task3: Using comaprison operators and storing results in different variables

let isAdult = customerAge >= 18
let buyingManyBooks = quantity > 3
let isBookFiveThousand = bookPrice === 5000

// Task4: Create a non-primitive data type customerOrder and store cutomer's order details in the object

const customerOrder = {
   customerName: "Daniel",
   bookTitle: "Psychology of Money",
   quantity: 2,
   totalPrice: totalPrice
};

// Task5: Displaying customer's order details using console.log()

console.log("Customer Name: "+customerName)
console.log("Book Title: "+bookTitle)
console.log("Total Price: "+customerOrder.totalPrice)
console.log("Is Customer an Adult? "+ isAdult)
console.log("Buying More Than 3 Books? "+buyingManyBooks)
console.log("Is Book Price 5000? "+isBookFiveThousand)
