// Calculation of area of circle
const prompt=require("prompt-sync")({sigint:true});

// radius of circle
const radius = prompt("Enter radius of circle : ");

const pie = 22/7;

// formula
const area = pie*(radius*radius);

// print area of circle
console.log("Area of circle : "+ area);