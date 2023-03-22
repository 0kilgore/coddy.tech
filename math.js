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


//Template literals, or template strings were introduced to make working with strings more simple. To explain them, let's first declare some variables.'
const name = 'John Doe';
const age = 31;
const occupation = 'Web Developer';
const city = 'Miami';

//Let's say we want to create a sentence with this data. Without template literals, that would look something like this.

const sentence = 'Hi, my name is ' + name + ' and I am ' + age + ' years old. I work as a ' + occupation + ' in ' + city + '.';
// Output: "Hi, my name is John Doe and I am 31 years old. I work as a Web Developer in Miami."

//We can use template literals instead. They are created with `` instead of '' or "". Whenever we want to add a variable inside of a template literal, we don't have to use the usual string + variable + string syntax, but rather we can just write: ${variable}. For example:

const sentence1 = `Hi, my name is ${name} and i am ${age} years old. I work as a ${occupation} in ${city}.`;
// Output: "Hi, my name is John Doe and I am 31 years old. I work as a Web Developer in Miami."

//This might not look like a big difference now, but once you start writing more complex code it will save you lots of time. If you need to write HTML code in JavaScript, template literals are a life saver. Also, once you start learning frameworks like React, you will use them a lot.

//Boolean logic

//In JavaScript, it is common to use boolean logic. We mostly use it in decision making, /aka when working with if statements. If statement x == 4 is true, do this. We will cover if statements later on.

//Booleans can have two values. True or false. We use boolean logic when we want to evaluate if a whole list of statements is true or not. For example, let's evaluate the sentence "It's raining today and the weather is cold". The first part, "It's raining today", might be true. The second part, "The weather is cold", could also be true. But, the sentence as a whole is true only if both parts are true.

 

//Boolean logic is centered around three words. "AND", "OR" and "NOT".

//As a Boolean operator, “AND” serves to indicate that ALL specified conditions must be met in order for a query to return true.

//The Boolean operator “OR” is used to express that as long as one of two or more conditions are, met the value of a specified query is true.

//The operator "Not" returns the opposite of the validity of the condition. Returns true if the condition is false and vice versa.

 

//We also need to mention that in JavaScript, anything that has a value is seen as true, and anything that doesn't have a value is seen as false. Typically, false is represented as 0, and true as 1. But, true can be other values as well. Values like: 0, undefined, "", null and more are seen as false. Any other values are seen as true:

const var1 = 0;
Boolean(""); // false
Boolean(var1); // false
Boolean(17); // true
Boolean('code'); // true
 

//Comparison operators and equality operators are also used in boolean logic. Comparing numbers and values can be done with: >, <, ==, ===, >=, <=. We will talk about these in an upcoming lecture./