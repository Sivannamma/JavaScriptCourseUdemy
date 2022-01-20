
// identation - shfit alt f

/*
let js = 'amazing'
if (js === 'amazing') alert("JavaScript is FUN!");

console.log(40 + 8 + 23 - 10);

console.log('Jonas');

let firstName = "Jonas";
let language;
console.log(language); // we will recieve undefine

console.log(typeof js);
// we will recieve the type , which is string

//tyoeof null returns object but its bug


// challenge - BMI
const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const marksBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;
let isHeigherMarkBMI = marksBMI > johnBMI;
console.log(isHeigherMarkBMI)

// `` is a template string, we can write inside the variables like ${} without closing the braces and opening it again
let age = 24
const sivan = `im a computer science student in age ${age}`;

// is we use ' ' we need to specify \n , if we use ` ` we simply go line under.
const templateLine = `im
taking
line
down`;
const regularLine = 'i need \n back slash n \n to go down';

const inputYear = '1991';
console.log(Number(inputYear)); // converts the string to a number, also on console we can see the diffrences with the colors
console.log(Number(inputYear), inputYear); // see on console , the color diffrences
// we cannot convert strings that are not basically numbers

// on the other way around we can convert numbers to string
console.log(String(23), 23); // also see the color diffrences to see it actually converted
console.log(Boolean('')); // false
console.log(Boolean(0)); // false
console.log(Boolean({})); // empty object returns true

const age1 = 18;

//strict , doesnt do type correction
if (age1 === 18) console.log('u r an adult');
if (Boolean(0) === 0) console.log('will not be printed')
else console.log('because wasnt type correction')

// is doing type correction
if (Boolean(0) == 0) console.log('will be printed')
else console.log('because there was type correction')

const fav = prompt("whats ur fav number?");
console.log(fav)


// switch statement
const day = 'monday';
switch (day) {
    case 'monday': // day==='monday'
        console.log('Plan my course structure');
        break;
    case 'tuesday': // day==='tuesday'
        console.log('Prepare for theory');
        break;
}
*/

// shortner if 
let bool1 = 23 > 10 ? true : false;
console.log(bool1);
let bool2 = 23 > 10 ? console.log('we consoled because its ture') : false;
