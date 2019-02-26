window.onload = function() {
    // alert("carregou");
    showPokemons();

};

function getPokemons() {
    return POKEMON["pokemon"]
}


function showPokemons() {
    let pokemonDiv = document.getElementById("pokemons-div")

    pokemonDiv.innerHTML = `
    ${getPokemons().map((pokemon)=> `
      <figure class="pokemon">
        <img src= "${pokemon["img"]}"
          class ="pokemon-img"/>
         </figure>
      `).join("")}
  `
}