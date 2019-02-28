window.onload = function () {
  showPokemons();
};

let filterMenu = document.getElementById('filter-menu');
let chooseType = document.getElementById('choose-type');
// let chooseWeakness = document.getElementById('choose-weakness');
let sort = document.getElementById('sort');

function showFilter(){
  let chooseFilter = filterMenu.value;  
  if(chooseFilter === 'none'){
    chooseType.style.visibility = 'hidden';
    // chooseWeakness.style.visibility = 'hidden';    
  } else if(chooseFilter === 'type' || chooseFilter === 'weakness'){    
    chooseType.style.visibility = 'visible';
    // chooseWeakness.style.visibility = 'hidden';
  } 
  
  // else if(chooseFilter === 'weakness'){    
  //   // chooseWeakness.style.visibility = 'visible';
  //   chooseType.style.visibility = 'hidden';
  // }
  showPokemons()
}

filterMenu.addEventListener('change', showFilter);

function getPokemons() {
  return POKEMON["pokemon"];
}

function filtrando() {
  console.log('entrou filtrando');
  let chooseFilter = filterMenu.value;
  let typeFilter = chooseType.value;
  let array =  POKEMON["pokemon"];
  if(chooseFilter === 'type' && typeFilter != 'none'){
    console.log('entrou filtrando por tipo');
    console.log(typeFilter);
    let filtered = getPokemons().filter(tipo => tipo['type'].indexOf(typeFilter) >= 0)  ;
    console.log(filtered);
    array = filtered;
  } else if(chooseFilter === 'weakness' && typeFilter != 'none'){
    console.log('entrou filtrando por fraqueza');
    console.log(typeFilter);
    let filtered = getPokemons().filter(tipo => tipo['weaknesses'].indexOf(typeFilter) >= 0)  ;
    console.log(filtered);
    array = filtered;
  } else if(chooseFilter != 'none' && typeFilter === 'none'){
    console.log('entrou filtrando none');
    array = POKEMON["pokemon"];
  } 

  return array
}

chooseType.addEventListener('change', filtrando);

function showPokemons() {
  console.log('entrou SHOWPOKEMONS');
  let pokemonDiv = document.getElementById("pokemons-div")
  pokemonDiv.innerHTML = `
    ${ordering().map((pokemon) => `
    <div>
        <img src="${pokemon["img"]}"
        <h3>${pokemon["name"]}</h3>
        <p>${pokemon["num"]}</p>
        <div>${pokemon["type"].map((type) => `
        <p>${type}</p>`).join('')}
        </div>
          <p>Evolve: ${pokemon["candy_count"]} candy</p>       
        <p>Spawn-Chance: ${pokemon["spawn_chance"]}%</p>
        <p>Spawn-Time: ${pokemon["spawn_time"]}</p>
      </div>
        
      `).join('')}
      `
}

chooseType.addEventListener('change', showPokemons);

function ordering() {
let sortOption = sort.value;
console.log('valor');
console.log(sortOption);
let ordered =  filtrando().sort(function(a, b){
  
  if(a[sortOption] < b[sortOption]) { 
    // console.log(a[sortOption]);
    // console.log(b[sortOption]);
    console.log('entrou if');
    return -1; }
  if(a[sortOption] > b[sortOption]) { console.log('entrou if else');
   return 1; }
  return 0;
})
console.log('ordenada');
console.log(ordered);

  return ordered
}

sort.addEventListener('change', changeOrderingShow);

function changeOrderingShow(){
  showPokemons();
  ordering();
}


// filtered.sort(function(a, b){
//   if(a.name < b.name) { return -1; }
//   if(a.name > b.name) { return 1; }
//   return 0;
// })

