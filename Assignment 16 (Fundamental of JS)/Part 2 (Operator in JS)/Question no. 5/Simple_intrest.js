
const prompt=require("prompt-sync")({sigint:true});
// Principle
let principle = prompt("Enter principle : ");
// interest rate
let rate = prompt("Enter interest : ");
// Time
let time = prompt("Enter time : ");
// answer
const answer = (principle*rate*time)/100;
// print answer
console.log("Your interest is : " + answer);