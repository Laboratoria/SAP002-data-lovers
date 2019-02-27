window.onload = function () {
  showPokemon();
};

function getPokemons() {
  return POKEMON["pokemon"];
}
console.log("Lista de Pokemons", getPokemons());

// function showPokemon(){
//   let pokemonsDiv = document.getElementById("pokemons-div");
//   pokemonsDiv.innerHTML = `
//    ${getProducts().map((pokemon) => `
//       <div class="pokemon-item">
//         <img src="${pokemon["img"][0]}" class="pokemon-img" />
//         <div class="text-name">
//           <h3 class="pokemon-name">${pokemon["name"]}</h3>
//         </div>
// //         <div class="text-price">
// //           <p class="product-price">${Number(produto["product"]["price"]["value"]).toLocaleString('pt-br', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</p>
// //         </div>
// //       </div>
//       `).join("")}
//   `
// }

function showPokemon() {
  let pokemonsDiv = document.getElementById("pokemons-div");
  pokemonsDiv.innerHTML = `
  ${getPokemons().map((pokemon) => `
  <div class="pokemon-item">
      <img src="${pokemon["img"]}" class="pokemon-img" />
      <div class="text-name">
      <h3 class="pokemon-name">${pokemon["name"]}</h3>
      </div>
      <div class="text-number">
      <p>${pokemon["num"]}</p>
      </div>
  </div>
`)
    }`
}

  // const btnSubmit = document.getElementById("btn-submit");

  // btnSubmit.addEventListener("click", function(e){
  //   let inputPokemonNome = document.getElementById("pokemon-name").value;
  //   let inputPokemonNumber = document.getElementById("pokemon-number").value;
  //   let inputPokemonFoto = document.getElementById("pokemon-img").value;

  //   let novoItem = {
  //     "pokemon": {
  //       "name": "",
  //       "images": [],
  //       "number": {
  //         "value": 0,
  //       },
  //     },
  //   };

  //   novoItem["pokemon"]["name"] = inputPokemonNome;
  //   novoItem["pokemon"]["price"]["value"] = inputPokemonNumber;
  //   novoItem["product"]["images"].push(inputPokemonFoto);

  //   POKEMON["pokemon"].push(novoItem);
  //   showProducts();
  //   resetForm(document.getElementById("form-add-pokemon"));
  //   e.preventDefault();

  // });

  // function resetForm(form){
  //   form.reset();
  // }
