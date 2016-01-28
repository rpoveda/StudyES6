'use strict';

var execCall = (callback) => {
    callback.call(this, "rafael", "poveda");   
}

var execApply = (callback) => {
    callback.apply(this, ['rafael', 'poveda']);
}

execCall( (firstname, lastname) => {
   console.log(`${firstname} ${lastname}`); 
});

execApply((firstname, lastname) => {
   console.log(`${firstname} ${lastname}`);
});