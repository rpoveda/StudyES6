'use strict';
console.log(`======= RUNNING MAP.JS =======`);
//create  a new Map
let map =  new Map();
let obj = { firstName: 'Rafael', lastName: 'Poveda' };

//set key obj and value obj in the map
map.set('obj', obj);

//get value in map
let getObj = map.get('obj');
//show property and values
for(var item in getObj){
  console.log(`Property -> ${item} # Value -> ${getObj[item]}`);
}

//show size of map
console.log(`Exists ${map.size} elements in map`);

//foreach in map complete
map.forEach((value, key) => {
  console.log(`Key -> ${key} # Value -> ${JSON.stringify(value)}`);
}, map);

//foreach in keys of map
for(var key of map.keys()){
  console.log(`Key -> ${key}`);
}

//foreach in values of map
for(var value of map.values()){
  console.log(`Value -> ${JSON.stringify(value)}`);
}

//check if value exist
console.log(map.has('obj'));

//delete value of map and show size of map
map.delete('obj');
console.log(`Size -> ${map.size}`);

//pass array for map
let myArray = [['key01', 'value01'], ['key02', 'value02']];
let arrayToMap = new Map(myArray);

arrayToMap.forEach((value, key) => {
  console.log(`Key array -> ${key} # Value array -> ${value}`);
}, arrayToMap);
