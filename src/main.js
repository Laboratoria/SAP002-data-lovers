window.onload= function() {
    allPokemon();
};

function getPokemon (){
    return POKEMON['pokemon'];
    
}

let orderAzSelect = document.getElementById('orderAz')
orderAzSelect.addEventListener('change', function(){
    if(orderAzSelect.selectedIndex === 1){
       return orderAz();
    }else{ alert('Selecione uma opção!')
    };
});

function orderAz (){
    let showPokemon = document.getElementById('show-pokemon');
    
    let orderPokemonName = getPokemon().sort(function(a,b){
        return a.name.localeCompare(b.name);
    });

    showPokemon.innerHTML=`
    ${orderPokemonName.map((i) =>`
    <div class='list-pokemon'>
            <img src='${i.img}' class= 'pokemon-img'/>
        <div class= text-name> 
            <h3 class='pokemon-name'>${i.name}</h3>
        </div>
    </div>

    `).join('')
    }`
};

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
    };
});

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
       `).join('')
    }
    `
};

function showNotInEggs (){
    let showPokemon = document.getElementById('show-pokemon');
    let eggFilter = getPokemon().filter((pokemon) => pokemon.egg ==='Not in Eggs')
    
    showPokemon.innerHTML=` 
    ${eggFilter.map((eggFilter)  => `
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
    let eggFilter = getPokemon().filter((pokemon) => pokemon.egg ==='2 km')
    
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
    let eggFilter = getPokemon().filter((pokemon) => pokemon.egg === '5 km')

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
    
    let eggFilter = getPokemon().filter((pokemon) => pokemon.egg ==='10 km')
    
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
   


let candySelect = document.getElementById('candy')
candySelect.addEventListener('change', function(){
    if(candySelect.selectedIndex === 1){ 
        console.log(candy())
    }else{alert("Selecione uma opção!")}
    
});
   
// total de candy_count
// media de candy por pokemons
// media de pokemons que tem 100 candy

function candy (){

    let showPokemon = document.getElementById('show-pokemon');

    let candy = getPokemon().map(monster => monster.candy_count)
    console.log(candy)

    let candyFilter = candy.filter(i => typeof i ==="number")
    console.log(candyFilter)

    let candyTotal = candyFilter.reduce((acc,cur) => acc+cur)
    console.log(candyTotal)

    let result = candyTotal/candyFilter.length;
    console.log(result)
    
    
    const table= `
        <tr></tr>
        <p>Media de candy por pokemon</p>
        <td>${result}</td> 
    `;

    showPokemon.innerHTML= table;

}