/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
//first try

   /* let section= document.querySelector("section.material>span");
    console.log(image)*/
    /*let image3= document.getElementsByTagName('data-image');
   console.log(image2);*/

    let image2=document.getElementById('source');
    let url = image2.getAttribute('data-image');
    console.log(url);
    console.log(image2);

    let element= document.createElement('img');
    element.setAttribute('src', url);
    let figure= document.getElementById('target');
    figure.appendChild(element);

    let section= document.querySelector("section.material>span");
       console.log(section)

    section.remove('span')
})();
