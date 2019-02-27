window.onload = function() {
    // alert("carregou");
    showPokemons(getPokemons());

};
let pokemons = getPokemons()
let selectedPokemons = pokemons

function getPokemons() {
    return POKEMON["pokemon"]
}

const dropDownFilter = document.getElementById("dropdown-type")

dropDownFilter.addEventListener('change',
    function() {
        let type = dropDownFilter.value
        pokemons = getPokemons()
        console.log(type)
        if (type != "All") {
            pokemons = pokemons.filter(pokemon => pokemon["type"].includes(type))
        }
        showPokemons(pokemons)
    }
)
const dropDownOrder = document.getElementById("dropdown-order")

dropDownOrder.addEventListener('change',
    function() {
        let order = dropDownOrder.value
        switch (order) {
            case "pokedex-num":
                showPokemons(pokemons)
                break
            case "height":
                pokemons = pokemons.sort(compareByHeight)
                showPokemons(pokemons)
                break
            case "weight":
                pokemons = pokemons.sort(compareByWeight)
                showPokemons(pokemons)
                break
            case "spawn_chance":
                pokemons = pokemons.sort(compareBySpawnChance)
                showPokemons(pokemons)
                break
            case "alpha":
                pokemons = pokemons.sort(compareByName)
                showPokemons(pokemons)
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

function showPokemons(pokemons) {
    const pokemonDiv = document.getElementById("pokemons-div")
    pokemonDiv.innerHTML = `
    ${pokemons.map((pokemon)=> `
      <figure class="pokemon">
        <img src= "${pokemon["img"]}"
          class ="pokemon-img"/>
         </figure>
      `).join("")}
  `

}