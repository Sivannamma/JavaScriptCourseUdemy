'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // here we destructed while we recieved an object to the function
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `o+rder recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1} , ${ing2}, ${ing3} `
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(otherIngredients);
    console.log(mainIngredient);
  },
};
//Part5:
// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };
// if there is an entity called numGuest, than we take its value, otherwise it will be null - falsy value, and we will take 10
// first way :
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// another way :
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// we know there is a problem because if we have 0 num guest it will be a falsy value and we will get 10, however we want to keep the zero.
// the better way : logical ||
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// logical &&
// here we have a problem because && is evauating until a false value is accuring
// rest1.owenr doesnt exsist and it wont continue to evaluate anonymous and we will recieve undefined.
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
//&& assignment operator :
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);
//Part4:
// Uses any data type, they return any data type. they do short circle evaluation .
// Short circuting is if the first value is true, it wont check the second and the third and so on.
// || op
// console.log(3 || 'jonas'); // the result will be 3 on the onsole
// console.log('' || 'jonas'); // jonas , '' is falsy
// console.log(true || 'jonas'); // true
// console.log(undefined || null); // null , undefined is falsy, and so is null but we return the last we checked in that case.
// console.log(undefined || 0 || '' || 'hello' || 23 || null); // hello

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
// we need to pay attention that if numGuests do actually defined and has the value 0 inside, we will still get 10 because 0 is falsy number. so we need to pay attention to the falsy values that we can recieve and see if its the outcome we want
// we can overcom it like this
//restaurant.numGuests = 0;
// ?? is nullish coalescing operator (nullish is null and undefined) so 0 and '' can escape this test.
//const correctGuests2 = restaurant.numGuests ?? 10;
//console.log(correctGuests2);
// // && op
// console.log('_____AND__________');
// // if the first value is false, stops.
// console.log(0 && 'jonas'); // 0
// console.log(7 && 'jonas'); // 'jonas' because evaluation continue and return the last variable that was on when evaluated
// console.log('Hello' && 23 && null && 'jonas'); //null
// if (restaurant.orderPizza) {
//   // if the function exsist we want to call it
//   restaurant.orderPizza('mushrooms', 'olives');
// }
// // not good method to use && but works
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'olives');

//Part3
// const arr = [7, 8, 9];
// // bad method
// const badArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badArr);
// //good method - using spread operator "..."
// const goodArr = [1, 2, ...arr];
// console.log(goodArr); // array and values
// console.log(...goodArr); // values
// // building new array and taking vlues from the obj.
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // copy array :
// const mainMenuCopy = [...restaurant.mainMenu]; // shallow copy of the array.
// // join 2 arrays or more.
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// const str = 'Jonas';
// // spreading the characters of the strings
// const letters = [...str, ' ', 's.'];
// console.log(letters);
// // Iterables : arrays , strings , maps, sets , NOT objects

// // getting from prompt window :
// const ingredients = [
//   prompt("let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(...ingredients);
// // calling the function and extracting the values from ingrediesnt array.
// restaurant.orderPasta(...ingredients);

// const newRestuarant = { foundIn: 1997, ...restaurant, founder: 'Sivanni' };
// console.log(newRestuarant);

// const copyRestuarant = { ...restaurant };
// console.log(copyRestuarant);
// copyRestuarant.name = 'Sivannochi';
// // will be diffrent because he name is primitive type that we copied and now changing.
// console.log(copyRestuarant.name);
// console.log(restaurant.name);
// // will be the same because there was an object inside an object, which on that it is a shallow copy
// copyRestuarant.categories[0] = 'Pizza Pazaz';
// console.log(restaurant.categories[0]);

// rest operator : to collect multiple variable and pack them into array
//SPREAD IS  AFTER THE =
// const arr = [1, 2, ...[3, 4]]; // spreading 3,4 into the arr
// // REST IS BEFORE THE = (there could be only one rest element)
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
// // we want the first and the third elements, so we take one, skip two, take three, and combine all the rest into otherFood.
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);
// // object
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
// console.log(sat);

// Functions with REST ///
// const add = function (...numbers) {
//   console.log(numbers);
// };

// add(2, 3);

// add(5, 4, 7, 2);
// // example of using spread and then rest
// const x = [23, 5, 7];
// add(...x); // we unpack using spread, and when we get it in the function we pack them using rest.
//restaurant.orderPizza('mushrooms', 'olives', 'pineapples');
//restaurant.orderPizza('mushrooms'); // the other variable will be empty
// //Part2
// // in objects , destrture is by the real name of the enteties and doesnt have to be in the right order.
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // way to specify diffrent variable name :
// const {
//   name: restuarntName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restuarntName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// //setting default values in case menu doesnt exsist in the object
// console.log(menu, starters);

// // mutating variables :
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 17 };
// // {a,b}=obj ->error, we cannot assign anything to a code block.
// //this is the way to do it :
// ({ a, b } = obj);
// console.log(a, b);

// // nested object
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// // we send an object and when the function recieved it, it does destructuring to in to minivariables.
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole , 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

//Part1
// //destructuring method
// const a = [1, 2, 3];
// const [x, y, z] = a; // unpacking the array and each elemnt goes to the right variable
// console.log(x, y, z);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// // swapping elements :
// //method1;
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// //method2:
// [main, secondary] = [secondary, main];
// console.log(main, secondary);
// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested; // we want the first element and the last element.
// console.log(i, j);
// const [i_, , [j_, k_]] = nested; // destructure inside a destructure.
// console.log(i_, j_, k_);

// // if we try to take more values than there r in the array we will recieve undefine in those indexes.
// const [p = 0, h = 8, t = 0] = [1, 1];
// // we assign default values in case of undefined from destructure.

//Coding challenge :
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// game.scored is an array and it is iterable so we can use entires() like that
// for (const [index, player] of game.scored.entries()) {
//   console.log(`Goal ${index + 1} : ${player}`);
// }
// let avg = 0;
// // object is not iterable therefore we need to use object.values
// for (const value of Object.values(game.odds)) {
//   avg += value;
// }
// avg /= Object.values(game.odds).length;
// console.log(avg);
// for (const [key, value] of Object.entries(game.odds)) {
//   const str = key == 'x' ? 'draw' : `victory ${game[key]}`;
//   console.log(`Odd of ${str} : ${value}`);
// }

// let [gk1, ...fieldPlayers] = game.players[0];
// console.log(gk1);
// console.log(fieldPlayers);
// let allPlayers = [...game.players[0], ...game.players[1]];
// console.log(allPlayers);
// let playersFinal = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];
// console.log(playersFinal);

// let team1odd = game.odds.team1;
// let team2odd = game.odds.team2;
// let x = game.odds.x;
// console.log(team1odd);
// console.log(x);
// console.log(team2odd);
// // a better way is :
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);
// function printGoals(...playersScore) {
//   let count = 0;
//   for (let i = 0; i < playersScore.length; i++) {
//     count = 0;
//     for (let j = 0; j < game.scored.length; j++) {
//       if (playersScore[i] === game.scored[j]) count++;
//     }
//     console.log(playersScore[i] + ' ' + count);
//   }
// }
// printGoals('Lewandowski', 'Gnarby', 'Hummels');

// // we will evaluate the first term, if it is true, then we will continue to the console, otherwise we wont. therefore it will be good because if team 1 < team 2 we will go to the print.
// // because team 2 is not < team 1 , we wont continue to the log and then onlt the print we wanted will be printed.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team2 < team1 && console.log('Team 2 is more likely to win');

// array part :
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // this is like a for-each loop
// // if we write of, it takes the value
// // if we write in, it takes the index and then we need to extract ourselves.
// for (const item of menu) console.log(item);
// // here we will get the index and the item inside a structure
// for (const item of menu.entries()) console.log(item);
// // here we will destruct it
// for (const [index, item] of menu.entries())
//   console.log(item + ' index : ' + index);
// // another method
// //[console.log([...menu.entries()])];

// Optional chaining
// In object we have multiple values , and possibily objects inside an object. if we want to log \ acess some entities , we need to make sure they exsist, and it can get out of hand if we need to check every step down in order to acess.
// therefore we have the optional chaining that only if the expression before is not null or undefined it will continue to the next
// now for this we will recieve undefined, because mon doesnt exsist. if we didnt use the ? we would get an error because we would try to acess open inside mon that doesnt exsist.
// console.log(restaurant.openingHours.mon?.open);
// // we could check multiple
// console.log(restaurant.openingHours?.mon?.open);

// // this should work -
// console.log(restaurant.openingHours?.fri?.open);

// // example :
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   console.log(day);
//   // if we get undefined we will want to write closed.
//   // we need to use the nullish (??) because 0 is a good value so we cant use ||
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`we open at ${open}`);
// }
// //methods :
// // method that exsist
// console.log(restaurant.order?.(0, 1) ?? 'Method doest exsist');
// // method that doesnt exsist
// console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method doest exsist');

//Arrays
//const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];
// console.log(users[0]?.name ?? 'User array is empty');

// looping over objects :

// properties will now hold the values inside openingHours
// here we take only the key, its an object, so we recieve the keys
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);
// let openStr = `we are open on ${properties.length} days : `;

// iterating over the openHours values
// one way : through the object itself
// for (const day of Object.keys(restaurant.openingHours)) {
//   openStr += `${day}, `;
// }

// second way from the object we extracted
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // here we take the inner parts of the object -> the values.
// // keys + values together
// const values = Object.values(restaurant.openingHours);
// console.log(values);

// // entire object
// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// // regular print
// // for (const x of entries) console.log(x);

// // in this for we use destructure m we get the key, and the open close times from the object.
// //[key,value] - is a destruction. and we take the value which is an objct, and we destruct it again to {open, close}
// for (const [key, { open, close }] of entries)
//   console.log(`On ${key} we open at ${open} and closed at ${close}`);

// SETS!
// set can hold diffrent data-types
// inside a set there are not duplicated so in our set down here we will have 3 values only. duplicated are eliminated.
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
//   'Risotto',
// ]);
// console.log(ordersSet);

// // order inside the set is irelevent
// // sets are iterable.

// // here in this set, jonas wont be one element inside the set, it will be spread to char's
// // J , O , N , A , S , each char seperatly
// console / console.log(new Set('Jonas'));
// // size of set
// console / console.log(ordersSet.size);
// // method to check if element is exsist there
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));

// // add method
// ordersSet.add('Garlic Bread');
// // delete elements
// ordersSet.delete('Risotto');
// console.log(ordersSet);

// // there is no point in retrieving elements from a set
// // in sets there are no indexes
// // the point is only to know if the element is there
// // although all - set is iterable

// for (const order of ordersSet) console.log(order);

// // the most use of set is to remove duplicates.
// const staff = ['Waiter', 'Chef', 'Manager', 'Chef', 'Waiter'];
// //if we want to create an option to know only the various position without the duplication, we can do
// //this is a set of the unique
// const staffUnique = new Set(staff); // sending the arrays inside the set
// console.log(staffUnique);
// // because array and set are iterable, we can create an array and unpack the set inside.
// // this is a good method to not create an actual set value, already spreading it inside the array
// const staffArrUnique = [...new Set(staff)];
// console.log(staffArrUnique);

// // an example to know how many diffrent chars inside a name is to create a set with it
// console.log(new Set('sivanazari').size);

// MAPS!
// const rest = new Map(); // empty map
// //add: fill up the map - set method
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Italy, Firenze');
// rest.set(2, 'Portugal , Lisbon');
// // when we use the function set, it returns all the map. thats why on console we recieve all the values and keys.
// console.log(rest.set(2, 'Portugal , Lisbon'));

// // because the set returns the map, we can concat operations
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// // read data from map
// console.log(rest.get('name')); // we pass the key
// console.log(rest.get('close')); // we pass the key
// console.log(rest.get(true)); // we pass the key
// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// // if map contains a key
// console.log(rest.has('open'));
// // delete by key
// rest.delete('open');
// console.log(rest);
// // size
// console.log(rest.size);
// // remove all elements from the map
// // rest.clear();
// // console.log(rest.size);

// rest.set([1, 2], 'Test');
// console.log(rest);
// rest.get([1, 2]);
// // we will get here in the log undefined because its not a primitive type
// // the array has a unique address, and when we write [1,2] its the same values inside the array but its not the array we created when we inserted it.
// console.log(rest.get([1, 2]));

// const arr = [2, 3];
// rest.set(arr, 'Hello');
// console.log(rest.get(arr)); // will work

// // here it is  a use of map with dom elements :
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

// // creating a map that we give to it array of arrays.
// const question = new Map([
//   ['question', 'what is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct :) '],
//   [false, 'try again :( '],
// ]);
// console.log(question);

// // there is a resemblence between the question map object than the object e recieved by doing Object.entries(opeingHours)

// // Convert object to map :
// // Object.entries(openingHours) returns array of arrays, therefore we can put it inside the map
// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// // console.log(answer);
// // // here we check if question.get('correct') === answer) is true of false
// // // then if its true, it will go to the key true and recieve the calye correct, otherwise if its false recieve  try again
// // console.log(question.get(question.get('correct') === answer));

// // convert map to array
// console.log(...question);
// console.log(...question.keys());
// console.log(...question.values());

// // Coding challenge :
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, 'Substitution'],
//   [47, '⚽ GOAL'],
//   [61, 'Substitution'],
//   [64, 'Yellow card'],
//   [69, 'Red card'],
//   [70, 'Substitution'],
//   [72, 'Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, 'Yellow card'],
// ]);
// // recieveing ...gameEvents.values() the values of the map
// // inserting into a set to remove duplicates
// const newSet = new Set([...gameEvents.values()]);
// console.log(newSet);
// //recieving the values of the set and spreading it in order to insert into array
// const arr = [...newSet.values()];
// console.log(arr);
// gameEvents.delete(64);
// console.log(gameEvents);
// console.log(`on avg, every ${90 / gameEvents.size} event happend`);

// for (const [key, value] of gameEvents) {
//   const print =
//     key < 45
//       ? console.log(key + ' first half ' + value)
//       : console.log(key + ' second half ' + value);
// }

// strings are 0' based.
const airline = 'Tap Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

// slice method :
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(1, -1)); // cutting the first and the last chars

const checkMiddleSeat = function (seat) {
  // B and E are middle seats :
  if (seat.slice(-1) === 'B' || seat.slice(-1) === 'E')
    console.log('You got middle seat');
  else console.log('You got lucky');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'sIVan';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@sivan.io';
const loginEmail = ' Hello@Sivan.Io \n';

const lowerEmail = loginEmail.toLowerCase(); // converting to lower case
const trimmedEmail = lowerEmail.trim(); // removes spaces and \n
console.log(trimmedEmail);

// instead of doing all this process by many lines, we can do it directly in one line
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
// we use chaining with replacing (replace pund to dollar, and comma to dot)
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);
const announcement = 'All passengers go to door 23, this door is the departure';
// replace method replace only the first accurence, replace all replaces all the ecourences
console.log(announcement.replaceAll('door', 'gate'));
//another way to use regex expressions :
console.log(announcement.replaceAll(/door/g, 'gate'));

// Bolleans
const plane1 = 'Airbus A32neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('Airbus'));

if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('part of the new airbus family');
}

// Practice
const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes('knife') || item.includes('gun')) {
    console.log('YOU ARE NOT ALLOWED ON THE PLANE');
  } else {
    console.log('you are allowed');
  }
};

checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('got some snacks and a gun for protection');

// split method - split strings into multiple parts based on a divider
console.log('a+very+nice+string'.split('+')); // will split the string by + , and the result will be inserted int array
console.log('Sivan Azari'.split(' '));
const [firstname, lastname] = 'Sivan Azari'.split(' ');

// join is the opposite of split
const newname = ['Miss.', firstname, lastname.toUpperCase()].join(' '); // returns a string that is concatinated by the specified join
console.log(newname); // MR. sivan AZARI

// this function recieves a string, we split it by spaces, than each word we will make the beggining with upper case.
// the split will give us an array, then we iterate on the array and each word we take the index 0 as uppercase and the rest as original.
// then we join the array to recieve the string back
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

// another way is

const capitalizeName2 = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName2('Jessica ann smith davis');
capitalizeName('sivan namah azari'); // Sivan Namah Azari

// Padding - add number of char until a string has desired length

const msg = 'go to gate 23';
console.log(msg.padStart(25, '+')); // padding with + until the string will be in length 25 (at the start we push)
console.log(msg.padStart(25, '+').padEnd(30, '+'));

// this function recieves a credit card number, and returns the number with only 4 last digit showing
// 123456789 -> *****6789
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard('123456789')); // we can send a string
console.log(maskCreditCard(123456789)); // we can send a number

// repeat - repeat same string several times
const msg2 = 'Bad weather.... all departure are late  ';
console.log(msg2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInLine(5);
planesInLine(2);

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   // getting the text and replacing it to lowercase
//   const text = document.querySelector('textarea').value.toLowerCase();
//   const textList = text.split('\n');
//   console.log(textList);
//   const newText = [];
//   for (const [ind, elem] of textList.entries()) {
//     let [first, second] = elem.trim().split('_');
//     newText.push(
//       (first + second.replace(second[0], second[0].toUpperCase())).padEnd(
//         17,
//         ' '
//       ) + '✅'.repeat(ind + 1)
//     );
//   }
//   console.log(newText.join('\n'));
// });

/*
///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
*/

const flights1 =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const lines = flights1.replaceAll('_', ' ').split('+');
for (const line of lines) {
  const information = line.trim().split(';');
  console.log(
    `${information[0]} from ${information[1]
      .slice(0, 3)
      .toUpperCase()} to ${information[2]
      .slice(0, 3)
      .toUpperCase()} (${information[3].replace(':', 'h')})`
  );
}
