// Question 41
// Magicians: Make a array of magician’s names. Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array.

function show_magicians(magician: string[]){
    magician.forEach(name => console.log(name));
    
}

// Definr an array containing magicans name
let magicians_names = ["Harry Poter", "Javeed Akther","Zeeshan"]

// call the function to print each magician name
show_magicians(magicians_names);

