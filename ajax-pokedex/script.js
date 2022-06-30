'use strict';




let reference= 'https://pokeapi.co/api/v2/pokemon/';
let referenceMoves='';
//let moves=[];
const searchField = document.getElementById('search');


async function getData(url){
    const response = await fetch(url)
    let data = await response.json();
    return data;
//console.log(data)
}

function getMoves(moves){
    if (moves.length >=3) {
        for (let i = 0; i <= 3; i++) {
            console.log(moves[i].move.name)
        }
    } else {
        for (let i = 0; i < moves.length; i++) {
            console.log(moves[i].move.name)
        }
    }
}




function searchPokemon() {
    let pokemon = searchField.value;
    referenceMoves = reference + pokemon;
    getData(reference + pokemon).then(response => {
        let namePokemon = response.name;
        let idPokemon = response.id;
        let imgPokemon = response.sprites.front_default;
        let moves = response.moves//.slice(0,3);
        // console.log(namePokemon);
        // console.log(idPokemon);
        // console.log("img", imgPokemon);
       getMoves(moves)
      //  console.log(response);
        document.getElementById("namePokemon").innerHTML = namePokemon;
        document.getElementById("idPokemon").innerHTML = ` id ${idPokemon}`;
        document.getElementById("imagePokemon").src = imgPokemon;
        //document.getElementById("movesPokemon").innertml = moves;
console.log(moves)
    })
//console.log(moves)
}
// function getMoves(moves){
//     if (moves.length >=3) {
//         for (let i = 0; i <= 3; i++) {
//             console.log(moves[i].move.name)
//         }
//     } else {
//         for (let i = 0; i <= moves.lenght; i++) {
//             console.log(moves[i].move.name)
//         }
//     }
// }





//EVOLUTIONS
//
// function getData2 (url){}
//
// const result = await fetch (url);
//let data= await result.json();
//return data
//
// function searchEvolutions(){
//
// }
//
