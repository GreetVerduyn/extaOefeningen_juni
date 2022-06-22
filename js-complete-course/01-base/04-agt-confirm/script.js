/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let age = prompt("What is your age?");
let gender = prompt("What is your gender");
let city = prompt("In which city do you live");


(function() {
    if (confirm(`You are ${age} years old, are ${gender} and live in  ${city}.?`) === true) {
    } else {
        let age = prompt("What is your age?");
        let gender = prompt("What is your gender");
        let city = prompt("In which city do you live");
    }


})();
