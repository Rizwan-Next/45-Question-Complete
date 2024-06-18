"use strict";
// Q 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let car = "Toyota";
let age = 30;
let numbers = [1, 2, 3, 4];
// String Tests
// Test 1 : Equality (true)
console.log("Is car == 'Toyota'? I predict False.");
console.log(car == 'Toyota'); // True (Casse-insensitive)
// Test 2: Strict Equallity (False)
console.log("Is car === 'Toyota'? I predict False.");
console.log(car === 'Toyota'); //False (case-sensitive)
// Test 3: ineauality (true)
console.log("Is car != 'Suzuki'? I predict True.");
console.log(car != 'Suzuki'); // True
// Test 4: Inequality (False)
console.log("Is car !== 'Toyota'? I predict False.");
console.log(car !== 'Toyota'); //False (case-sensitive)
// LowerCase Function Test
// Test 5: LowerCase conversion (True)
console.log("Is car. toLowerCase() =='Toyota'? I predict True.");
console.log(car.toLowerCase() == 'Toyota'); //True (converted to LowerCase)
// test 6: LowerCase conversion (False)
console.log("Is car === car. toLowerCase()? I predict False.");
console.log(car === car.toLowerCase()); //False (Original value remains UpperCase)
// Numerical Test
// Test 7: Equality (True)
console.log("Is age == 25? I perdict True.");
console.log(age == 25); //True 
// TEST 8: Inequality (False)
console.log("Is age != 30? I perdict True.");
console.log(age != 30); //True
// test 9: Greater then (False)
console.log("Is age > 30? I perdict False.");
console.log(age > 30); // False 
// Test 10: Less then or equal (True)
console.log("Is age <= 25? I perdict True.");
console.log(age <= 25); //True 
// Logical Operators
// Test 11: and (True)
console.log("Is age > 20 && age <30? I perdict True.");
console.log(age > 20 && age < 30); // True (both conditions met) 
// Test 12 : or (False)
console.log("Is age > 30 || age <18? I perdict False.");
console.log(age > 30 || age < 18); // True (neither condition met) 
// Array Test
// Test 13: In Array (True)
console.log("Is 3 in numbers? I perdict True.");
console.log(3 in numbers); // True (checks for index existence) 
// Test 14 : Not in array (False)
console.log("Is 5 not in numbers? I perdict True.");
console.log(5, not in numbers); // True (negation of "in" operator) 
