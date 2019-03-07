window.onload= function() {
    allPokemon();
};

function getPokemon (){
    return POKEMON['pokemon'];
    
}

let orderAzSelect = document.getElementById('orderAz')
orderAzSelect.addEventListener('change', function(){
    if(orderAzSelect.selectedIndex === 1){
        console.log(orderAz())

    }else{ alert('Selecione uma opção!')}
})


//fazer funcao para ordenar

function orderAz (){
    let showPokemon = document.getElementById('show-pokemon');
    
    let orderPokemon = getPokemon().map((monster) => monster['name'])
    let order = orderPokemon.sort();
    console.log(order)
    showPokemon.innerHTML=`
    ${getPokemon().map((i) =>`
    <div class='list-pokemon'>
            <img src='${i['img']}' class= 'pokemon-img'/>
        <div class= text-name> 
            <h3 class='pokemon-name'>${order}</h3>
        </div>
    </div>

    `).join('')
    }`
}

let eggKmSelect = document.getElementById('eggKm')
eggKmSelect.addEventListener('change', function(){
   
   if(eggKmSelect.selectedIndex === 1){
        showNotInEggs()
    }else if(eggKmSelect.selectedIndex === 2){
        showKm2()
    }else if(eggKmSelect.selectedIndex === 3){
        showKm5()
    }else if(eggKmSelect.selectedIndex === 4){
        showKm10()
    }else{
        return alert('Selecione uma opção!')
    }
})

function allPokemon (){
    let showPokemon = document.getElementById('show-pokemon');

    showPokemon.innerHTML= `
    ${getPokemon().map((monster) =>`
    <div class='list-pokemon'>
            <img src='${monster['img']}' class= 'pokemon-img'/>
        <div class= text-name> 
            <h3 class='pokemon-name'>${monster['name']}</h3>
        </div>
        <div class='text-type'>
            <p class='pokemon-type'>${monster['num']}</p>
        </div>
    </div>
       
    `).join('')}
    `
};

function showNotInEggs (){
    let showPokemon = document.getElementById('show-pokemon');
    
    let eggFilter = getPokemon().filter((pokemon) => {return pokemon.egg.includes('Not in Eggs')})
    
    showPokemon.innerHTML=` ${eggFilter.map((eggFilter)  => `
                <div class='list-pokemon'>
                        <img src='${eggFilter.img}' class= 'pokemon-img'/>
                    <div class= text-name> 
                        <h3 class='pokemon-name'>${eggFilter.name}</h3 >
                    </div>
                    <div class='text-type'>
                        <p class='pokemon-type'>${eggFilter.egg}</p>
                    </div>
                </div>
                 `).join('')
    }`
};

   
function showKm2 (){
    let showPokemon = document.getElementById('show-pokemon');
    
    let eggFilter = getPokemon().filter((pokemon) => {return pokemon.egg.includes('2 km')})
    
    showPokemon.innerHTML=` ${eggFilter.map((eggFilter)  => `
                <div class='list-pokemon'>
                        <img src='${eggFilter.img}' class= 'pokemon-img'/>
                    <div class= text-name> 
                        <h3 class='pokemon-name'>${eggFilter.name}</h3 >
                    </div>
                    <div class='text-type'>
                        <p class='pokemon-type'>${eggFilter.egg}</p>
                    </div>
                </div>
                 `).join('')
    }`
};
   
function showKm5 (){
    let showPokemon = document.getElementById('show-pokemon');
    
    let eggFilter = getPokemon().filter((pokemon) => {return pokemon.egg.includes('5 km')})
    
    showPokemon.innerHTML=` ${eggFilter.map((eggFilter)  => `
                <div class='list-pokemon'>
                        <img src='${eggFilter.img}' class= 'pokemon-img'/>
                    <div class= text-name> 
                        <h3 class='pokemon-name'>${eggFilter.name}</h3 >
                    </div>
                    <div class='text-type'>
                        <p class='pokemon-type'>${eggFilter.egg}</p>
                    </div>
                </div>
                 `).join('')
    }`
};

function showKm10 (){
    let showPokemon = document.getElementById('show-pokemon');
    
    let eggFilter = getPokemon().filter((pokemon) => {return pokemon.egg.includes('10 km')})
    
    showPokemon.innerHTML=` ${eggFilter.map((eggFilter)  => `
                <div class='list-pokemon'>
                        <img src='${eggFilter.img}' class= 'pokemon-img'/>
                    <div class= text-name> 
                        <h3 class='pokemon-name'>${eggFilter.name}</h3 >
                    </div>
                    <div class='text-type'>
                        <p class='pokemon-type'>${eggFilter.egg}</p>
                    </div>
                </div>
                 `).join('')
    }`
};
   
   
