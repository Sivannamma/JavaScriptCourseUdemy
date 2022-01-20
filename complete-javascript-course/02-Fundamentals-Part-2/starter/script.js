'use strict';

let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // we will recieve an error for not defined in the console, we wrote it with a mistake.
if (hasDriverLicense) console.log("i can drive");

function logger() {
    console.log('my name is sivan');
}
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const fruitPro = function (apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
console.log(fruitPro(4, 5));

// FUNCTIONS 

// anonymous function must be declared first and then we can call it
// regular function can be declared after the place that we call it

const calcAge3 = (birthYear) => 2037 - birthYear;
console.log(calcAge3(1997));

const yearsUntilRetirement = birthYear => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1997));

function cutFruitPieces(fruit) {
    return fruit * 4
}

const fruitProc = function (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);
    const juice = `juice with ${applePieces} apples and ${orangesPieces} oranges`;
    return juice;
}

console.log(fruitProc(1, 1));

// ARRAYS 

//arrays can store multipple values, also from a diff kind, string, int in the same array
const mix = [1, 2, 'sivan'];
const friends = ['elad', 'isabel', 'orly'];
const years = new Array(2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029);
console.log(friends);
console.log(friends[0]);
console.log(years[1]);
console.log(years.length);

// push - insert into the end array
friends.push('shai');
// unshift - insert into the end array
friends.unshift('emma');
console.log(friends);
// pop  - retrives and removes the last element
// shift  - retrives and removes the first element
let popped = friends.shift(); // returns emma
console.log(popped);

// indexof - returns the index of where the element is
console.log(friends.indexOf('shai'));
// if the element is not include, returns -1

// include - returns bool if the element is inside or not


// OBJECTS
const sivan = {
    firstName: 'Sivan',
    lastName: 'Azari',
    age: 24,
    job: 'Uneployed',
    friends: friends
};
console.log(sivan);

// we recieve information with the dot notation
console.log(sivan.lastName);
// we recieve information with the [] notation
console.log(sivan['lastName']);

const nameKey = 'Name';
console.log(sivan['last' + nameKey]);
console.log(sivan['first' + nameKey]);

// what is the diffrence between dot and [ ] notation : . is more cleaner and easy to use.
const intrestedIn = prompt('what do u want to know about sivan? firstName, lastName, age, job , friends');
//we cant use the dot notation here, because we dont have an entity named like that, we want the value inside it, therefore we use [ ] notation.
console.log(sivan[intrestedIn]);
// if the user type an entity that is not included, we will get undefined as an error
console.log(sivan.firstName + ' has ' + sivan.friends.length + ' friends, and her best friend is called ' + sivan.friends[0]);

// objects methods :
const sivanAzari = {
    firstName: 'Sivan',
    lastName: 'Azari',
    birthYear: 1996,

    job: 'Uneployed',
    friends: friends,

    //the syntax has to be line that
    calcAge: function (birthYear) {
        return 2037 - birthYear;
    },

    // better version because we use the entity of the object, and we dont need to get it from outside like the upper one
    calcAgeBetterWay: function () {
        return 2037 - this.birthYear;
    },
    calcAddingAgeEntity: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    }
};
console.log(sivanAzari['calcAge'](1997));
console.log(sivanAzari.calcAge(1997));

console.log(sivanAzari.calcAgeBetterWay());
sivanAzari.calcAddingAgeEntity();
console.log("hi " + sivanAzari.age);

//The Math.trunc() function returns the integer part of a number by removing any fractional digits.