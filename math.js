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

// string concatenation//

//Let's take a look at some of the things we can do with strings. First, let's initialize two strings and a variable which we will use to show the string methods.

const firstName = "John";
const lastName = "Williams";
let value1;

//Concatenation//
value1 = firstName + lastName;

//We should add a space between the words:

value2 = firstName + ' ' + lastName;

//Append 
// Appending means adding text to a string that already has a value.

val = 'john';
val += ' williams';

///Escaping 

//In most languages, it is common to use apostrophes while writing. If we use ' ' to mark our strings, like let string = 'Hello'; we can run into some problems. For example: let string = 'I'm John Williams';. This would create an error and break the problem because we have three apostrophes. To fix that, we need escaping.

const string1 = 'that's Awesome'; // ERROR 

//USe double quotes 
const string2 = "That's Awesome!"; // No error 

//Or Use back slash
const string3 = 'That\'s Awesome';// no error 

//String Methods
// Let's take a look at some of the methods and properties that are available with strings.

const someString = 'This is some text by hazel';

//Length of string 

value = someString.length //out 18 

//Concatenating with a method 

value = firstName.concat(' '. lastName); // " john william"

// Converting to upper case 

value = someString.toLocaleUpperCase();// THIS SOME TEXT 

//to lower case 

value = someString.toLowerCase();// lower case 

// Letter positions and indexesLetter positions and indexes
//Every letter in a string has an index. The indexes start from 0 and go up. For example, in the string 'Time', the letter 'T' has an index of 0, 'i' has an index of 1, 'm' has an index of 2 and 'e' has an index of 3. There are some methods with indexes.

let someString1 = 'This is some text.';

//Get index of letter 

value = someString.indexOf('s');//Output 3 

//Get character from index

value = someString.charAt(1)// Output h

//Substring 
value = someString.substring(0, 3) // Output: "Thi"

//Replace 
value = someString.replace('This', 'That'); // Output: "That is some text."

//include

value = someString.includes('foo'); // Output: false