window.onload = function() {
    // alert("carregou");
    showPokemons(getPokemons())
    localStorage.setItem('mypokedex', '')

}

function getPokemons() {
    return POKEMON["pokemon"]
}

let pokemons = getPokemons()
const dropDownOrder = document.getElementById("dropdown-order")
let order = dropDownOrder.value
const dropDownFilter = document.getElementById("dropdown-type")
const modal = document.querySelector(".modal")
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

compareById = (a, b) => Number(a["id"]) - Number(b["id"])
compareByHeight = (a, b) => Number(a["height"].split(" ")[0]) - Number(b["height"].split(" ")[0])
compareByWeight = (a, b) => Number(a["weight"].split(" ")[0]) - Number(b["weight"].split(" ")[0])
compareByName = (a, b) => a["name"].localeCompare(b["name"])
compareBySpawnChance = (a, b) => Number(a["spawn_chance"]) - Number(b["spawn_chance"])
compareByPokedexNum = (a, b) => Number(a["num"]) - Number(b["num"])

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

       for(pokemonFigure of document.querySelectorAll(".pokemon-img")){
        pokemonFigure.addEventListener('click',
            function(e){
                selectedPokemon = pokemons.find(pokemon => pokemon["id"] == e.target.id)
                document.getElementById("pokemon-container").innerHTML=`
                    <figure class="pokemon-img">
                    <img src = "${selectedPokemon["img"]}"/>
                    </figure>
                    <div class ="button-add-pokedex-container">
                    <input type="button" class="btn-mypokedex" value="Adicionar à pokedex">
                    </div>
                    <div class="pokemon-data">
                    <p><strong>${selectedPokemon["name"]}</strong></p>
                    <p><strong>Altura: </strong>${selectedPokemon["height"]}</p>
                    <p><strong>Peso: </strong>${selectedPokemon["weight"]}</p>
                    </div>
                        `
                setPokedexButtonValue()
                document.querySelector(".btn-mypokedex").addEventListener('click',()=>{setMyPokedex(selectedPokemon)})
                modal.classList.add('display-block')
            }
        )
    }
}

function setPokedexButtonValue(){
    if(!mypokedexArray.includes(selectedPokemon)){
        document.querySelector(".btn-mypokedex").value = "Adicionar à pokedex"
    }
        else{
            document.querySelector(".btn-mypokedex").value = "Remover da pokedex"
        }
}

function setMyPokedex(selectedPokemon){
    if(!mypokedexArray.includes(selectedPokemon)){
        mypokedexArray.push(selectedPokemon)
        document.querySelector(".btn-mypokedex").value = "Remover da pokedex"
        console.log(`#pokedex-icon-${selectedPokemon["id"]}`)
        document.querySelector(`#pokedex-icon-${selectedPokemon["id"]}`).classList.remove('display-none')
}
        else{
            mypokedexArray = mypokedexArray.filter(pokemon => pokemon!=selectedPokemon)
            document.querySelector(".btn-mypokedex").value = "Adicionar à pokedex"
            document.querySelector(`#pokedex-icon-${selectedPokemon["id"]}`).classList.add('display-none')

    }

console.log(mypokedexArray)
}

window.addEventListener('click', outsideClick)

function outsideClick(e){
    if (e.target == modal) {
        modal.classList.remove('display-block')
      }
}
//////