window.onload = function() {
    // alert("carregou");
    showPokemons();

};

function getPokemons() {
    return POKEMON["pokemon"]
}

let pokemons = getPokemons()
const dropDownFilter = document.getElementById("dropdown-type")

dropDownFilter.addEventListener('change',
    function() {
        let type = dropDownFilter.value
        if (type != "All") {
            pokemons = pokemons.filter(pokemon => pokemon["type"].includes(type))
        }
        showPokemons()
    }
)
const dropDownOrder = document.getElementById("dropdown-order")

dropDownOrder.addEventListener('change',
    function() {
        let order = dropDownOrder.value
        switch (order) {
            case "pokedex-num":
                showPokemons()
                break
            case "height":
                pokemons = pokemons.sort(compareByHeight)
                showPokemons()
                break
            case "weight":
                pokemons = pokemons.sort(compareByWeight)
                showPokemons()
                break
            case "spawn_chance":
                pokemons = pokemons.sort(compareBySpawnChance)
                showPokemons()
                break
            case "alpha":
                pokemons = pokemons.sort(compareByName)
                showPokemons()
                break

        }

    }
)

function compareByHeight(a, b) {
    return Number(a["height"].split(" ")[0]) - Number(b["height"].split(" ")[0])
}

function compareByWeight(a, b) {
    return Number(a["weight"].split(" ")[0]) - Number(b["weight"].split(" ")[0])
}

function compareByName(a, b) {
    return a["name"].localeCompare(b["name"])

}

function compareBySpawnChance(a, b) {
    return Number(a["spawn_chance"]) - Number(b["spawn_chance"])
}

function compareByPokedexNum(a, b) {
    return Number(a["num"]) - Number(b["num"])
}

function showPokemons() {
    const pokemonDiv = document.getElementById("pokemons-div")
    pokemonDiv.innerHTML = `
    ${pokemons.map((pokemon)=> `
      <figure class="pokemon">
        <img src= "${pokemon["img"]}"
          class ="pokemon-img"/>
         </figure>
      `).join("")}
  `
  pokemons = getPokemons()
}