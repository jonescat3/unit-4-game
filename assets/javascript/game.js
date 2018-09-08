alert("Hello!")

// target score is a random number
var targetScore = Math.floor(Math.random() * 102) + 20;
console.log ("targetScore", targetScore); // to view
// math.floor rounds down to get a whole number, eliminates the decimal


var wins = 0;
var losses = 0;

// this is an action when a function is given, give it 2 parameters
var getRandom = function(min, max) {
    return Math.floor(Math.random() *)
}
var random = getRandom(2,100)
console.log("random",random); 


//crystal objects
var red = getRandom(5,100);
var blue = getRandom(5,100);
var yellow = getRandom(5,100);
var green = getRandom(5,100);

// to test this
console.log("red", red);
console.log("blue", blue);
console.log("yellow", yellow);
console.log("green", green);

// it changes if I hit it or go over it
// I will need a wins and losses scoring system
// each gem has a random number
// total score that add the gems together