"use strict";
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
let alien_color = "green";
// • If the alien is green, print a message that the player earned 5 points.
if (alien_color == "green") {
    console.log("the player just earned 5 point");
}
// • If the alien is yellow, print a message that the player earned 10 points.
else if (alien_color == "Yellow") {
    console.log("the player just earned 10 point");
}
// • If the alien is red, print a message that the player earned 15 points.
else if (alien_color == "red") {
    console.log("the player just earned 15 points.");
}
else {
    console.log("Please select right color");
}
// • Write three versions of this program, making
// sure each message is printed for the appropriate color alien.
// version 2
alien_color = "red";
if (alien_color == "green") {
    console.log("the player just earned 5 point");
}
else if (alien_color == "red") {
    console.log("the player just earned 15 points.");
}
else if (alien_color == "red") {
    console.log("the player just earned 15 points.");
}
// version 3
alien_color = "Yellow";
if (alien_color == "green") {
    console.log("the player just earned 5 point");
}
else if (alien_color == "Yellow") {
    console.log("the player just earned 15 points.");
}
else if (alien_color == "red") {
    console.log("the player just earned 15 points.");
}
else {
    console.log("please select right color");
}
