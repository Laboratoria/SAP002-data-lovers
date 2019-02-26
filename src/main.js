window.onload = function () {
  showPokemons();

};

function getPokemons(namePokemon) {
  function filtraNome(pokemon) {
    return (namePokemon===undefined || pokemon.name===namePokemon)
  }
  
  return POKEMON["pokemon"].filter(filtraNome);
}


function showPokemons(namePokemon) {
  let pokemonsDiv = document.getElementById("pokemons-div");
  pokemonsDiv.innerHTML = `
     ${getPokemons(namePokemon).map((monster) => `
        <div class="each_pokemon">
          <img src="${monster["img"]}" class="pokemon-img"/>
          <div class="text-name">
            <h3 class="pokemon-name">${monster["name"]}</h3>
          </div>
        </div>
      `).join("")}
       `
}



  btnsubmit.addEventListener('click', atualizanome);
    
 
    function atualizanome(event) {
      let search = document.getElementById("txtBusca").value;
      showPokemons(search)
      }
    
    //console.log(pessoas.filter(filtraOculos));
    //console.log(pessoas.filter(filtraBlusa));
  





