'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhance object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ time, address, mainIndex, startIndex }) {
    console.log(
      `Order received ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

//? Strings

/*
const airline = 'TAP Air Portugal';
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

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😭');
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
*/
//?String methods

/*
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name

const capitalization = function (passenger) {
  const passengerLower = passenger.toLowerCase();
  const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
  console.log(passengerCorrect);
};

capitalization('PraZOL');

//Ccmparing emails

const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io\n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

//replacing

const priceGB = '288,97#';
const priceUS = priceGB.replace('#', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 24 , Boarding door 24';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part od New Airbus plane');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed ');
  } else {
    console.log('Welcome');
  }
};

checkBaggage('I have a laptop,some Food and pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/
//? split and join
/*
console.log('a+very+nice+string'.split('+'));
console.log('Prazol Malla'.split(''));

const [firstName, lastName] = 'Prazol Malla'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('prazol malla');

//Padding

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Prazol'.padStart(25, '+'));

const maskCreditCard = function (number) {
  const str = String(number);
  console.log(str);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(433336675666777));
console.log(maskCreditCard('56954869856496894684566'));

//repeat
const message2 = 'Bad Weather ';
console.log(message2.repeat(5));
*/

//? coding challenge 4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const textarea = document.querySelector('textarea').value;
  const variableList = textarea.split('\n');
  // console.log(variableList);
  for (const [i, n] of variableList.entries()) {
    const [first, second] = n.toLowerCase().trim().split('_');
    // console.log(n, first, second);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )} `;

    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    // i = i + 1;
  }
});

//? coding challenge 3
/*

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

cconst events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}:${event}`);
}
*/
//? maps
/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze,Italy');
console.log(rest.set(2, 'Kathmandu'));

rest
  .set('categories', [
    'Focaccia',
    'Bruschetta',
    'Garlic Bread',
    'Caprese Salad',
  ])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open:D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
*/
//? Sets
/*
const time = 21;
console.log(rest.get(time > rest.get(open) && time < rest.get(close)));

console.log(rest.has('Categories'));
rest.delete(2);
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));
/*
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);
console.log(new Set('Jonas'));
console.log(orderSet.size);
orderSet.delete('Risotto');
orderSet.add('Garlic Bread');

for (const order of orderSet) console.log(order);

//Example
const staff = [
  'Waiter',
  'chef',
  'Waiter',
  'Manager',
  'Manager',
  'Chef',
  'Waiter',
];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
*/
//? coding challenge 2
/*
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

for (const [goalIndex, scorer] of game.scored.entries()) {
  console.log(`Goal ${goalIndex + 1}:${scorer}`);
}

const scorer = {};
for (const [goalIndex, score] of game.scored.entries()) {
  scorer[score] ? scorer[score]++ : (scorer[score] = 1);
}

console.log(scorer);
const odds = Object.values(game.odds);
let total = 0;
for (const odd of odds) {
  total += odd;
}
const avg = total / odds.length;
console.log(avg);

const oddEntries = Object.entries(game.odds);
console.log(oddEntries);

for (const [team, odd] of oddEntries) {
  const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
  console.log(`Odd of ${teamStr} : ${odd}`);
}
*/
// for(const [key])
//? looping objects

/*
//Property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days`;
for (const day of properties) {
  openStr += ` ${day}`;
}

console.log(openStr);

// Property Values

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

*/
//? optional chaining
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);
/*
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed ';
  console.log(`On ${day} we open at ${open}`);
}

// Method

console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist");
console.log(restaurant.prazol?.(0, 1) ?? "Method doesn't exist");

// Arrays

// const users = [{ name: 'jonas', email: 'hello@jonas.io' }];
const users = [];

console.log(users[0]?.name ?? 'User donot exist');
*/
// ? for of loop
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [index, food] of menu.entries()) {
  console.log(`${index + 1}: ${food}`);
}
*/
//? Nullish
/*
restaurant.numGuests = 0;

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

const guests1 = restaurant.numGuests ?? 10;
console.log(guests1);
*/
// ! Use Any data type,return Any data type ,short-circuiting
/*
console.log('---OR----');


console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);
console.log('---AND---');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPasta('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/
//? Destructuring Object
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole,21',
  mainIndex: 2,
  startIndex: 2,
});
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ b, a } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*  // ?Destructuring Array
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destructing
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

// ? spread operator

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

/*
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);

const ingredients = [
  // prompt("Let's make pasta! Ingredients 1?"),
  // prompt("Let's make pasta! Ingredients 2?"),
  // prompt("Let's make pasta! Ingredients 3?"),
];
*/
// ? rest pattern

/*
console.log(ingredients);

restaurant.orderPasta(...ingredients);

//Objects

const newRestaurant = { foundIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

//copying object
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Prazol Malla';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
//Spread ,because on right side of =
const arr = [1, 2, ...[3, 4]];
//REST ,because on left side of =
const [a, b, ...other] = [1, 2, 3, 4, 5];
console.log(a, b, other);

const [pizza, , rissoto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, rissoto, otherFood);

//objects

const { sat, ...weekdays } = restaurant.openingHours;

console.log(weekdays);

//function

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 6);
add(8, 2, 5, 3, 2, 6, 7);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
*/

//? Challenge 1

/*
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
  printGoal: function (...goalScorer) {
    for (let i = 0; i < goalScorer.length; i++) {
      console.log(goalScorer[i]);
    }
    console.log(goalScorer.length);
  },
};

const [player1, player2] = game.players;
console.log(player1, player2);

const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

const allPlayers = [...player1, ...player2];
console.log(allPlayers);

const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

game.printGoal('Davies', 'Muller', 'Lewandowski', 'Kimmich');

game.printGoal(...game.scored);

// const win = team1 < team2 && team2 < team1;
// console.log(win);
team1 < team2 && console.log('team1 is more likely to win');
team2 < team1 && console.log('team2 is more likely to win');
*/
