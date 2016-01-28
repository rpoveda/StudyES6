'use strict';
var peoples = [
  { name: 'rafael', age: 26 },
  { name : 'joaozinho', age: 30},
  { name: 'pedo', age: 50 }
];

var totalAges = peoples.reduce((sum, person) => {
    console.log('reduce', sum, person.age);
    return sum + person.age;
}, 0);//value for start sum

var test = peoples.reduce((name, person) => {
    if(name === ""){
        return name + person.name;
    }else{
        return name + "," + person.name;
    }
}, "");

console.log('totalAges', totalAges);
console.log('test', test.split(','));