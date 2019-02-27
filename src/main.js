window.onload = function () {
  showPokemons();
};

function getPokemons() {
  return POKEMON["pokemon"];
}

function showPokemons() {
  let pokemonDiv = document.getElementById("pokemons-div")

  pokemonDiv.innerHTML = `
    ${getPokemons().map((pokemon) => `
    <div>
        <img src="${pokemon["img"]}"
        <h3>${pokemon["name"]}</h3>
        <p>${pokemon["num"]}</p>
        <div>${pokemon["type"].map((type) => `
        <p>${type}</p>`).join('')}
        </div>
          <p>Evolve: ${pokemon["candy_count"]} candy</p>       
        <p>Spawn-Chance: ${pokemon["spawn_chance"]}%</p>
        <p>Spawn-Time: ${pokemon["spawn_time"]}</p>
      </div>
        
      `).join('')}
      `
}

