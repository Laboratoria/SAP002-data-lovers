fetch('./data/pokemon/pokemon.json').then(response => {
    return response.json();
}).then(data => {
    function showPokemonEggs(){
        let data2k = data["pokemon"].filter((pokemon) => (pokemon["egg"] === "2 km"));
        let pokemon2k = document.getElementById("doisKm");
        pokemon2k.innerHTML = `
        ${data2k.map((pokemon) =>`
        <img src="${pokemon["img"]}">
        `).join("")}
        `
        let data5k = data["pokemon"].filter((pokemon) => (pokemon["egg"] === "5 km"));
        let pokemon5k = document.getElementById("cincoKm");
        pokemon5k.innerHTML = `
        ${data5k.map((pokemon) =>`
        <img src="${pokemon["img"]}">
        `).join("")}
        `
        let data10k = data["pokemon"].filter((pokemon) => (pokemon["egg"] === "10 km"));
        let pokemon10k = document.getElementById("dezKm");
        pokemon10k.innerHTML = `
        ${data10k.map((pokemon) =>`
        <img src="${pokemon["img"]}">
        `).join("")}
        `
    }
    showPokemonEggs()
})
