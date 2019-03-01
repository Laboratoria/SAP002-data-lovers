window.onload= function() {
    allPokemon();
};

function getPokemon (){
    return POKEMON['pokemon'];
    
}

let eggKmSelect = document.getElementById('eggKm')
eggKmSelect.addEventListener('change', function(){
   
   if(eggKmSelect.selectedIndex === 1){
       console.log("aqui é a funcao 1")
   }else if(eggKmSelect.selectedIndex === 2){
       console.log(showKm2())
    }else if(eggKmSelect.selectedIndex === 3){
        console.log('aqui é a funcao 3')
    }else if(eggKmSelect.selectedIndex === 4){
        console.log('aqui é a funcao 4')
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
            <h3 class='pokemon-name'>${monster['name']}</h3 >
        </div>
        <div class='text-type'>
            <p class='pokemon-type'>${monster['type']}</p>
        </div>
    </div>
       
    `).join('')}
    `
};


function showKm2 (){
    let showPokemon = document.getElementById('show-pokemon');
    let monsterAll = getPokemon();
    let data = getPokemon().map(monster => monster.egg)
    // console.log(data)
    
    let eggFilter = monsterAll.filter((pokemon) => {return pokemon.egg.includes('2 km')})
    console.log(eggFilter)

    //  showPokemon.innerHTML=` ${monsterAll.map((i) => `
    //             <div class='list-pokemon'>
    //                     <img src='${monsterAll['img']}' class= 'pokemon-img'/>
    //                 <div class= text-name> 
    //                     <h3 class='pokemon-name'>${monsterAll['name']}</h3 >
    //                 </div>
    //                 <div class='text-type'>
    //                     <p class='pokemon-type'>${i}</p>
    //                 </div>
    //             </div>
                
    //             `).join('')
    //         }`
        
    //     };
    }   





//     showPokemon.innerHTML=`
//         |<div>${dataIndex['i']}</div>
    
//     `
    
// }
