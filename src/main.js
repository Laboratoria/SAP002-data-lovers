window.onload = function() {
    showPokemons(getPokemons())

}

// function fetchPokemons() {
//     fetch("src/data/pokemon/pokemon.json")
//         .then(function(resp) {
//             return resp.json()
//         })
//         .then(function(data) {
//             pokemonsAll = data["pokemon"]
//         })
// }


function getPokemons() {
    return POKEMON["pokemon"]
}
let pokemons = getPokemons()
const dropDownOrder = document.getElementById("dropdown-order")
let order = dropDownOrder.value
const dropDownFilter = document.getElementById("dropdown-type")
let mypokedexArray = []



dropDownFilter.addEventListener('change',
    function() {
        let type = dropDownFilter.value
        pokemons = getPokemons()
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
compareById = (a, b) => Number(a["id"]) - Number(b["id"])
compareByHeight = (a, b) => Number(a["height"].split(" ")[0]) - Number(b["height"].split(" ")[0])
compareByWeight = (a, b) => Number(a["weight"].split(" ")[0]) - Number(b["weight"].split(" ")[0])
compareByName = (a, b) => a["name"].localeCompare(b["name"])
compareBySpawnChance = (a, b) => Number(a["spawn_chance"]) - Number(b["spawn_chance"])
compareByPokedexNum = (a, b) => Number(a["num"]) - Number(b["num"])

function orderPokemons(order) {
    switch (order) {
        case "pokedex-num":
            pokemons.sort(compareById)
            break
        case "height":
            pokemons.sort(compareByHeight)
            console.log('entrou height')
            break
        case "weight":
            pokemons.sort(compareByWeight)
            break
        case "spawn_chance":
            pokemons.sort(compareBySpawnChance)
            break
        case "alpha":
            pokemons.sort(compareByName)
            break
    }
}

function showPokemons(pokemons) {
    orderPokemons(order)
    document.querySelector(".pokemons-div").innerHTML = `
    ${pokemons.map((pokemon)=>
`      <figure class="pokemon">
        <div class = "display-none pokedex-icon" id = "pokedex-icon-${pokemon["id"]}">
        <img class = "pokedex-icon-img" src = "https://image.flaticon.com/icons/svg/188/188940.svg">
        </div>
        <img src= "${pokemon["img"]}" class ="pokemon-img" id = "${pokemon["id"]}"/>
       </figure>`).join("")}`
    for (pokemonFigure of document.querySelectorAll(".pokemon-img")) {
        pokemonFigure.addEventListener('click',
            function (e) {
                selectedPokemon = pokemons.find(pokemon => pokemon["id"] == e.target.id)
                document.getElementById("pokemon-container").innerHTML = `
                    <span class="ring"><span class="close">&times;</span></span>
                    <figure class="pokemon-img-container">
                        <img src = "${selectedPokemon["img"]}"/>
                    </figure> 
                    <div class="pokemon-data">
                    <h1><strong>${selectedPokemon["name"]}</strong></h1>
                    <p><strong>Altura: </strong>${selectedPokemon["height"]}</p>
                    <p><strong>Peso: </strong>${selectedPokemon["weight"]}</p>
                    <p><strong>Doces para evoluir: </strong>${selectedPokemon["candy_count"]} ${selectedPokemon["candy"]}</p>
                    <p><strong>Fraquezas: </strong>${translateWeaknesses(selectedPokemon["weaknesses"]).join(", ")}</p>
                    <div class ="button-add-pokedex-container">
                    <input type="button" class="btn-mypokedex" value="Adicionar à pokedex">
                    </div>
                    </div>
                        `
                closeButton()
                setPokedexButtonValue()

                document.querySelector(".btn-mypokedex").addEventListener('click', () => {
                    setMyPokedex(selectedPokemon)
                })

                document.querySelector(".modal").classList.add('display-block')
                document.querySelector(".pokemon-container").classList.remove('display-none')
                document.querySelector(".pokemon-container").classList.add('display-block')
                document.querySelector(".analyzer-container").classList.remove('display-block')
                document.querySelector(".analyzer-container").classList.add('display-none')
            }
        )
    }
}

function translateWeaknesses(array) {
    let pokemonWeaknesses = array;
    weaknessesEnglish = ["Grass", "Poison", "Fire", "Water", "Bug", "Normal", "Electric", "Ground", "Fighting", "Psychic", "Rock", "Flying", "Ghost", "Ice", "Dragon"];
    weaknessesPortuguese = ["planta", "venenoso", "fogo", "água", "inseto", "normal", "elétrico", "terra", "lutador", "psíquico", "pedra", "voador", "fantasma", "gelo", "dragão"];
    for (weaknesses of weaknessesEnglish) {
        let index = pokemonWeaknesses.indexOf(weaknesses);
        if (index != -1) {
            pokemonWeaknesses[index] = weaknessesPortuguese[weaknessesEnglish.indexOf(pokemonWeaknesses[index])]
        }
    }
    return pokemonWeaknesses;
}

function setPokedexButtonValue() {
    if (!mypokedexArray.includes(selectedPokemon)) {
        document.querySelector(".btn-mypokedex").value = "Adicionar à pokedex"
    } else {
        document.querySelector(".btn-mypokedex").value = "Remover da pokedex"
    }
}

function setMyPokedex(selectedPokemon) {
    if (!mypokedexArray.includes(selectedPokemon)) {
        mypokedexArray.push(selectedPokemon)
        document.querySelector(".btn-mypokedex").value = "Remover da pokedex"
        document.querySelector(`#pokedex-icon-${selectedPokemon["id"]}`).classList.remove('display-none')
    } else {
        mypokedexArray = mypokedexArray.filter(pokemon => pokemon != selectedPokemon)
        document.querySelector(".btn-mypokedex").value = "Adicionar à pokedex"
        document.querySelector(`#pokedex-icon-${selectedPokemon["id"]}`).classList.add('display-none')
    }
}

document.querySelector(".analyze-pokedex").addEventListener('click',
    function () {
        document.querySelector(".analyzer-container").innerHTML = `
    <span class="ring"><span class="close">&times;</span></span>
    <h1 class="my-pokedex-title">Minha Pokedex</h1>
    <hr class="pulaLinha1">
    <section class="charts">
        <div class="chart">
            <canvas id="my-pokedex"></canvas>
        </div>
        <div class="chart">
            <canvas id="my-weakness"></canvas>
        </div>
    </section>
    <section class="means">
        <p>Pokemon mais alto: ${findTallestPokemon(mypokedexArray)[0]["name"]} (${findTallestPokemon(mypokedexArray)[0]["height"]})</p>
        <p>Pokemon mais pesado: ${findHeaviestPokemon(mypokedexArray)[0]["name"]} (${findHeaviestPokemon(mypokedexArray)[0]["weight"]})</p>
        <p>Pokemon mais raro: ${findRarestPokemon(mypokedexArray)[0]["name"]} (${findRarestPokemon(mypokedexArray)[0]["spawn_chance"]}%)</p>
        </section>
    <section class="best-pokemons">
    </section>
    `
        closeButton()
        myPokedexChart(mypokedexArray)
        myWeaknessChart(mypokedexArray)
        document.querySelector(".modal").classList.add('display-block')
        document.querySelector(".analyzer-container").classList.remove('display-none')
        document.querySelector(".analyzer-container").classList.add('display-block')
        document.querySelector(".pokemon-container").classList.remove('display-block')
        document.querySelector(".pokemon-container").classList.add('display-none')
    })

function pokemonListCount(pokedex, atr) {

    let atrCountObj = {}
    for (pokemon of pokedex) {
        for (item of pokemon[atr]) {
            if (typeof atrCountObj != undefined || !Object.keys(atrCountObj).includes(item)) {
                atrCountObj[item] = pokedex.reduce((count, pokemon) => (count + pokemon[atr].includes(item)), 0)
            }
        }
    }
    keysAtrCountObjSorted = Object.keys(atrCountObj).sort(function (a, b) {
        return atrCountObj[b] - atrCountObj[a]
    })
    valuesAtrCountObjSorted = keysAtrCountObjSorted.map(key => atrCountObj[key])
    atrCountObjSorted = {}
    keysAtrCountObjSorted.forEach((key, i) => atrCountObjSorted[key] = valuesAtrCountObjSorted[i])
    return atrCountObjSorted
}


function findTallestPokemon(pokedex) {
    return pokedex.filter(pokemon => Number(pokemon.height.split(" ")[0]) == Math.max.apply(Math, pokedex.map(pokemon => Number(pokemon.height.split(" ")[0]))))
}

function findHeaviestPokemon(pokedex) {
    return pokedex.filter(pokemon => Number(pokemon.weight.split(" ")[0]) == Math.max.apply(Math, pokedex.map(pokemon => Number(pokemon.weight.split(" ")[0]))))
}

function findRarestPokemon(pokedex) {
    return pokedex.filter(pokemon => Number(pokemon.spawn_chance) == Math.min.apply(Math, pokedex.map(pokemon => Number(pokemon.spawn_chance))))
}

function closeButton() {
    for (close of document.querySelectorAll('.close')) {
        close.addEventListener('click',
            function () {
                document.querySelector(".modal").classList.remove('display-block')
            })
    }
}

window.addEventListener('click', outsideClick)

function outsideClick(e) {

    if (e.target == document.querySelector(".modal")) {
        document.querySelector(".modal").classList.remove('display-block')
    }
}