# The-Watch
# extaOefeningen_juni

10 kaarten 

functie ad random leggen

CSS:

Position your DIVs within a parent DIV with display: flex

Set each of the children display: none

JS:

select the children of the parent DIV.
create an array of references to the selected divs
Use shuffleArray to randomize the order of the array elements
Iterate the array of references and use the array order to position the child divs -
document.getElementByID(arr).style.order = array_element_number
document.getElementByID(arr).style.display = ‘block’
/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
for (var i = array.length - 1; i > 0; i--) {
var j = Math.floor(Math.random() * (i + 1));
var temp = array[i];
array[i] = array[j];
array[j] = temp;
}
}