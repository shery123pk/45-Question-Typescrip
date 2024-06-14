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
console.log("Equality Test (Strings):");
console.log("apple" === "apple"); // True
console.log("apple" !== "orange"); // False
// Tests using the lower case function
console.log("\nLowercase Function Test:");
console.log("HELLO".toLowerCase() === "hello"); // True
console.log("WORLD".toLowerCase() === "WORLD"); // False
// Numerical tests
console.log("\nNumerical Tests:");
console.log(5 === 5); // True
console.log(10 !== 5); // True
console.log(10 > 5); // True
console.log(5 < 10); // True
console.log(5 >= 5); // True
console.log(5 <= 5); // True
// Tests using "and" and "or" operators
console.log("\nLogical Operator Tests:");
console.log((10 > 5) && (5 < 10)); // True
console.log((10 > 5) || (5 > 10)); // True
// Test whether an item is in an array
console.log("\nArray Inclusion Test:");
var array = [1, 2, 3, 4, 5];
console.log(array.includes(3)); // True
console.log(array.includes(6)); // False
// Test whether an item is not in an array
console.log("\nArray Exclusion Test:");
console.log(!array.includes(6)); // True
console.log(!array.includes(3)); // False
