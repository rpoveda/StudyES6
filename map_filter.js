'use strict';
var peoples = [
  { name: 'rafael', age: 26 },
  { name : 'joaozinho', age: 30},
  { name: 'pedo', age: 50 }
];

/*var names = peoples.map((person) => {
    return person.name;
})*/

var names = peoples.map((person) => person.name);

console.log(names);