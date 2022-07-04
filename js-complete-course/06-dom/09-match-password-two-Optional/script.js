/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById('run').addEventListener('click', checkPasswords)

    function checkPasswords(){
        let box1 = document.getElementById('pass-one');
        let box2 = document.getElementById('pass-two');
        let passW1 = box1.value;
        let passW2 = box2.value;
             if (passW1 !== passW2){
                box1.classList.add('error');
                box2.classList.add('error');
             }
    }
})();
