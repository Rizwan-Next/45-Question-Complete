// Question 3 lowerCase

let personName: string = "karachi pakistan";
console.log("lowerCase:", personName.toLowerCase());

console.log("UpperCase:", personName.toLocaleUpperCase());

console.log("TitleCase:", personName.replace(/\bw/g,c => c.toUpperCase()));
