/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {



    let table = document.createElement("table");
   // let row = document.createElement("tr");
   // let cell = document.createElement("td");



    for (let i= 1; i<=10; i++){
       let cell = document.createElement("td");
       let row = document.createElement("tr");
        row.appendChild(cell);
        table.appendChild(row);
    };



document.getElementById('target').appendChild(table);


})();
