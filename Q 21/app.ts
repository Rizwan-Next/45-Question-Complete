// Q 21
// They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.

interface item {
    name : string 
    price1 : number
}
// create tow Objects
const book: item = {
    name : ' Kids Book',
    price1: 500
}
const shose : item = {
    name : ' jokers',
    price1 : 900
}
console.log(`Book name : ${book.name}, price: Rs${book.price1}`)
console.log(`Shose name: ${shose.name},    price: Rs${shose.price1}`)
