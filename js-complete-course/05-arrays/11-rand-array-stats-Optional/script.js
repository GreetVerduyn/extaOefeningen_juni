/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {





























    // first try

   /* let numbers= Array(10).fill().map(() => Math.round(Math.random() * 100))
console.log(numbers)*/  // 0 is also shown

    var numbers = [];
    while(numbers.length < 10){
        var r = Math.floor(Math.random() * 100) + 1;
        if(numbers.indexOf(r) === -1) numbers.push(r);
    }
    console.log(numbers)


//fill HTML

for (let i=0; i<numbers.length; i++){
    document.getElementById('n-' + (i+1)).innerHTML=numbers[i];
}

   // const min = Math.min(...numbers)
    document.getElementById('min').innerHTML=Math.min(...numbers);
    document.getElementById('max').innerHTML=Math.max(...numbers);

   /* const som = (number, curr) => number + curr;
    console.log(numbers.reduce(som));*/

    document.getElementById('sum').innerHTML=numbers.reduce((number1, number2)=> number1+number2, 0);
    document.getElementById('average').innerHTML=numbers.reduce((number1, number2)=> number1+number2)/numbers.length;


})();
