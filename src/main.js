const divShowChampions = document.querySelector(".show-champions");
const categoriesChampions = document.querySelector(".drop-menu-categories");
const sortChampions = document.querySelector(".drop-menu-order");

categoriesChampions.addEventListener("change", filteres);
sortChampions.addEventListener("change", filteres);

// pega os dados do lol.js e transforma o Object em Array
const lolData = LOL.data;
const data = Object.keys(lolData).reduce((list, champion) => { 
  return list.concat(lolData[champion]);
}, []);

// exibe todos os campeoes
window.onload = function() {
 filteres();
};

// filtra qual valor foi selecionado no select  drop-menu-categories e envia para a funçao ordering

function filteres(){
// console.log(dataChampions) ;
 let categoria = categoriesChampions.value;
 let filterData = [];
   if(categoria != 'none'){
     filterData = data.filter(championTag => (championTag['tags'].indexOf(categoria) >= 0));
     // console.log('entrou no if',filterData) ;
   }else{
     filterData = data;
     // console.log('entrou no else', filterData) ;
   }
   ordering(filterData);
}
 //console.log(filteres())

// filtra qual valor foi selecionado no select  drop-menu-order e envia para a funçao showAllChampions
function ordering(filteres){
 //console.log("entrou na função ordering", filteres);
 let sort = sortChampions.value;
 let orderingData = [];
   if(sort == 'attack' || sort == 'defense' ||  sort == 'magic' || sort == 'difficulty'){
    orderingData = filteres.sort((a, b) => (a.info[sort] > b.info[sort] ? 1 : -1));
      // console.log("atack, defesa..", orderingData);
   } else if(sort == 'AZ'){
     orderingData = filteres.sort((a, b) => (a['name'] > b['name'] ? 1 : -1));
     // console.log("AZ", orderingData);
   } else if (sort == 'ZA'){
     orderingData = filteres.sort((a, b) => (a['name'] < b['name'] ? 1 : -1));
     //  console.log("ZA", orderingData);
   }else{
     orderingData = filteres;
     // console.log("entrou no ELSE", orderingData);
   }
   showAllChampions(orderingData);
}
//recebe o resultado da função ordering e escreve o HTML
  function showAllChampions(dataOrdening){ 
 //console.log("entrou na showAllChampions", dataOrdening)
  divShowChampions.innerHTML = `
   ${dataOrdening.map((champion) =>  `
   <section class="champions-container">
       <div  class="show-champions">
         <div class='card card-color'>
         <div class='thefront'>
              <img src="${champion['splash']}" class='champions-img' />
             <div class="tex-name">
                <h2 class="champion-name">${champion['name']}</h2>
                <h3 class="champion-name">${champion['tags'].join(' - ')}</h3>
             </div>  
             <div class= 'champion-info'>                 
                <h3 class="champion-info"> <img src="icon-attack.png"/> Attack: ${champion.info['attack']}</h3>
                <h3 class="champion-info"> <img src="icon-defense.png"/> Defense: ${champion.info['defense']}</h3>
                <h3 class="champion-info"> <img src="icon-magic.png"/> Magic: ${champion.info['magic']}</h3>
                <h3 class="champion-info"> <img src="icon-difficulty.png"/> Difficulty: ${champion.info['difficulty']}</h3>                
              </div>
           </div>
           <div class='theback'>
              <h2 class="champion-name">${champion['name']}</h2>
              <h3 class="champion-name">${champion['title']}</h3>
              <h3 class="champion-info">Attack ${champion['blurb']}</h3>
              <div><img src="${champion['splash']}" class='champions-img-back'/> </div>
           </div>
         </div>
       </div>
     </section>
    `)}
 `
}
//tirou o join testar 

//    `).join("")}
// `
//}
