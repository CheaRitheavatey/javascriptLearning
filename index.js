// data type and variable and we use 'var' = variable
var name = "Vatey"
name = 8
// another way to make variable is 'let' and 'const'
let ourname = "ourname"
const pi = 3.14

// whats the diffeence?
/* var = can be used throughout the whole program
    let = can be use only in the scope you defined
    const = variable should never change. just like final keyword in java
    */

// declaring a variable
var a;

// declare and assign to a vale
var b = 2;

a = 7;

b = a;

// print
console.log(b);

// initalize variable to value when declare
var a = 9;

// + - * /
var sum = 10.4 + 90;
var difference = 80 - 50;
var product = 8 * 5;
var quotient = 66 / 9;
var remainder = 10.3 % 3;

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(remainder);

// increment
sum++; 

// decrement
sum--;

// exercise: golf code
var names = ["hole-in-one", "eagle", "birdie", "par", "bogey", "double bogey", "go home"];
function golfScore(par, strokes) {
    if (strokes == 1) {return names[0];}
    else if (strokes <= par - 2) {return names[1];}
    else if (strokes == par -1) {return names[2];}
    else if (strokes == par) {return names[3]}
    else if (strokes == par + 1) {return names[4];}
    else if (strokes == par + 2) {return names[5];}
    else if (strokes >= par + 3) {return names[6];}
}

// console.log(golfScore(5,8));

// count card
var count = 0;
function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 'K':
        case 10:
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
            
    }
    var holdbet = 'Hold';
    if (count > 0) {
        holdbet = 'Bet';
    }
    return count + " " + holdbet;
}

cc(2);
cc('K');
cc(7);
cc('K');
cc('A');
console.log(cc(4))

// object = same as dictionary
var ourDog = {
    "name": "Camper",
    "leg": 4,
    "tail": 1,
    "friends": ["manith", "manoun"]
};

// access the object property
var dogFri = ourDog.friends; // use . notation for the value
var fri = ourDog["friends"] // can do this also

// update object property
ourDog.name = "Sunny";

// add new property
ourDog.bark = "woof woof"; // or
ourDog['bark'] = "woof!"

// delete keyword
delete ourDog.bark;


// we can replace switch statement with object
var lookup =  {
    "alpha": "Adams",
    "bravo": "Boston"
};

console.log(lookup);

// exercise check if it has a specific property
var myObj = {
    gift : "pony",
    pet: "kitten",
    bed : "sleigh"
};

function checkObj(checkprop) {
    if (myObj.hasOwnProperty(checkprop)) {return myObj[checkprop];}
    else {return "not found";}

    
}

// let, const and var
// for var: you can declare it more than one time 
// example,
// var catName = "quincy";
// var catName = "joe";
// but let wont let you initalize it twice

var catNmae = "quincy";
var catNmae = "je";

var global = "var declare globally";
let l = "only in a block of expression that we put it in";

// example
function checkScope() {
    "use strict";

    var i = "function scope";
    if (true) {
        i = "block scope";
        console.log("Block scope i is: " + i); // output: block scope
    }

    console.log("Function scope i is: " + i); // output: block scope
    return i;
}

checkScope();
function checkScope1() {
    "use strict";

    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: " + i); // output: block scope
    }

    console.log("Function scope i is: " + i); // output: block scope
    return i;
}

checkScope1();

// const = same as let but read only aka cannot reassign it afterward
// const = final keyword in java
// let = is the normal that we use 


const s = [5,7,2]; // this is final we cannot modify it but we can mutate it to a different number like this
function editInPlace() {
    "use strict";

    // s = [2,5,7] we cannot do like this because its const
    // but we can do this
    s[0] = 2;
    s[1] = 5;
    s[7] = 7; // output: s = [2,5,7]
}

// so we know that using const cannot protect it from changing 
// thats why we can use Object.freeze(whatever_you_dont_want_to_change);

// example
const MATH_CONSTANT = {PI: 3.14};
Object.freeze(MATH_CONSTANT);

// Anyonomous function
var magic = function(arr1, arr2) {
    return arr1.concat(arr2);
}; // if we have this kind of function we can convert it to an arrow function like below


var magic = (arr1, arr2) => arr1.concat(arr2); // if we return only 1 thing

// rest operator = take a lot of argument using ...

// destructure assignment
var voxel ={
    x: 3.6,
    y: 7.4,
    z: 6.54
}

// if we want to access individual we have to do this
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

// but now with destructing we can do this
const {
    x: j,
    y: k,
    z: p
} = voxel;

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
}

function getTempOfTmr(avgTempertures) {
    "use strict"

    const {tomorrow: tempOfTomorrow} = avgTempertures;
    return tempOfTomorrow;
}

console.log(getTempOfTmr(AVG_TEMPERATURES));


// nested object
const LOCAL_FORECAST = {
    today: {min : 72, max: 84.6},
    tomorrow: {min: 73.3, max: 84.6}
};

function getMaxOfTmr(forecast) {
    "use strict"

    const {tomorrow : {max: maxTmr}} = forecast;
    return maxTmr;
}
console.log(getMaxOfTmr(LOCAL_FORECAST));

// use destructuring assignment to assign variable from array
const [z, x] = [1,2,3,4,5,6]; // z = 1, x = 2 because it will go in order but if we want to access 4 we need to add ,
const [z,x, ,y] = [1,2,3,4,5,6];
// console.log(z,x);

// can also swtich place between 2 number
let a =8, b = 6;
(() => {
    "use strict";
    [a,b] = [b,a]
}) (); // output: a = 6, b = 8

// exercise: remove the first 2 element
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const [, , ...arr] = list
    return arr;
}

// ((list) => {
//     "use strict"
//     const [, , ...arr] = list;
//     return arr;
    
// })


// template literal `` (advantage: can use "" or '' and we put in the next line can put variable right in the string)
const person = {
    name: "zack",
    age: 34
};
const greeting = `Hello, my name is ${person.name}! 
I am ${person.age} year old.`;

console.log(greeting);

// exercise create a list based on array that pass in
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    const resultDisplayArray = [];

    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning"> ${arr[i]} </li`);
    }

    return resultDisplayArray;
}

console.log(makeList(result));

// class
// old way:
var SpaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}

var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);



// new way
class SpaceShuttle {
    //constructor
    constructor(targetPlanet) {this.targetPlanet = targetPlanet}
}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);

// getter setter
class Book {
    constructor(author) {this.author = author;}

    // getter
    get writer() {return this._author;} // ._ = private

    // setter
    set writer(updatedAuthor) {this._author = updatedAuthor;}
}