'use strict';
console.log(`======= RUNNING ARROW.JS =======`);
//set the array using let
//let the new sintaxe js6 for variables
let arrayTest = [1,3,4,50,36,744,38];

//using sintaxe arrow function
arrayTest.forEach((v,i) => {
  //using template string
  console.log(`Index: ${i} - Value: ${v}`);
});

//create function using the new arrow sintaxe
var printValues = (array) => {
  array.forEach((v) => {
    console.log(v);
  });
};
printValues(arrayTest);
