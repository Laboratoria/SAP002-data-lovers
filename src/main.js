
 let dropMenu = document.querySelector(".drop-menu");
 dropMenu.addEventListener("change", showChampions);
 
// //----------------------FUNÇÃO FUNCIONANDO ----------------------------------

// function showChampions(){
//     let typeChampion = dropMenu.value;    
//     let type;
//     let listChampions = document.querySelector(".show-champions"); 
//     let championName = document.querySelector(".champion-name")

//         listChampions.innerHTML = ""
//         for (let champion in LOL.data) {
//             for(i in LOL.data[champion]["tags"]){
//                 type = LOL.data[champion]["tags"][i]
//                 if( typeChampion === type){
//                     let img = document.createElement("img");
//                     img.src = LOL.data[champion]["splash"];
//                     listChampions.appendChild(img);
                           
//                     //---ALGO DE ERRADO NÃO ESTÁ CERTO! =( ----
//                     // ---NÃO ESTÁ BUSCANDO O NOME---
//                     // for(i in LOL.data[champion]["name"])   {
//                     //     let name = document.createElement('h1');
//                     //     name = LOL.data[champion]["name"];
//                     //     championName.appendChild(name);
//                 }

                
    
                

//             }
    
//         }
 
// };

// -------- NÃO ROLOU PQ A ESTRUTURA DO OBJ É DIFERENTE, NÃO ACEITA MAP NEM FILTER-----

 
// function objToArray(obj){
//     let result = [];
//     for (key of Object.keys(obj)){
//         result.push([key, obj[key]])
//     }
//     return result

// }


  
  

  

   
       
    

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
                        <div class='card'>
                            <img src="${LOL.data[champion]['splash']}" class='champions-img' />
                            <div class="tex-name">
                                <h2 class="champion-name">${LOL.data[champion]['name']}</h2>
                                <h1 class="champion-name">${LOL.data[champion]['tags']}</h1>
                            </div>
                        </div>
                    </div>
                 </section>
   
                `
            }
        }
    }
}



function clearResult(){
    document.querySelector(".show-champions").innerHTML = ""; 
  }