'use strict';





let basicUrl= 'https://pokeapi.co/api/v2/pokemon/';


async function getData(url){
    let result= await fetch(url);
    let data = await result.json();
    //console.log(data)
    return data
}

function renderPokemon(name, id, img, moves){
    let template= document.getElementById('template');
    let target= document.getElementById('target');
    let item = template.content.cloneNode(true);

    console.log(item);

    item.querySelector('.name').innerHTML=name;
    item.querySelector('.image').src=img;
    item.querySelector('.id').innerHTML=id;
    item.querySelector('.move1').innerHTML=moves[0].move.name;
    item.querySelector('.move2').innerHTML=moves[1].move.name;
    item.querySelector('.move3').innerHTML=moves[2].move.name;
    // item.querySelector('.move4').innerHTML=moves[3].move;


    target.appendChild(item)
}


function findPokemon() {
    let search = document.getElementById("search").value;
    getData(basicUrl+search)
        .then(result => {
            let namePokemon = result.name;
            let idPokemon = result.id;
            let img = result.sprites.front_default;
            let moves = result.moves.slice(0,3);
            renderPokemon(namePokemon, idPokemon, img, moves);
            let evolutionsUrl=result.species.url;
            return getData(evolutionsUrl)
        })
       .then(evolutions=>{
            let evolutionChain=evolutions.evolution_chain.url;
           // console.log(evolutionChain);
            return getData(evolutionChain);

        })
        .then(chain=>{
            let evolution=chain.chain.evolves_to[0].species.name;
           // console.log('evolution:', evolution1);
        })

}


/*


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

*/


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

