function myPokedexChart(mypokedexArray) {
    new Chart(document.getElementById("my-pokedex"), {
        type: 'horizontalBar',
        data: {
            labels: translateWeaknesses(Object.keys(pokemonListCount(mypokedexArray, "type"))),
            datasets: [{
                label: "Número de pokemons",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#A7CEE8", "#CBB5D4", "#A6DFD3", "#F4E3DF", "#E4B3AF", "#225270", "#5B3C68", "#277766", "#947D76", "#8F413B"],
                data: Object.values(pokemonListCount(mypokedexArray, "type"))
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function(value) { if (Number.isInteger(value)) { return value; } },
                        stepSize: 1
                    }
                }]
            },
            legend: { display: false },
            title: {
                display: true,
                text: 'Pokemons por tipo'
            }
        }
    })
}

function myWeaknessChart(mypokedexArray) {
    new Chart(document.getElementById("my-weakness"), {
        type: 'horizontalBar',
        data: {
            labels: translateWeaknesses(Object.keys(pokemonListCount(mypokedexArray, "weaknesses"))),
            datasets: [{
                label: "Número de pokemons",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#A7CEE8", "#CBB5D4", "#A6DFD3", "#F4E3DF", "#E4B3AF", "#225270", "#5B3C68", "#277766", "#947D76", "#8F413B"],
                data: Object.values(pokemonListCount(mypokedexArray, "weaknesses"))
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function(value) { if (Number.isInteger(value)) { return value; } },
                        stepSize: 1
                    }
                }]
            },
            legend: { display: false },
            title: {
                display: true,
                text: 'Fraquezas mais comuns'
            }
        }
    })
}