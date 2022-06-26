
let reference= 'https://pokeapi.co/api/v2/pokemon/';
const searchField = document.getElementById('search');

async function getData(pokemon){
    const response = await fetch(reference + pokemon)
    var data = await response.json();
    return data;
}


function searchPokemon(){
    let pokemon = searchField.value;
    getData(pokemon).then(response =>{
      let namePokemon = response.name;
      let idPokemon = response.id;
        console.log(namePokemon);
        console.log(idPokemon);
    } )


}



