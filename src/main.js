window.onload = function() {
    //alert("carregou");   
    showAllChampions();
}; 
 
 
let dropMenu = document.querySelector(".drop-menu");
dropMenu.addEventListener("change", showChampions);

// let dropMenuStrengths = document.querySelector(".drop-menu-strengths");
// dropMenuStrengths.addEventListener("change", showStrengths);


function showAllChampions(){       
    let listChampions = document.querySelector(".show-champions");     
    for (let champion in LOL.data) {
         listChampions.innerHTML += `
         <section class="champions-container">
            <div  class="show-champions">
                <div class='card card-color'>
                    <img src="${LOL.data[champion]['splash']}" class='champions-img' />
                    <div class="tex-name">
                        <h2 class="champion-name">${LOL.data[champion]['name']}</h2>
                        <h4 class="champion-history"><u>History</u> >>></h4>
                                
                    </div>
                </div>
            </div>
         </section>
   
        `
    }
   
}
  

function showChampions(){
    clearResult();
    let typeChampion = dropMenu.value;    
    let type;   
    let listChampions = document.querySelector(".show-champions");     
    
    for (let champion in LOL.data) {
        for(i in LOL.data[champion]["tags"]){
            type = LOL.data[champion]["tags"][i]
            if( typeChampion === type){ 

                listChampions.innerHTML += `
               
                <section class="champions-container">
                    <div  class="show-champions">
                        <div class='card card-color'>
                            <img src="${LOL.data[champion]['splash']}" class='champions-img' />
                            <div class="tex-name">
                                <h2 class="champion-name">${LOL.data[champion]['name']}</h2>
                                <h1 class="champion-name">${LOL.data[champion]['tags'].join(' - ')}</h1>
                            </div>
                        </div>
                    </div>
                 </section>
   
                ` 
            }
        }
    }
}

// function showStrengths(){
//     clearResult();
//     let typeStrengths = dropMenuStrengths.value;    
//     let type;   
//     let key;
//     let listStrengths = document.querySelector(".show-champions");     
    
//     for (let champion in LOL.data) {
//         for(i in LOL.data[champion]["info"]){
//             type = Object.keys(LOL.data[champion]['info'])
//             console.log("o que tem em type"+type)
            
//             if( typeStrengths === type){ 
//                 //filtrar quem é o tem o maior valor do tipo selecionado

//                 listStrengths.innerHTML += `
                 
//                 <section class="champions-container">
//                     <div  class="show-champions">
//                         <div class='card card-color'>
//                             <img src="${LOL.data[champion]['splash']}" class='champions-img' />
//                             <div class="tex-name">
//                                 <h2 class="champion-name">${LOL.data[champion]['name']}</h2>
//                                 <h1 class="champion-name">${LOL.data[champion]['info']}</h1>
//                             </div>
//                         </div>
//                     </div>
//                  </section>
   
//                 `
//             }
//         }
//     }
// }


//console.log("objeto"+Object.keys(LOL.data.Aatrox.info))


function clearResult(){
    document.querySelector(".show-champions").innerHTML = ""; 
}