<<<<<<< HEAD
/*window.onload = function () {
  showChampions();
}; */
 
let dropMenu = document.querySelector(".drop-menu");
dropMenu.addEventListener("change", showChampions);

//----------------------FUNÇÃO FUNCIONANDO ----------------------------------
function getProducts() {
 return LOL["data"];
}


function showChampions(){
 clearEesult();
   let typeChampion = dropMenu.value;    
   let type;
   let listChampions = document.querySelector(".show-champions"); 
   
   /*listChampions.innerHTML =   `
    ${for(let champion in LOL.data){ 
             for(let i in LOL.data[champion]["tags"]){
                type = LOL.data[champion]["tags"][i];
                console.log(type);
                   if( typeChampion === type){  `
                   
                   <div class="champions-container">
                     <img src="${LOL.data['champion']['splash']}" />
                   </div>
                   `}
             }
       }
       
     .join("")}
     `
} */

  for(let champion in LOL.data){ 
     for(let i in LOL.data[champion]["tags"]){
         type = LOL.data[champion]["tags"][i];
           if(typeChampion === type){ 
 
             /*  listChampions.innerHTML += 
                "<div class='champions-container'>" 
                + "<img src=" + LOL.data[champion]['splash'] + " />"
                + "<div class='champion-name'>" 
                + "<h1 class='champion-name'>" + LOL.data[champion]['name'] + " </h1>"
                + "</div>" 
                + "</div>" */

            listChampions.innerHTML += `
            <div class='show-champions'>
                 <img src="${LOL.data[champion]['splash']}" />
               <div class="champion-name">
                 <h1 class="nome-campeoes">${LOL.data[champion]['name']}</h1>
               </div>
             </div>

            `

            }
     }
   }
  
}

function clearEesult(){
 document.querySelector(".show-champions").innerHTML = ""; 
}
/*

function showChampions(){
   for (let champion in LOL.data){
       let listChampions = document.querySelector(".show-champions"); 
        listChampions.innerHTML += 
            "<div class='champions-container'>" 
            + "<img src=" + LOL.data[champion]['splash'] + " />"
            + "</div>"  
     }
}*/
=======

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
  







>>>>>>> 01f1ddc360ff619d67176b3bb5e18a05dedc897a
