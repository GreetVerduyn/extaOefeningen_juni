/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const heroesUrl = "./../../_shared/api.json";

    async function getData(){
        let data=await fetch(heroesUrl);
        let main= await data.json();
       console.log(main.heroes);
        return main.heroes;
    }

getData()


 document.getElementById('run').addEventListener("click", findHero)

     function findHero() {
         let target = document.getElementById('target');
         let id = (document.getElementById('hero-id').value) - 1;
         let template = document.getElementById('tpl-hero');

         getData()
             .then(result => {
                 let item= template.content.cloneNode(true)
                 item.querySelector('.name').innerText = result[id].name;
                 item.querySelector('.alter-ego').innerText = result[id].alterEgo;
                 item.querySelector('.powers').innerText = result[id].abilities;
                 target.appendChild(item);
             });
     }

})();
