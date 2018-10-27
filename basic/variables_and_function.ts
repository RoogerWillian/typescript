// Variables
let message: string = "Help me, Obi-Wan Kenobi. You're my only hope!"
console.log(message);

let episode: number = 4;
console.log("This is episode " + episode);
episode = episode + 1;
console.log("Next is episode " + episode);

let favoriteDroid
favoriteDroid = "BB-8"
console.log("My favorite droid is " + favoriteDroid)

// Functions
let isEnougtToBeatMF = function(parsecs: number): boolean {
  return parsecs < 12
}

// Arrow function
let distance = 11
console.log(`Is ${distance} parsecs enought to beat Millenium Falcon? ${isEnougtToBeatMF(distance) ? 'YES' : 'NO'}`)

let call = (name: string) => console.log(`Do you copy, ${name} ?`)
call('R2')

function inc(speed: number, inc: number = 1): number {
  return speed + inc;
}

console.log(`inc (5, 1) = ${inc(5, 1)}`)
console.log(`inc (5) = ${inc(5)}`)
