/*  More Conditional Tests: You don’t have to limit the number of tests you create to 10.If you want 
    to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

    • Tests for equality and inequality with strings
    • Tests using the lower case function
    • Numerical tests involving equality and inequality, greater than and less than, 
      greater than or equal to, and less than or equal to

    • Tests using "and" and "or" operators
    • Test whether an item is in a array
    • Test whether an item is not in a array */

    // Tests for equality and inequality with strings

let apple = "apple";
let uppercaseApple = "APPLE";
let ten =10;
let twenty =20;
let fruits = ["apple", "banana", "arange"];

console.log("is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nis apple is not equal to apple?");
console.log(apple != "apple");

console.log("\nis APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nis APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

console.log("\nis ten is equal to twenty?");
console.log(ten == twenty);

console.log("\nis ten is not equal to twenty?");
console.log(ten != twenty);

console.log("\nis ten is greater than zero?");
console.log(ten > 0);

console.log("\nis twenty is less than 10?");
console.log(twenty < 10);

console.log("\nis ten is greater than or equal to 5?");
console.log(ten >= 5);

console.log("\nis twenty is less than or equal to 10?");
console.log(twenty <= 10);





