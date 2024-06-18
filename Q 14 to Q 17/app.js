"use strict";
// question No. 14, 15, 16. 17.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
let guest_list = [`Noman`, `Imran`, `Adnan`, `Ali`, `Asad`];
exports.guest_list = guest_list;
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Hi Freind: ` + guest_list[i] + `\n\nwe invited you on dinner t0morrow. \n\nThank You `);
}
// // Q 15
// let not_persent : string = `Adnan`;
// let new_guest: string = `Frhan Ali Shaikh`;
// guest_list[2] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log(`Hi Freind ` + guest_list[i] + `\n\nWe invited you dinner tomorrow. \n\n Thank You`);
//     console.log(`Mr. ${not_persent} will not coming tomorrow dinner. `)
// } 
// // Q 16
// guest_list.unshift(`1- Tahir`,`2- Tariq Shan`,`3- Shariq Ahemad`,`4- Baber Raza`,`5- Muhammad Saleem`);
// for(let i=0; i<guest_list.length; i++){
//     console.log(`Hi freind ` + guest_list [i] + `, \nWe Invited You On Dinner Tomorrow. We Found Big Table So We Decide To Invite 3 More Guest \n`);
// }
// // Q 17
// console.log(`\n Unfortunately we can not arrange big table , only tow people allow.`)
// while(guest_list.length>2){
//     let remove_guest = guest_list.pop();
//     console.log(`Sorry Freind, ${remove_guest} you are not invited for dinner.`)
// }
// for(let i=0; i<guest_list.length; i++){
//     console.log(`Hi Freind ` + guest_list[i] + `,\nYes you are still invited on tomorrow dinner \nThank You\n`)
// }
// guest_list.splice(0,2)
// console.log(guest_list)
