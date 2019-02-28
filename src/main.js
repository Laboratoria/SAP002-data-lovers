const selectTypeElement = document.getElementById("select-type");
let filteredPokemon;
selectTypeElement.addEventListener("change", typeFilter);

function showPokemons(){
    document.getElementById("pokemons").innerHTML = `${filteredPokemon.map(pokemon => `
        <div class="each_pokemon">
        <img src="${pokemon.img}" class="pokemon-img"/>
        <div class="text-name">
            <h3 class="pokemon-name">${pokemon.name}</h3>
        </div>
        </div>
    `
    ).join('')
 }
`}

function typeFilter(){
    filteredPokemon = POKEMON.pokemon.filter(pokemon => {
    return (pokemon.type.includes(selectTypeElement.value));
});
    showPokemons();
}
  
const selectWeaknessesElement = document.getElementById("select-weaknesses");
selectWeaknessesElement.addEventListener("change", weaknessesFilter);

function weaknessesFilter(){
    filteredPokemon = POKEMON.pokemon.filter(pokemon => {
        return (pokemon.weaknesses.includes(selectWeaknessesElement.value));
    })
    showPokemons();
}
















