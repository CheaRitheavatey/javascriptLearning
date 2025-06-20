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
