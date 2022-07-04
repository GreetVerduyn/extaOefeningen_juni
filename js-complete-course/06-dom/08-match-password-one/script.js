/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById('run').addEventListener("click", checkData);


 //console.log(pasW1)

function checkData(){
    let pasW1= document.getElementById('pass-one').value;
    let pasW2= document.getElementById('pass-two').value;
    let border1= document.getElementById('pass-one');
    let border2= document.getElementById('pass-two');
    if (pasW1 !== pasW2){
        border1.style.borderColor='red';
        border2.style.borderColor='red';

    }

    console.log(pasW1)

    console.log(pasW2)
}
})();
