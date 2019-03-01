const selectTypeElement = document.getElementById("select-type");

selectTypeElement.addEventListener("change", typeFilter);

function showPokemons(filteredPokemon){
    document.getElementById("pokemons").innerHTML = `${filteredPokemon.map(pokemon => `
        <div class="each-pokemon">
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
    let filteredPokemon = POKEMON.pokemon.filter(pokemon => {
    return (pokemon.type.includes(selectTypeElement.value));
});
    showPokemons(filteredPokemon);
}
  
const selectWeaknessesElement = document.getElementById("select-weaknesses");
selectWeaknessesElement.addEventListener("change", weaknessesFilter);

function weaknessesFilter(){
    let filteredPokemon = POKEMON.pokemon.filter(pokemon => {
        return (pokemon.weaknesses.includes(selectWeaknessesElement.value));
    })
    showPokemons(filteredPokemon);
}

const pokeSearchElement = document.getElementById("poke-search");
pokeSearchElement.addEventListener("keyup", pokemonSearch);

function pokemonSearch() { 
    let searchUpper = pokeSearchElement.value.toUpperCase();    
    let detailsPokemon = POKEMON.pokemon.filter(pokemon => {
        let nameUpper = pokemon.name.toUpperCase();
        return (nameUpper.includes(searchUpper));
    })
    showFullPokemon(detailsPokemon);
}

function showFullPokemon(detailsPokemon) {
    document.getElementById("pokemons").innerHTML = `${detailsPokemon.map(pokemon => `
    <div class="each-full-pokemon">
    <img src="${pokemon.img}" class="pokemon-img"/>
    <div class="text-name">
        <h3 class="pokemon-number">${pokemon.num}</h3>
        <h3 class="pokemon-name">${pokemon.name}</h3>
        <p><strong>Tipo:</strong> ${pokemon.type}</p>
        <p><strong>Fraquezas:</strong> ${pokemon.weaknesses}</p>
        <p><strong>Horário:</strong> ${pokemon.spawn_time}</p>     
        <p><strong>Altura:</strong> ${pokemon.height}</p>
        <p><strong>Peso:</strong> ${pokemon.weight}</p>
    </div>
    </div>
`
).join('')
}
`}
