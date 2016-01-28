'use strict';
var peoples = [
  { name: 'rafael', age: 26 },
  { name : 'joaozinho', age: 30},
  { name: 'pedo', age: 50 }
];

var rafael = (person) => {
    return person.name === 'rafael';
}

var personRafael = peoples.filter(rafael);

var peoples = peoples.filter((person) => {
    return person.age >= 30;
});



console.log(peoples);
console.log(personRafael);