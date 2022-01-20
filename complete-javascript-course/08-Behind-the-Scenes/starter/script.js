'use strict'; // if we eliminate use strict, than we can acess everything without errors

// the function is declared in the global scope
function calcAge(birthYear) {
  // age is declade in the variable enviroment
  const age = 2037 - birthYear;
  // const firstName = "Elad"; // if we declare here a variable name as the previous, we will get the most close vale. so there wont be a variable lookup.
  console.log(firstName); // we can acess firstName because it was declared in the global enviroment , there was a variable lookup to find it in the global because it was decalred here.

  function printAge() {
    // accessing age from parent function, accessing birthyear from parent-parent function
    let output = `you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, your are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // we can acess the parent so we reassign it
      output = 'New Output!';
    }
    // also we will recieve an error because functions behaves like variable, and add as decalred inside the function so we cant access it
    //add(2, 3);

    // console.log(str); // here str is not declared, we will get reference error

    console.log(millenial); // millenial is var declared , therefore we can access it from outside the function
  }

  printAge();
  return age;
}

// calcAge(1997); if we call here calcAge then firstName will be undeclared because we called the function calc before we defined firstName
// global variable
const firstName = 'Sivan';
calcAge(1994);
sivan = 10;
var sivan;

console.log(me_);
// let and const cannot acess before declaration
//console.log(job_);
//console.log(year_);

var me_ = 'Sivan';
let job_ = 'Student';
const year_ = 1997;
//works : only function declaration works when callling a function before declaring it
console.log(funcTemp(1, 2));
//doesnt work: even if we gave var instead of const, still its undefined.
//console.log(funcVariable(1, 2));
//console.log(tempFunc(1, 2));

function funcTemp(a, b) {
  return a + b;
}
const funcVariable = function funcTemp(a, b) {
  return a + b;
};
const tempFunc = (a, b) => a + b;

// undefined variable is equal to falsy value.

//console.log(this); // recieve window object.

// inside a variable function, the this keyword will be undefined.
const thisfunc = function (birthYear) {
  console.log(birthYear);
  console.log(this);
};
thisfunc(9);

// inside arrow function the tis keyword inherits from the global page which will result the window object, but if the arrow function was inside another function it will be undefined
const this_func = () => console.log(this);
this_func();

// if theres an object and he has a function inside then the this keyword does works
// this keyword always pointing to the object that called the function.
const sivanna = {
  firstname: 'sivan',
  calc: function () {
    const self = this; // this is a trick in order to save the this object, and now "trying" function can know which property is firstname.
    console.log(this);
    console.log(this.firstname);
    // returns the father, which is the calc and calc age father is sivanna so return this object
    // const geeting = () => console.log(this);
    // geeting();
    // function exprssion inside a function declaration returns undefined for properties inside
    // if we changed it to the arrow function than the this keyword would be inherited from the main function which is the sivanna object.
    const trying = function () {
      //console.Log(this.firstName); // here we recieve undefine
      console.log(self.firstname); // here we uses the trick
    };
    trying();
  },
  // this return the window (the parent)
  greet: () => console.log(this),
};
sivanna.calc();
//sivanna.greet();

// var variavle creates properties in the global enviroment.

const addExpr = function (a, b) {
  console.log(arguments); // returns the parameters that we recieved into the function
};
addExpr(2, 5); // we will recieve an object that we see 2 , 5 there
addExpr(1, 2, 3, 4, 5, 6, 7, 8); // we can send many parameters even if not spesified in the function

// the word argument only is avaliable inside regular function (not in arrow)
