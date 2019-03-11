//**************Ju form */

window.onload = function() {
    // alert("carregou");
    openPoke();

};

// function getPokemon(){
//     return POKEMON["pokemon"];
// }

// function showPokemon(){
//     let pokeDiv = document.getElementById("cards");
//     pokeDiv.innerHTML = `
//     ${getPokemon().map((pokemon) => `
//     <div class="card">
//         <h3>${pokemon["name"]}</h3>
//         <img src="${pokemon["img"]}">
//         <h3>Altura: ${pokemon["height"]}</h3>
//         <h3>Peso: ${pokemon["weight"]}</h3>
//         <h3>Candies: ${pokemon["candy_count"]}</h3>
//         <button class="type-poke">${pokemon["type"][0]}</button>
//     </div>
//     `).join("")}
//     `
// }


//filtro tipos 

function openPoke(type) {
    fetch('./src/data/pokemon/pokemon.json').then(response => {
        return response.json();
    }).then(data => {
        let pokemons = data["pokemon"].filter (poke => {
            if (type != null){
                return poke["type"].includes(type);
            }else {
                return poke;
            }
        })
        let pokemonData = document.getElementById("cards");
        pokemonData.innerHTML = `
        ${pokemons.map((pokemon) => `
        <div class="card">
            <h3>${pokemon["name"]}</h3>
            <img src="${pokemon["img"]}">
            <h3>Altura: ${pokemon["height"]}</h3>
            <h3>Peso: ${pokemon["weight"]}</h3>
            <h3>Candies: ${candiesCount(pokemon["candy_count"])}</h3>
            ${pokemon["type"].map(tipo => `
            <button class="type-poke">${tipo}</button>
            `).join("")}
        </div>
        `).join("")}
        `
    });
}

function orderBy (order) {
    fetch('./src/data/pokemon/pokemon.json').then(response => {
        return response.json();
    }).then(data => {
        let pokemons =  data["pokemon"];
        if (order == "asc"){
            pokemons.sort((a, b) =>{
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
        }else if (order == "dec"){
            pokemons.sort((a, b) =>{
                if (a.name > b.name) {
                    return -1;
                }
                if (a.name < b.name) {
                    return 1;
                }
                return 0;
            });
        }
        let pokemonData = document.getElementById("cards");
        pokemonData.innerHTML = `
        ${pokemons.map((pokemon) => `
        <div class="card">
            <h3>${pokemon["name"]}</h3>
            <img src="${pokemon["img"]}">
            <h3>Altura: ${pokemon["height"]}</h3>
            <h3>Peso: ${pokemon["weight"]}</h3>
            <h3>Candies: ${candiesCount(pokemon["candy_count"])}</h3>
            ${pokemon["type"].map(tipo => `
            <button class="type-poke">${tipo}</button>
            `).join("")}
        </div>
        `).join("")}
        `
    });
}

// function openTab(tabName) {
//     var i, x;
//     x = document.getElementsByClassName("sideBarSubMenu");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.maxHeight = null;
//         x[i].style.display = "none";
//     }
//     document.getElementById(tabName).style.display = "block";
//     document.getElementById(tabName).style.maxHeight = document.getElementById(tabName).scrollHeight + "px";
// }

function candiesCount (name){
    console.log(name);
    if (name == undefined) {
        return "Não Evolui";
    }else{
        return name;
    }

}

