
 let dropMenu = document.querySelector(".drop-menu");
 dropMenu.addEventListener("change", showChampions);
 
//----------------------FUNÇÃO FUNCIONANDO ----------------------------------

function showChampions(){
    let typeChampion = dropMenu.value;    
    let type;
    let listChampions = document.querySelector(".show-champions"); 
    //let championName = document.querySelector(".champion-name");
    listChampions.innerHTML ="";
        for (let champion in LOL.data) {
            for(i in LOL.data[champion]["tags"]){
                type = LOL.data[champion]["tags"][i]
                    if( typeChampion === type){
                    let img = document.createElement("img");
                    img.src = LOL.data[champion]["splash"];
                    listChampions.appendChild(img);

                    //---ALGO DE ERRADO NÃO ESTÁ CERTO! =( ----
                    // ---NÃO ESTÁ BUSCANDO O NOME---
                    // let name = document.createElement("h1");
                    // name = LOL.data[champion]["name"];
                    // championName.appendChild(name);
                    
                }          
            }
    
        }
 
};

// -------- NÃO ROLOU PQ A ESTRUTURA DO OBJ É DIFERENTE, NÃO ACEITA MAP NEM FILTER-----

// window.onload = function() {
//     // alert("carregou");
//     showChampions();
  
//   };

// function getChampions(){
//     return LOL.data;
// }
// console.log(getChampions());
  
// function showChampions(){

   
//     let listChampions = document.querySelector(".show-champions");     
//     listChampions.innerHTML=`
//        ${getChampions().map((champion) =>`
//           <section class="champions-container">
//               <img src="${champion["splash"]}"class="show-champions"/>
//               <section class="champion-img">
//                 <h1 class="champion-name">${champion["name"]}</h1>
//               </section>    
//           </section>
//     `).join("")}
//     `
// }
  







