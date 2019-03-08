window.onload = function() {
    // alert("carregou");
    showPokemons(getPokemons())

}

function getPokemons() {
    return POKEMON["pokemon"]
}

let pokemons = getPokemons()
let selectedPokemons = pokemons
const dropDownOrder = document.getElementById("dropdown-order")
let order = dropDownOrder.value
const dropDownFilter = document.getElementById("dropdown-type")
const modal = document.querySelector(".modal")

dropDownFilter.addEventListener('change',
    function() {
        let type = dropDownFilter.value
        pokemons = getPokemons()
        console.log(type)
        if (type != "All") {
            pokemons = pokemons.filter(pokemon => pokemon["type"].includes(type))
        }
        orderPokemons(order)
        showPokemons(pokemons)
    }
)

dropDownOrder.addEventListener('change',
    function() {
        order = dropDownOrder.value
        orderPokemons(order)
        showPokemons(pokemons)
    }

)

function orderPokemons(order) {
    switch (order) {
        case "pokedex-num":
            pokemons = pokemons.sort(compareById)
            break
        case "height":
            pokemons = pokemons.sort(compareByHeight)
            break
        case "weight":
            pokemons = pokemons.sort(compareByWeight)
            break
        case "spawn_chance":
            pokemons = pokemons.sort(compareBySpawnChance)
            break
        case "alpha":
            pokemons = pokemons.sort(compareByName)
            break
    }
}

compareById = (a, b) => Number(a["id"]) - Number(b["id"])
compareByHeight = (a, b) => Number(a["height"].split(" ")[0]) - Number(b["height"].split(" ")[0])
compareByWeight = (a, b) => Number(a["weight"].split(" ")[0]) - Number(b["weight"].split(" ")[0])
compareByName = (a, b) => a["name"].localeCompare(b["name"])
compareBySpawnChance = (a, b) => Number(a["spawn_chance"]) - Number(b["spawn_chance"])
compareByPokedexNum = (a, b) => Number(a["num"]) - Number(b["num"])


function showPokemons(pokemons) {
    document.querySelector(".pokemons-div").innerHTML = `
    ${pokemons.map((pokemon)=>
`      <div class="pokemon">
         <img src= "${pokemon["img"]}" class ="pokemon-img" id = "${pokemon["id"]}"/>
       </div>`).join("")}`

       pokemonFigures= document.querySelectorAll(".pokemon-img")
    for(pokemonFigure of pokemonFigures){
        pokemonFigure.addEventListener('click',
            function(e){

                document.getElementById("pokemon-container").innerHTML=`

                <img src = "${getPokemons()[e.target.id-1]["img"]}"/>
                <div class="functionGetPokemons">
                <p><strong>${getPokemons()[e.target.id-1]["name"]}</strong></p>
                <p><strong>Altura: </strong>${getPokemons()[e.target.id-1]["height"]}</p>
                <p><strong>Peso: </strong>${getPokemons()[e.target.id-1]["weight"]}</p>
                </div>
                    `
                modal.classList.add('display-block')
            }
        )
    }
}

window.addEventListener('click', outsideClick)

function outsideClick(e){
    if (e.target == modal) {
        modal.classList.remove('display-block')
      }
}