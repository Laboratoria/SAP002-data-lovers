window.onload= function() {
    allPokemon();
};

function getPokemon (){
    return POKEMON['pokemon'];
    
}

let showPokemon = document.getElementById('show-pokemon');

function allPokemon (){

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


let eggKmSelect = document.getElementById('eggKm')
eggKmSelect.addEventListener('change', function(){
   
   if(eggKmSelect.selectedIndex === 1){
       console.log("aqui é a funcao 1")
   }else if(eggKmSelect.selectedIndex === 2){
       console.log('aqui é a funcao 2')
    }else if(eggKmSelect.selectedIndex === 3){
        console.log('aqui é a funcao 3')
    }else if(eggKmSelect.selectedIndex === 4){
        console.log('aqui é a funcao 4')
    }else{
        return alert('Selecione uma opção!')
    }
})

