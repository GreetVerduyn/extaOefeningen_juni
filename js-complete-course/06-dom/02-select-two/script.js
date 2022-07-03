/* becode/javascript
 *
 * /06-dom/02-select-two/script.js - 6.2: sélection par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
//first try


let object= document.querySelector('#target');
   console.log(object);

   let element = document.createElement("p");
   let txt= 'owned';


  element.id ='target';
  element.innerHTML= txt;

   console.log(element)

 object.replaceWith(element)





})();
