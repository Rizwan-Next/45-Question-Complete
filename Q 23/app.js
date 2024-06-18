"use strict";
// Q 23
// Conditional Tests: Write a series of conditional tests.
// Print a statement describing each test and your prediction
// for the results of each test. Your code should look something like this:
let car = 'subaru';
// test 1: Equality comparison (true)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // true
// test 2 strice equality comparison (true)
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // true
// test 3 Inequality comparison (False)
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); // False
// test 4 Inequality comparison (False)
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // False
// test 5 Less than comparison (False)
console.log("Is car < 'subaru'? I predict False.");
console.log(car < 'subaru'); // false (lexicographic copairson)
// test 6 Greater than comparison (False)
console.log("Is car > 'subaru'? I predict False.");
console.log(car > 'subaru'); // false (lexicographic copairson)
// test 7 Less than or equal comparison (True)
console.log("Is car <= 'subaru'? I predict True.");
console.log(car <= 'subaru'); // True)
// test 8 Greater than or equal comparison (True)
console.log("Is car >= 'subaru'? I predict True.");
console.log(car >= 'subaru'); // True
// test 9 Checking Truthiess (True)
console.log("Is car? I predict True.");
console.log(car); // true (non=empty string is truthy)
// test 10 checking falsiness (False)
console.log("Is !car? I predict False.");
console.log(!car); // false (negation of a truthy value)
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
