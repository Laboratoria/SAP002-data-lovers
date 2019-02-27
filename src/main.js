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