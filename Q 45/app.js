"use strict";
// Question Node. 45
// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, 
// such as a color or an optional feature. Print the Object that’s returned to 
// make sure all the information was stored correctly.
function make_car(manufacturer, model, ...options) {
    // initialize a car object with manufacture and model
    let car = { manufacturer, model };
    // Add a additional options to the car object
    options.forEach(([key, value]) => [car, key] = value);
    return car;
}
;
console.log(make_car("Toyota", "Corrolla", ["Color", "Black"], ["Year", 2024]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["Sunroof", true]));