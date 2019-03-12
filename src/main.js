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
    }else if(orderAzSelect.selectedIndex === 2){
      return orderZa ();
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

function orderZa (){
    let showPokemon = document.getElementById('show-pokemon');
    
    let orderPokemonName = getPokemon().sort(function(a,b){
        return a.name.localeCompare(b.name);
    });

    showPokemon.innerHTML=`
    ${orderPokemonName.reverse().map((i) =>`
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
   
let candySelect = document.getElementById("candy")
candySelect.addEventListener("change", function(){
    if(candySelect.selectedIndex === 1){ 
        google.charts.load("current", {"packages":["corechart"]});
        google.charts.setOnLoadCallback(drawGraphic)
    }else{alert("Selecione uma opção!")}
});

function drawGraphic() {

    let showPokemon = document.getElementById('show-pokemon')
    let candy = getPokemon().map(monster => monster.candy_count)
    let candyFilter = candy.filter(i => typeof i ==="number")
    let candyTotal = candyFilter.reduce((acc,cur) => acc+cur)
    let result = candyTotal/candyFilter.length;
    
    let max = candyFilter.reduce(function(a,b){
        return Math.max(a,b)
    })

    let min = candyFilter.reduce(function(a,b){
        return Math.min(a,b)
    })
    
    const table= `
        <p>Gráfico de candy</p>

    `;

    showPokemon.innerHTML= table;

    let data = google.visualization.arrayToDataTable([
        ['candy', "quantidade"],
        ['Média de candy por pokémon', result],
        ['Máximo de candy por pokémon', max],
        ['Mínimo de candy por pokémon',  min],
    ]);

    let options = {
        title: "Candy's",
        pieHole: 0.4,
    };

    let chart = new google.visualization.PieChart(document.getElementById('graphic'));
    chart.draw(data, options);
}


// function clearOption(){
//    let clearAz = document.getElementById("orderAz").reset();
//    let clearEgg  = document.getElementById("eggKm").reset();
//    let clearCandy = document.getElementById("candy").reset();

// }


