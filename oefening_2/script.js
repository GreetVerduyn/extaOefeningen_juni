let weightJonas = 65;
let weightAn = 55;
let lenghtJonas = 1.98;
let lenghtAn = 1.64;

let bmiJonas = (weightJonas / lenghtJonas * lenghtJonas).toFixed(1);
let bmiAn = (weightAn / lenghtAn * lenghtAn).toFixed(1);


if (bmiJonas > bmiAn) {
    console.log(`the BMI of Jonas (${bmiJonas}) is the highest`)
} else {
    console.log('the BMI of An' + bmiAn +  'is the highest')
}

//console.log('bmiAan=',bmiAn, 'bmiJonas=',bmiJonas);