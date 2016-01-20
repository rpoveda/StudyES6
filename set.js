'use strict';

//create set
let oSet = new Set();

//add values in set
oSet.add('Rafael');
oSet.add('Poveda');
oSet.add({Age : 26});

//count the elements of set
console.log(`Total elements => ${oSet.size}`);

//check if the value exist
console.log(`Exist the value 'Rafael' in oSet => ${oSet.has('Rafael')}`);

//foreach in elements
oSet.forEach((value, key) => {
  console.log(`Key => ${key} # Value => ${value}`);
});

//delete the key and value
oSet.delete('Poveda');

//for keys
for(let key of oSet.keys()){
  console.log(`Key => ${key}`);
}

//foreach values
for(let value of oSet.values()){
  console.log(`Value => ${value}`);
}

//set array in set
let array = ['value1', 'value2', 'value3'];
let setArray = new Set(array);
setArray.forEach((value, key) => {
  console.log(`Key => ${key} # Value => ${value}`);
})
