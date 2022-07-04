/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

   let text = document.getElementById('validity');
   let input = document.getElementById('pass-one');

   /*input.addEventListener("keydown", function(e)) {
       if (e.code === 'enter') {
           checkPassword();
       }
   };*/

   input.onkeydown=(function(event) {
       if (event.keyCode == 13) {
          conslole.log('enter is typed')
           checkPassword();
       }
   });




  function checkPassword(){
      console.log('Hello')
        if (text.value.length >=8){
            text.innerHTML='OK';
        }

   }


})();
