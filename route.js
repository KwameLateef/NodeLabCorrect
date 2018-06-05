"use strict";

function displayRandom () { //function called displayRandom returning a random quote
    let randomQuotes =  ["If it bleeds we can kill it", "Ebrace the suck", "Just do it", "What I do is not up to you", "Doubt kills more dreams than failure ever will", "Truth is on the side of the oppressed"]; // Random quotes of arrays
    let quote = randomQuotes[Math.floor(Math.random() * randomQuotes.length)]; //Quotes is giving you a random quote from the array
    return quote; //returns the quote to be used later
}
 
module.exports = displayRandom; // exporting displayRandom to sever.js