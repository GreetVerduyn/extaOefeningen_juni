'use strict'

//1
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
//2
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi)
console.log(john.bmi)

//3
if (mark.bmi>john.bmi){
    console.log(`${mark.fullName} 's BMI (${mark.bmi.toFixed(2)}) is higher than ${john.fullName} 's (${john.bmi.toFixed(2)}).`)
} else {
    console.log(`${john.fullName} 's BMI (${john.bmi.toFixed(2)}) is higher than ${mark.fullName} 's (${mark.bmi.toFixed(2)}).`)
}
