window.onload = function () {
  showPokemons();
};

function getPokemons(search) {
  function filterByName(pokemon) {
    return (search === undefined || search === pokemon.name)
  }
  return POKEMON["pokemon"].filter(filterByName);
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

btnsubmit.addEventListener('click', searchTypedMonster);

function searchTypedMonster(event) {
  let search = document.getElementById("txtSearch").value;
  showPokemons(search)
}

let monsterList = getPokemons()

superRare.addEventListener('click', listSuperRare);

function listSuperRare() {
  let monsterList1 = monsterList.filter(superRareTest => superRareTest["spawn_chance"] <= "0.005");
  let pokemonsDiv = document.getElementById("pokemons-div");
  pokemonsDiv.innerHTML = "";
  pokemonsDiv.innerHTML = `
  ${monsterList1.map((monster) => `
     <div class="each_pokemon">
       <img src="${monster["img"]}" class="pokemon-img"/>
       <div class="text-name">
         <h3 class="pokemon-name">${monster["name"]}</h3>
       </div>
     </div>
   `).join("")}
    `
}

rare.addEventListener('click', listRare);

function listRare() {
  monsterList2 = monsterList.filter(rareTest => rareTest["spawn_chance"] > "0.005" && rareTest["spawn_chance"]
    < "0.1");
  let pokemonsDiv = document.getElementById("pokemons-div");
  pokemonsDiv.innerHTML = "";
  pokemonsDiv.innerHTML = `
  ${monsterList2.map((monster) => `
     <div class="each_pokemon">
       <img src="${monster["img"]}" class="pokemon-img"/>
       <div class="text-name">
         <h3 class="pokemon-name">${monster["name"]}</h3>
       </div>
     </div>
   `).join("")}
    `
}

commom.addEventListener('click', listCommom);

function listCommom() {
  let monsterList3 = monsterList.filter(commomTest => commomTest["spawn_chance"] >= "0.1");
  let pokemonsDiv = document.getElementById("pokemons-div");
  pokemonsDiv.innerHTML = "";
  pokemonsDiv.innerHTML = `
  ${monsterList3.map((monster) => `
     <div class="each_pokemon">
       <img src="${monster["img"]}" class="pokemon-img"/>
       <div class="text-name">
         <h3 class="pokemon-name">${monster["name"]}</h3>
       </div>
     </div>
   `).join("")}
    `
}

morning.addEventListener('click', listChanceMorning);

function listChanceMorning() {
  let monsterList4 = monsterList.filter(morningPokemons => morningPokemons["spawn_time"] >= "06:00" &&
    morningPokemons["spawn_time"] <= "12:00");
  let pokemonsDiv = document.getElementById("pokemons-div");
  pokemonsDiv.innerHTML = "";
  pokemonsDiv.innerHTML = `
  O melhor horário para você encontrar os pokemons da manhã é: <br>
  ${monsterList4.map((monster) => `
     <div class="each_pokemon">
       <img src="${monster["img"]}" class="pokemon-img"/>
       <div class="text-name">
         <h3 class="pokemon-name">${monster["name"]}</h3>
       </div>
     </div>
   `).join("")}
    `
}

afternoon.addEventListener('click', listChanceAfternoon);

function listChanceAfternoon() {
  let monsterList5 = monsterList.filter(afternoonPokemons => afternoonPokemons["spawn_time"] > "12:00" &&
    afternoonPokemons["spawn_time"] < "18:00");
  let pokemonsDiv = document.getElementById("pokemons-div");
  pokemonsDiv.innerHTML = "";
  pokemonsDiv.innerHTML = `
  O melhor horário para você encontrar os pokemons da tarde é:
  ${monsterList5.map((monster) => `
       <div class="each_pokemon">
       <img src="${monster["img"]}" class="pokemon-img"/>
       <div class="text-name">
         <h3 class="pokemon-name">${monster["name"]}</h3>
       </div>
     </div>
   `).join("")}
    `
}

night.addEventListener('click', listChanceNight);

function listChanceNight() {
  let monsterList6 = monsterList.filter(nightPokemons => nightPokemons["spawn_time"] >= "18:00" &&
    nightPokemons["spawn_time"] < "00:00" || nightPokemons["spawn_time"] >= "00:00" && nightPokemons["spawn_time"]
    < "06:00");

  console.log(monsterList6.spawn_time)
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(monsterList6.reduce(reducer, 2))  
  
  let pokemonsDiv = document.getElementById("pokemons-div");
  console.log(monsterList6)
  pokemonsDiv.innerHTML = "";
  pokemonsDiv.innerHTML = `
  O melhor horário para você encontrar os pokemons noturnos é:
  ${monsterList6.map((monster) => `
     <div class="each_pokemon">
       <img src="${monster["img"]}" class="pokemon-img"/>
       <div class="text-name">
         <h3 class="pokemon-name">${monster["name"]}</h3>
       </div>
     </div>
   `).join("")}
    `
}