//**************Ju form */

// window.onload = function() {
//     // alert("carregou");
//     showPokemon();

// };

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

fetch('./data/pokemon/pokemon.json').then(response => {
    return response.json();
}).then(data => {
    function showPokemon(){
        let pokemonData = document.getElementById("cards");
        pokemonData.innerHTML = `
        ${data["pokemon"].map((pokemon) => `
        <div class="card">
            <h3>${pokemon["name"]}</h3>
            <img src="${pokemon["img"]}">
            <h3>Altura: ${pokemon["height"]}</h3>
            <h3>Peso: ${pokemon["weight"]}</h3>
            <h3>Candies: ${pokemon["candy_count"]}</h3>
            ${pokemon["type"].map(tipo => `
            <button class="type-poke">${tipo}</button>
            `).join("")}
        </div>
        `).join("")}
        `
    }
    // console.log(data["pokemon"]);
    showPokemon();
})

function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("sideBarSubMenu");
    for (i = 0; i < x.length; i++) {
        x[i].style.maxHeight = null;
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).style.maxHeight = document.getElementById(tabName).scrollHeight + "px";
}