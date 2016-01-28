'use strict';
var fn = {
  fn1: function(name){
    console.log(`Name ${name}`);
     return this;
  },
  fn2: function(lastname){
     console.log(`Last Name ${lastname}`); 
     return this;
  }
};

fn.fn1('rafael').fn2('poveda');