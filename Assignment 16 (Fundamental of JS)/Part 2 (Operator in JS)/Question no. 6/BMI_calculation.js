// here we calculate the BMI (Body Mass Index) by using formula - weight/(height*height)

const prompt=require("prompt-sync")({sigint:true});

// Enter weight
var weight = prompt("Enter weight of a body : ");

// Enter height
var height = prompt("Enter height of the body : ");

// converted height from feet into metre
height = 0.3048 * height;

// calculation of BMI using standard formula
const BMI = weight/(height*height);

// print answer
console.log(BMI);