// Question No. 44

// Sandwiches: Write a function that accepts a array of items a 
// person wants on a sandwich. The function should have one parameter that 
// collects as many items as the function call provides, and it should print 
// a summary of the sandwich that is being ordered. Call the function three times, 
// using a different number of arguments each time.

function makeSandwich(...items: string[]){
    console.log("\nmaking a sanddwich with the following times: \n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow Enjoy Sandwich", "\n_________________________");    
}

makeSandwich("Chicken","Cheese","Mayo","Egg",);
makeSandwich("Bread","Butter");
makeSandwich("Bread","Butter","Mayo","Egg","Cheese","Chicken","Lettuce");
