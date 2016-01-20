'use strict';
let setWeak = new WeakSet();
let obj = {};

//add element
setWeak.add(obj);

//has the element
console.log(`Has obj in setWeak => ${setWeak.has(obj)}`);

//delete the element
setWeak.delete(obj);

//has the element
console.log(`Has obj in setWeak => ${setWeak.has(obj)}`);
