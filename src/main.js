window.onload = function(){
  showPokemons();
};

function getPokemons() {
    return POKEMON["pokemon"];
}

function getType{
  let getPokemons = getPokemons();
  return getPokemons.
}

function showPokemons() {
    let pokemonDiv = document.getElementById("pokemons-div")

    pokemonDiv.innerHTML =`
    ${getPokemons().map((pokemon) => `
    <div>
        <img src="${pokemon["img"]}"
        <h3>${pokemon["name"]}</h3>
        <p>${pokemon["num"]}</p>
        <div>${pokemon["type"].map(type) => `
          <p>${type}</p>`}
          <p>Poison</p>
        </div>
        <p>Candy: 25</p>
        <p>Spawn-Chance 69%</p>
        <p>Spawn-Time 20:00</p>
      </div>
        
      `)}
      `
}

