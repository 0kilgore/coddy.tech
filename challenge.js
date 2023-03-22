//You are given two numbers num1 and num2. Print the sum, difference, product and the quotient.

function math(num1,num2){
    console.log(num1+num2);
    console.log(num1-num2);
    console.log(num1 * num2);
    console.log(num1 / num2);
}

// 
// You are given two numbers, num1 and num2. Calculate and print their sum. Then, print the smaller number of the two. At the end, print the first number to the power of 2. Use the Math object for this challenge.

function math(num1,num2){
    console.log(num1+num2);
    console.log(Math.pow(num1,2))
    console.log(Math.min(num1,mum2));
}


//ou are given two strings str1 and str2. Concatenate them and print the concatenated string.

function concat(str1 , str2){
     console.log(str1 + str2);
}

 // You are given a variable of type string called myString. First, print the length of the string. Then, try to find a way to print the last character of the string. At the end, print the first 3 letters of the string.

 function strings(myString){
    console.log(myString.length);
    console.log(myString.charAt(myString.length - 1));
    console.log(myString.substring(0,3))

 }

