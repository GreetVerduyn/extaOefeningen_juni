'use strict';





let basicUrl= 'https://pokeapi.co/api/v2/pokemon/'

async function getData(url){
    let result= await fetch(url);
    let data = await result.json();
    return data
}




















































let reference= 'https://pokeapi.co/api/v2/pokemon/';
let referenceMoves='';
let moves=[];
const searchField = document.getElementById('search');



async function getData(url){
    const response = await fetch(url)
    let data = await response.json();
    console.log('data:',data);
    return data;

}

function getMoves(allMoves){
    if (allMoves.length >=3) {
        for (let i = 0; i <= 3; i++) {

            moves.push(allMoves[i].move.name);
        }
    } else {
        for (let i = 0; i < allMoves.length; i++) {
         moves.push(allMoves[i].move.name)
        }
    }
    console.log(moves)
}




function searchPokemon() {
    let pokemon = searchField.value;
    referenceMoves = reference + pokemon;
    getData(reference + pokemon).then(response => {
        let namePokemon = response.name;
        let idPokemon = response.id;
        let imgPokemon = response.sprites.front_default;
        let allMoves = response.moves;

        // let allMoves = response.moves.slice(0,3).map(move => move.move.name);

        // console.log(namePokemon);
        // console.log(idPokemon);
        // console.log("img", imgPokemon);
        getMoves(allMoves);



        document.getElementById("namePokemon").innerHTML = namePokemon;
        document.getElementById("idPokemon").innerHTML = ` id ${idPokemon}`;
        document.getElementById("imagePokemon").src = imgPokemon;
        document.getElementById("movesPokemon").innerHTML = moves;


    })

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
