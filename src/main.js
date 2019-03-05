const productDiv = document.querySelector(".show-champions");

const categories = document.querySelector(".drop-menu-categories");
const forcas = document.querySelector(".drop-menu-strengths");

categories.addEventListener("change", changeCategories);
forcas.addEventListener("change", changeStrengths);

window.onload = function() {
    showAllChampions();
};

function changeCategories(){
    clear();
    filteres();
    showAllChampions();
}

function changeStrengths(){
    clear();
    filteres();
    showAllChampions();
}


function getChampions(){
  const lolData = LOL.data;
  const champions = Object.keys(lolData).reduce((list, champion) => { 
   return list.concat(lolData[champion]);
   }, []);
   return champions;
}
//console.log(getChampions())

function filteres(){
    let categoria = categories.value;
    let forca = forcas.value;
    let tag = [];
    let tag2 = [];
    if(categoria !== 'none' && forca !== 'none'){
        tag2 = getChampions().filter(championTag => (championTag['tags'].indexOf(categoria) >= 0));
        tag = tag2.sort((a, b) => (a.info[forca] > b.info[forca] ? 1 : -1));
    }else if(categoria !== 'none' && forca == 'none'){
        tag = getChampions().filter(championTag => (championTag['tags'].indexOf(categoria) >= 0));
    }else if(categoria == 'none' && forca !== 'none'){
        tag = getChampions().sort((a, b) => (a.info[forca] > b.info[forca] ? 1 : -1));
    console.log(tag);
    }else{
        tag = getChampions();
    }
    return tag;
}


// function ordering(){
//   let orderingCampeaoes =  filteres().sort(function(a, b) {
//     return +(a['name'].value > b['name'].value) || +(a['name'].value === b['name'].value) - 1;
//   }
//   ); 
//   return orderingCampeaoes;
// }

// console.log(ordering());

function showAllChampions(){       
 productDiv.innerHTML += `
   ${filteres().map((champion) =>  `
    <section class="champions-container">
       <div  class="show-champions">
         <div class='card card-color'>
           <img src="${champion['splash']}" class='champions-img' />
           <div class="tex-name">
             <h2 class="champion-name">${champion['name']}</h2>
             <h3 class="champion-name">${champion['tags']}</h3>
           </div>
           <div>
             <h3 class="champion-info">Attack ${champion.info['attack']}</h3>
             <h3 class="champion-info">defense ${champion.info['defense']}</h3>
             <h3 class="champion-info">Magic ${champion.info['magic']}</h3>
             <h3 class="champion-info">Difficulty ${champion.info['difficulty']}</h3>
             <h4 class="champion-history"><u>History</u> >>></h4>            
           </div>
         </div>
       </div>
     </section>
    `).join("")}
 `
}

function clear(){
 productDiv.innerHTML= "";
}