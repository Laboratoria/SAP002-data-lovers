window.onload = function() {
    showPeriodos();
};

//Função showTheBest que procura a maior quantidade de poke por periodo e mostra a estatistica do melhor periodo para a captura;
//Fetch vai abrir o arquivo json, se a resposta for positiva, ele retorna o objeto;

function showTheBest(){
    fetch('./data/pokemon/pokemon.json').then(response => {
        return response.json();
    }).then(data => { //devolveu o data que é o objeto json? beleza; 
        function showPokemon(){ // Na função showPokemon ele utiliza esse objeto data para localizar as informações;
            let manha = data["pokemon"].filter(poke => {  // cada uma das let, filtam os pokes por periodo (manhã, tarde, noite e madrugada); -Filter (função) é tipo um for, ele percorre toda a array do pokemon, 
                let time = Number(poke["spawn_time"].split(":",1)); //e para cada elemento desse array denominamos "Poke". É criada uma função ({}) para validar se esse elemento esta dentro da condição, se sim, é adiciondo na var manhã;
                return time >= 6 && time < 12 //Como ele está fazendo essa verificação? ele pega o horairo que o pokemon aparece, separa a hora dos minutos, pega somente a hora e verifica se está entre 6 e 12 (no range do return);
            });
            let tarde = data["pokemon"].filter(poke => {
                let time = Number(poke["spawn_time"].split(":",1));
                return time >= 12 && time < 18
            });
            let noite = data["pokemon"].filter(poke => {
                let time = Number(poke["spawn_time"].split(":",1));
                return time >= 18 && time < 24
            });
            let madruga = data["pokemon"].filter(poke => {
                let time = Number(poke["spawn_time"].split(":",1));
                return time >= 0 && time < 6
            });
            //teste estatistica
            //pega a quantidade de cada array e verifica qual a maior;
            let best = Math.max.apply(Math,[manha.length,tarde.length,noite.length,madruga.length ]);
            // console.log(best);
            // document.getElementById("manha").innerHTML = ``;
            document.getElementById("tarde").innerHTML = ``;
            document.getElementById("noite").innerHTML = ``;
            document.getElementById("madrugada").innerHTML = ``;
            let bestContainer = document.getElementById("manha");
            switch (best){ //switch case para comparação tipo if e else, porém mais organizado;
                case manha.length:
                    bestContainer.innerHTML = `
                    <header>
                        <h1>Manha 6h as 12h</h1>
                    </header>
                    ${manha.map((pokemon) => `
                    <div class="minicard">
                        <h3>${pokemon["name"]}</h3>
                        <img src="${pokemon["img"]}">
                        <h5>Chances de encontrar: ${pokemon["avg_spawns"]}%</h5>
                        ${pokemon["type"].map(tipo => `
                        <button class="type-poke">${tipo}</button>
                        `).join("")}
                    </div>
                    `).join("")}
                    `
                case tarde.length:
                    bestContainer.innerHTML = `
                    <header>
                        <h1>Tarde 12h as 18h</h1>
                    </header>
                    ${tarde.map((pokemon) => `
                    <div class="minicard">
                        <h3>${pokemon["name"]}</h3>
                        <img src="${pokemon["img"]}">
                        <h5>Chances de encontrar: ${pokemon["avg_spawns"]}%</h5>
                        ${pokemon["type"].map(tipo => `
                        <button class="type-poke">${tipo}</button>
                        `).join("")}
                    </div>
                    `).join("")}
                    `
                case noite.length:
                    bestContainer.innerHTML = `
                    <header>
                        <h1>Noite 18h as 24h</h1>
                    </header>
                    ${noite.map((pokemon) => `
                    <div class="minicard">
                        <h3>${pokemon["name"]}</h3>
                        <img src="${pokemon["img"]}">
                        <h5>Chances de encontrar: ${pokemon["avg_spawns"]}%</h5>
                        ${pokemon["type"].map(tipo => `
                        <button class="type-poke">${tipo}</button>
                        `).join("")}
                    </div>
                    `).join("")}
                    `
                case madruga.length:
                    bestContainer.innerHTML = `
                    <header>
                        <h1>Madrugada 00h as 6h</h1>
                    </header>
                    ${madruga.map((pokemon) => `
                    <div class="minicard">
                        <h3>${pokemon["name"]}</h3>
                        <img src="${pokemon["img"]}">
                        <h5>Chances de encontrar: ${pokemon["avg_spawns"]}%</h5>
                        ${pokemon["type"].map(tipo => `
                        <button class="type-poke">${tipo}</button>
                        `).join("")}
                    </div>
                    `).join("")}
                    `
            }
        }
        document.getElementById("menu1").classList.remove("activeMenu");
        document.getElementById("menu2").classList.add("activeMenu");
        showPokemon();
    });
}

function showPeriodos(type){
    fetch('./data/pokemon/pokemon.json').then(response => {
        return response.json();
    }).then(data => {
        function showPokemon(){
            let manha = data["pokemon"].filter(poke => {
                let time = Number(poke["spawn_time"].split(":",1));
                if (type != null){
                    return time >= 6 && time < 12 && poke["type"].includes(type)
                }else{
                    return time >= 6 && time < 12
                }
            });
            let pokemonManha = document.getElementById("manha");
            pokemonManha.innerHTML = `
            <header>
                <h1>Manhã 6h as 12h</h1>
            </header>
            ${manha.map((pokemon) => `
            <div class="minicard">
                <h3>${pokemon["name"]}</h3>
                <img src="${pokemon["img"]}">
                <h5>Chances de encontrar: ${pokemon["avg_spawns"]}%</h5>
                ${pokemon["type"].map(tipo => `
                <button class="type-poke">${tipo}</button>
                `).join("")}
            </div>
            `).join("")}
            `
            let tarde = data["pokemon"].filter(poke => {
                let time = Number(poke["spawn_time"].split(":",1));
                return time >= 12 && time < 18
            });
            let pokemonTarde = document.getElementById("tarde");
            pokemonTarde.innerHTML = `
            <header>
                <h1>Tarde 12h ás 18h</h1>
            </header>
            ${tarde.map((pokemon) => `
            <div class="minicard">
                <h3>${pokemon["name"]}</h>
                <img src="${pokemon["img"]}">
                <h5>Chances de encontrar: ${pokemon["avg_spawns"]}%</h5>
                ${pokemon["type"].map(tipo => `
                <button class="type-poke">${tipo}</button>
                `).join("")}
            </div>
            `).join("")}
            `
            let noite = data["pokemon"].filter(poke => {
                let time = Number(poke["spawn_time"].split(":",1));
                return time >= 18 && time < 24
            });
            let pokemonNoite = document.getElementById("noite");
            pokemonNoite.innerHTML = `
            <header>
                <h1>Noite 18h ás 24h</h1>
            </header>
            ${noite.map((pokemon) => `
            <div class="minicard">
                <h3>${pokemon["name"]}</h3>
                <img src="${pokemon["img"]}">
                <h5>Chances de encontrar: ${pokemon["avg_spawns"]}%</h5>
                ${pokemon["type"].map(tipo => `
                <button class="type-poke">${tipo}</button>
                `).join("")}
            </div>
            `).join("")}
            `
            let madruga = data["pokemon"].filter(poke => {
                let time = Number(poke["spawn_time"].split(":",1));
                return time >= 0 && time < 6
            });
            let pokemonMadruga = document.getElementById("madrugada");
            pokemonMadruga.innerHTML = `
            <header>
                <h1>Madrugada 00h as 6h</h1>
            </header>
            ${madruga.map((pokemon) => `
            <div class="minicard">
                <h3>${pokemon["name"]}</h3>
                <img src="${pokemon["img"]}">
                <h5>Chances de encontrar: ${pokemon["avg_spawns"]}%</h5>
                ${pokemon["type"].map(tipo => `
                <button class="type-poke">${tipo}</button>
                `).join("")}
            </div>
            `).join("")}
            `
        }
        document.getElementById("menu1").classList.add("activeMenu");
        document.getElementById("menu2").classList.remove("activeMenu");
        showPokemon();
    });
}


var menu = document.getElementsByClassName("collapsible");
for(var i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
            content.style.maxHeight = null;
        } else {
            content.style.display = "block";
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
