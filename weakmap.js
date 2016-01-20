'use strict';
let weakmap = new WeakMap();
let obj = {};

//in WeakMap key is only obj
//set the key and value
weakmap.set(obj, 'my obj');

//get the obj
let getObj = weakmap.get(obj);
console.log(`The value of obj in WeakMap ${getObj}`);

//has element in WeakMap
console.log(`Has obj in weakmap => ${weakmap.has(obj)}`);

//delete element in WeakMap
weakmap.delete(obj);

//has element in WeakMap
console.log(`Has obj in weakmap => ${weakmap.has(obj)}`);
