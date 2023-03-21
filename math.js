// simple math from coddy.tech 

//simple math with numbers 

const num1 = 100;
const num2 = 50;
let value;

// add and subtraction 

value = num1 + num2; // value of 150 
value = num1 - num1; // value of 50 

// Multiplication & Division 

value = num1 * num2; // value of 5000
value = num1 / num2; // value 2 

//Modulo we use % symbol to calculate the remainder from dividing two number 
value = num1 % num2; // value 0 


// number & the Math Object 
// the Math object 
//In JavaScript, there is an object called Math that can be used for more complex mathematics. It has multiple methods that we can use:

// getting the value of PI 

value = Math.PI; // Output: 3.141592

// rounding a number 

value = Math.round(2.4);// out 2

//Rounding down to the nearest whole number

value = Math.floor(3.67); // Output: 3

//Rounding up to the nearest whole number

value = Math.ceil(2.1); // Output: 3

//Calculating square root

value = Math.sqrt(64); // Output: 8

//Absolute value

value = Math.abs(-5); // Output: 5

// Powers (First number to the power of second number)
value = Math.pow(8, 2); // Output: 64

// Minimum
value = Math.min(5, 2, 1, 4, 6); // Output: 1

//Maximum

value = Math.max(2, 3, 1, 5, 4); // Output: 5

// Random value

value = Math.random() // Output: random decimal number from 0 to 1;
