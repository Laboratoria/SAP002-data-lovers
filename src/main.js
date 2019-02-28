
/*window.onload = function () {
  showChampions();
}; */
 
let dropMenu = document.querySelector(".drop-menu");
dropMenu.addEventListener("change", showChampions);

//----------------------FUNÇÃO FUNCIONANDO ----------------------------------
function getProducts() {
 return LOL["data"];
}

function clearResult(){
 document.querySelector(".show-champions").innerHTML = ""; 
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
