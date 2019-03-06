window.onload = function() {
    showPeriodos();
};

function showTheBest(){
    fetch('./data/pokemon/pokemon.json').then(response => {
        return response.json();
    }).then(data => {
        function showPokemon(){
            let manha = data["pokemon"].filter(poke => {
                let time = Number(poke["spawn_time"].split(":",1));
                return time >= 6 && time < 12
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
            let best = Math.max.apply(Math,[manha.length,tarde.length,noite.length ,madruga.length ]);
            console.log(best);

            let somaManha = manha.reduce((a,b) => a + b["avg_spawns"],0);
            let somaTarde = tarde.reduce((a,b) => a + b["avg_spawns"],0);
            let somaNoite = noite.reduce((a,b) => a + b["avg_spawns"],0);
            let somaMadruga = madruga.reduce((a,b) => a + b["avg_spawns"],0);
            console.log(somaManha);
            console.log(somaTarde);
            console.log(somaNoite);
            console.log(somaMadruga);

            // let pokemonManha = document.getElementById("manha");
            // pokemonManha.innerHTML = `
            // <header>
            //     <h1>Manha 6h as 12h</h1>
            // </header>
            // ${manha.map((pokemon) => `
            // <div class="minicard">
            //     <h5>${pokemon["name"]}</h5>
            //     <img src="${pokemon["img"]}">
            //     <h5>Chances de encontrar: ${pokemon["avg_spawns"]}%</h5>
            //     ${pokemon["type"].map(tipo => `
            //     <button class="type-poke">${tipo}</button>
            //     `).join("")}
            // </div>
            // `).join("")}
            // `
        }
        showPokemon();
    });
}

function showPeriodos(){
    fetch('./data/pokemon/pokemon.json').then(response => {
        return response.json();
    }).then(data => {
        function showPokemon(){
            let manha = data["pokemon"].filter(poke => {
                let time = Number(poke["spawn_time"].split(":",1));
                return time >= 6 && time < 12
            });
            let pokemonManha = document.getElementById("manha");
            pokemonManha.innerHTML = `
            <header>
                <h1>Manha 6h as 12h</h1>
            </header>
            ${manha.map((pokemon) => `
            <div class="minicard">
                <h5>${pokemon["name"]}</h5>
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
                <h1>Tarde 12h as 18h</h1>
            </header>
            ${tarde.map((pokemon) => `
            <div class="minicard">
                <h4>${pokemon["name"]}</h4>
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
                <h1>Noite 18h as 24h</h1>
            </header>
            ${noite.map((pokemon) => `
            <div class="minicard">
                <h3>${pokemon["name"]}</h3>
                <img src="${pokemon["img"]}">
                <h3>Chances de encontrar: ${pokemon["avg_spawns"]}%</h3>
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
                <h3>Chances de encontrar: ${pokemon["avg_spawns"]}%</h3>
                ${pokemon["type"].map(tipo => `
                <button class="type-poke">${tipo}</button>
                `).join("")}
            </div>
            `).join("")}
            `
        }
        // console.log(data["pokemon"]);
        showPokemon();
    });
}



