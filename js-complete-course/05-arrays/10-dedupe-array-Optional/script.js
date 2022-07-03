/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

//first try


    let uniqueFruits = [...new Set(fruits)];

    console.log(uniqueFruits);




    let uniqueFruits2 = fruits.filter((fruit, index) => {
        return fruits.indexOf(fruit) === index;
    });

    console.log(uniqueFruits2);




  /* for(let i=0; 1<fruits.length; i++){
         if (fruits.has(fruits[i])) {
             fruits.delete(fruits[i])}
     }
  console.log(fruits
 )*/


})();
