//Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

let scoreDolphin_1 = 97  //96;
let scoreDolphin_2 = 112 //108;
let scoreDolphin_3 = 101 //89;
//1
let averageDolphins = ((scoreDolphin_1 + scoreDolphin_2 + scoreDolphin_3) / 3).toFixed(2);
console.log('average score Dolphins:', averageDolphins);

let scoreKoalas_1 = 109 //88;
let scoreKoalas_2 = 95  //91;
let scoreKoalas_3 = 106 //123 //110;
let averageKoalas = ((scoreKoalas_1 + scoreKoalas_2 + scoreKoalas_3) / 3).toFixed(2);
console.log('average score Koala :', averageKoalas);

//2
if (averageKoalas > averageDolphins) {
    console.log('Koalas win game')
} else if (averageKoalas === averageDolphins) {
    console.log('draw')
} else {
    console.log('Dolphins win game')
}
;


// bonus 1
if (scoreKoalas_1 > scoreDolphin_1 && scoreKoalas_1 >= 100) {
    console.log('Koalas win round 1')
} else {
    console.log('Dolphin win round 1')
}
if (scoreKoalas_2 > scoreDolphin_2 && scoreKoalas_2 >= 100) {
    console.log('Koalas win round 2')
} else {
    console.log('Dolphin win round 2')
}
;

if (scoreKoalas_3 > scoreDolphin_3 && scoreKoalas_3 >= 100) {
    console.log('Koalas win round 3')
} else {
    console.log('Dolphin win round 3')
}
;


// bonus 2

if (scoreKoalas_1 > scoreDolphin_1 && scoreKoalas_1 >= 100) {
    console.log('Koalas win round 1')
} else if (scoreDolphin_1 > scoreKoalas_1 && scoreDolphin_1 >= 100) {
    console.log('Dolphin win round 1')
} else if (scoreDolphin_1 === scoreKoalas_1 && scoreDolphin_1 >= 100) {
    console.log('draw round 1')
} else {
    console.log('No winners in round 1')

}
;

if (scoreKoalas_2 > scoreDolphin_2 && scoreKoalas_2 >= 100) {
    console.log('Koalas win round 2')
} else if (scoreDolphin_2 > scoreKoalas_2 && scoreDolphin_2 >= 100) {
    console.log('Dolphin win round 2')
} else if (scoreDolphin_2 === scoreKoalas_2 && scoreDolphin_2 >= 100) {
    console.log('draw round 2')
} else {
    console.log('No winners in round 1')
}
;

if (scoreKoalas_3 > scoreDolphin_3 && scoreKoalas_3 >= 100) {
    console.log('Koalas win round 3')
} else if (scoreDolphin_3 > scoreKoalas_3 && scoreDolphin_3 >= 100) {
    console.log('Dolphin win round 3')
} else if (scoreDolphin_2 === scoreKoalas_2 && scoreDolphin_2 >= 100) {
    console.log('draw round 3')
} else {
    console.log('No winners in round 1')
}
;
