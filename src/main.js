const selectTypeElement = document.getElementById("select-type");
let filteredPokemon;
let htmlPokemonsFiltrados;

selectTypeElement.addEventListener("change",pokemonsFilter);

function pokemonsFilter(){
    filteredPokemon = POKEMON.pokemon.filter(pokemon => {
    return (pokemon.type.includes(selectTypeElement.value));
});
showPokemons();
};

function showPokemons(){
    document.getElementById("pokemons").innerHTML = `${filteredPokemon.map(pokemon => `
        <div class="each_pokemon">
        <img src="${pokemon.img}" class="pokemon-img"/>
        <div class="text-name">
            <h3 class="pokemon-name">${pokemon.name}</h3>
            <span>Tipo: ${pokemon.type.join(", ")}</span>
        </div>
        </div>
    `
    ).join('')
 }
`}
    















