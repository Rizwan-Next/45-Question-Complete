// Question No. 36
// T-Shirt: Write a function called make_shirt() 
// that accepts a size and the text of a message that 
// should be printed on the shirt. 
// The function should print a sentence summarizing 
// the size of the shirt and the message printed on it. 
// Call the function.

function make_shirt(size: string, text:string){
    console.log(`on large ${size} of shirt. ${text} is printed`);   
}

make_shirt('Small', "Have a nice day");
make_shirt("Large", "Have a bad day");

