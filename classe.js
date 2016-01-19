'use strict';
console.log(`======= RUNNING CLASSE.JS =======`);
class Person {
  constructor(lastName) {
    this.lastName = lastName;
  }

  //property set
  set name(name){
    this.Name = name;
  };

  //property get
  get name(){
    return `This name is ${this.Name}`;
  };

  getLastName(){
    return `This Last name of Person Class - ${this.lastName}`;
  }

  //static function don't need new for use
  static functionStatic(){
    console.log(`This is a static function!`);
  }
}

  class Class01 extends Person {
    //override function of Person Class
    getLastName(){
      return `This Last name of Class01 Class - ${this.lastName}`;
    };
  };

let p = new Person("Poveda");
p.name = "Rafael Poveda";
console.log(p.name);
console.log(p.getLastName());
Person.functionStatic();
let p2 = new Class01("Poveda");
//not found
console.log(p2.name);
console.log(p2.getLastName());
