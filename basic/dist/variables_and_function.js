// Variables
var message = "Help me, Obi-Wan Kenobi. You're my only hope!";
console.log(message);
var episode = 4;
console.log("This is episode " + episode);
episode = episode + 1;
console.log("Next is episode " + episode);
var favoriteDroid;
favoriteDroid = "BB-8";
console.log("My favorite droid is " + favoriteDroid);
// Functions
var isEnougtToBeatMF = function (parsecs) {
    return parsecs < 12;
};
// Arrow function
var distance = 11;
console.log("Is " + distance + " parsecs enought to beat Millenium Falcon? " + (isEnougtToBeatMF(distance) ? 'YES' : 'NO'));
var call = function (name) { return console.log("Do you copy, " + name + " ?"); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5, 1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
