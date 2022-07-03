/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let originalImage= document.querySelector('section.material>figure>img').getAttribute('src');
    let newImage= document.querySelector('section.material>figure>img').getAttribute('data-hover');


    let toChange=document.querySelector('section.material>figure>img')


        toChange.addEventListener("mouseenter", function(event){event.target.src=newImage});
        toChange.addEventListener("mouseleave", function(event){event.target.src=originalImage});

       // .src=newImage;
    console.log(toChange);


})();
