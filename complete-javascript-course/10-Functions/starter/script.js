'use strict';
// const bookings = [];
// // default values : iwe we want skip in sending some parameters, we want them to recieve default values

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // we would need to use this way if default value inside the function wouldnt work
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123'); // because we didnt send the rest of the parameters we will use the default value
// createBooking('LH123', 2, 800); // here we override the default values of price and num of passengers
// createBooking('LH123', 2); // here we override the default values of price
// createBooking('LHG34', undefined, 1000);

// value vs reference
// const flight = 'LH234';
// const sivan = {
//   name: ' Sivan Azari',
//   passposrt: 1234789654,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Miss. ' + passenger.name;

//   if (passenger.passposrt === 1234789654) console.log('Checked in');
//   else console.log('wrong passport!');
// };
// checkIn(flight, sivan); // we send a primitive value and an object, we can see that inside the checkin function we changes its value. therefore it will be changed here as well, because they point to the same memory
// console.log(sivan); // name was changed accordingly as in the function checkIn
// //we can see that because we changed the primitive value as WEBGL_lose_context, no changes happened because its primitive, it means wwe sent a copy and not the original address.

// FIRST CLASS AND HIGHER ORDER
// first class  - functions are treated as values, theyre another type of object.
// object are vlaues and so functions are values too. we can store them in variables and use them accordingly, we can also send functions as parameters into another function
// becuase javascript is firdt class function, it means we can write higher order function (function that can recieve function as parameter, and also return a panction as a result, or both) , when we send function as parameter, this function is called callback function because the current function that recieved it will call/use it later.

// joins the str to one word, without spaces
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// // making the first word to be upper cased.
// const uppserFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// console.log(oneWord('Sivan Namah Azari')); //sivannamahazari
// console.log(uppserFirstWord('Sivan Namah Azari')); // SIVAN Namah Azari

// // higher-order function
// const transform = function (str, fn) {
//   // function has .name -> it returns the name of the function
//   console.log(`we received the function : ${fn.name}`);
//   return fn(str);
// };
// console.log(transform('Sivan Namah', oneWord));

// const high5 = function () {
//   console.log('Hiii!');
// };

// document.body.addEventListener('click', high5); // anywhere where we click the body, we will get this log.
// ['Sivan', 'Martha', 'Elad'].forEach(high5); // on each of the element in this array, the function high5 will be called, therefore 3 times.

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// // it works on the concept of closure
// // one way
// const greetHey = greet('Hi'); // we receuves a function
// greetHey('Mom'); // we call the function that we recieved.
// // second way
// greet('Hi')('Sivan');

// // challenge
// const greetArr = greet2 => name2 => console.log(`${greet2} ${name2}`);
// greetArr('Hello miss')('Sivan');

// THIS KEYWORD
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};
lufthansa.book(239, 'Sivan namah azari');
lufthansa.book(635, 'Elad itzhak');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// in this way when we use the call keyword, it will point to the object that was specified first, in this example it will be eurowings
const book = lufthansa.book;
book.call(eurowings, 23, 'Elad Sivan');
console.log(eurowings.bookings); // we can see it was inserted

book.call(lufthansa, 658, 'Marry Cooper');

const swiss = {
  airline: 'swiss Air lines',
  iataCode: 'Lx',
  bookings: [],
};
book.call(swiss, 23, 'Mom and shai');
console.log(swiss); // we can see it was inserted); // we can see it was inserted

// Apply method
const flightData = [538, 'George cooper'];
book.apply(swiss, flightData);
console.log(swiss); // we can see it was inserted); // we can see it was inserted
book.call(swiss, ...flightData);

//Bind method: allows to manually set the this keyword, it sents the this to whatever value we pass to bind
// it allows us to bind once for each struct and then use it
const bookEW = book.bind(eurowings); // the bind returns a function where the this is whatever we pass to it
bookEW(428, 'Steven Williams');

// here we set it to be more spesific, where the this is euro and the flightnum is 23, and when we use this function those will be the parameters.
const bookEW23 = book.bind(eurowings, 23);
bookEW23('lala Williams');

// with even listiners
lufthansa.planes = 300; // they have 300 planes
lufthansa.buyPlane = function () {
  this.planes++; // each time we buy we want ti ++
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // we spesify bind because the this otherwise will point to the button on the document

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(200));

// another way with function that returns function :
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVATRate = addTaxRate(0.23);
console.log(addVATRate(200));

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

  // this will generte an array with the value 0 in each cell [0,0,0,0]
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    let answer = Number(prompt(this.question + '\n' + this.options.join('\n')));
    if (answer >= 0 && answer <= this.answers.length - 1) {
      this.answers[answer]++;
    }

    // // another way :
    // typeof answer === 'number' &&
    //   answer < this.answers.length &&
    //   this.answers[answer]++;
    this.displayResults();
  },
  displayResults: function (option = 'array') {
    if (option === 'array') {
      console.log(this.answers);
    } else if (option === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }); // setting the call to a new object.

// invoke function expressions :
const runOnce = function () {
  console.log('This will never run again');
};
runOnce(); // but in theory we can recall it in the code later
// IIFE _ IMEDIATLY INVOKE FUNCTION EXPRESSION
// this is how we create a function that will be called only once
// we are warpping the function with ( ----- ) and at the end we call it (); at the end.
(function () {
  console.log('This new func will never run againn!!');
})();
// now with arrow function
(() => console.log('This arrow func will never run again'))();

// we know that one scope doesnt have access to inner scope. (excepts var - like global)

// a closure is not a feature we explicity use, it happens automatically and we need to see when
// A function has access to the variable enviroment (VE) of the execution contect in which it was created.
// closure - variable enviroment attached to the function, exactly as it was at the time and place the function was created, thats why after it dissapear from the call stack, it still had access to the variable it needs.
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
// we will acess the function that we received
booker();
booker();
booker();

console.dir(booker); // we can take a look at the function and its scope, its variables \ closure and more

let f;
const g = function () {
  const a = 23;
  // it will assign to the value outside this scope.
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  // it will assign to the value outside this scope.
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
// re-assign, and f will be changed (and its closure will be changed as well)
h();
f();

const boardPassenger = function (n, wait) {};
const perGroup = n / 3;
