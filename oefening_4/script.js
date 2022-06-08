'use strict'

let scoreKoalas_1 = 65;
let scoreKoalas_2 = 54;
let scoreKoalas_3 = 49;
let scoreKoalas_4 = 23;
let scoreKoalas_5 = 34;
let scoreKoalas_6 = 27;

let scoreDolphins_1 = 44;
let scoreDolphins_2 = 23;
let scoreDolphins_3 = 71;
let scoreDolphins_4 = 85;
let scoreDolphins_5 = 54;
let scoreDolphins_6 = 41;
let winner;

//1
function calcAverage(score_1, score_2, score_3) {
    let average = (score_1 + score_2 + score_3) / 3
    return average
};

//2
let avgKoalas = calcAverage(scoreKoalas_1, scoreKoalas_2, scoreKoalas_3);
console.log('koalas:', avgKoalas);
let avgDolphins = calcAverage(scoreDolphins_1, scoreDolphins_2, scoreDolphins_3);
console.log('Dolphins:', avgDolphins);

//3
function checkwinner(team1, avg1, team2, avg2) {
    if (avg1 >= avg2 * 2) {
        console.log(`team ${team1} is the winner (${avg1} vs ${avg2})`)
        winner = team1
    } else if (avg2 >= avg1 * 2) {
        console.log(`team ${team2} is the winner (${avg2} vs ${avg1})`)
        winner = team2
    } else if (avg1 === avg2) {
        winner = "there is no winner, it's draws"
    }
    else if ((avg1 > avg2 && avg1<avg2*2) ||(avg2 > avg1 && avg2<avg1*2)){
        winner= "no one. The total score is to low"
    }
    return winner;
};

//4
let avgKoalas2 = calcAverage(scoreKoalas_4, scoreKoalas_5, scoreKoalas_6);
let avgDolphins2 = calcAverage(scoreDolphins_4, scoreDolphins_5, scoreDolphins_6);

let winner1 = checkwinner('Koalas', avgKoalas, 'Dolphins', avgDolphins);

console.log('koalas 2:', avgKoalas2);
console.log('Dolphins 2:', avgDolphins2);

let winner2 = checkwinner('Koalas', avgKoalas2, 'Dolphins', avgDolphins2)
console.log(`average Koalas: ${avgKoalas}, average Dolphins: ${avgDolphins}, the winner of game 1 is ${winner1}`);
console.log(`average Koalas: ${avgKoalas2}, average Dolphins: ${avgDolphins2}, the winner of game 2 is ${winner2}`);


//5
