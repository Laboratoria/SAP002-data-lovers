fetch('./src/data/pokemon/pokemon.json').then(response => {
    return response.json();
}).then(data => {
    function showPokemonEggs(){
        //filtro 2km
        let data2k = data["pokemon"].filter((pokemon) => (pokemon["egg"] === "2 km"));
        let pokemon2k = document.getElementById("2k");
        pokemon2k.innerHTML = `
        ${data2k.map((pokemon) =>`
        <img src="${pokemon["img"]}">
        `).join("")}
        `
        //filtro 5km
        let data5k = data["pokemon"].filter((pokemon) => (pokemon["egg"] === "5 km"));
        let pokemon5k = document.getElementById("5k");
        pokemon5k.innerHTML = `
        ${data5k.map((pokemon) =>`
        <img src="${pokemon["img"]}">
        `).join("")}
        `
        //filtro 10km
        let data10k = data["pokemon"].filter((pokemon) => (pokemon["egg"] === "10 km"));
        let pokemon10k = document.getElementById("10k");
        pokemon10k.innerHTML = `
        ${data10k.map((pokemon) =>`
        <img src="${pokemon["img"]}">
        `).join("")}
        `
    }
    // console.log(data["pokemon"]);
    showPokemonEggs()
})
