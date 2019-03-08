function init() {
    // declara variável que é um ponteiro para o elemento button no HTML
    // estou usando o método querySelector do DOM para buscar o elemento pelo seu ID (#btnIndicators)
    // o hash # indica que está usando um id, seria identico a usar o método getElementById
    let btnIndicators = document.querySelector("#btnIndicators");

    // adicionando um "escutador de eventos" para o evento click do mouse no botão que tem o id btnIndicators
    // falando para executar a função de nome createIndicatorsTable
    btnIndicators.addEventListener("click", createIndicatorsTable);
}

// declaração da função createIndicatorsTable e da lógica dela
function createIndicatorsTable() {
    let countrySelect = document.querySelector("#country");
    let countryCode = countrySelect.options[countrySelect.selectedIndex].value;
    let filterSelect = document.querySelector("#filter");
    let filterWord = filterSelect.options[filterSelect.selectedIndex].value;
    let initialYear = document.querySelector("#initialYear").value;

    // seleciona os indicadores do país escolhido
    // e aplica o flitro de indicadores
    let countryData = WORLDBANK[countryCode].indicators.filter(indicator => {
        if (indicator.indicatorName.toUpperCase().includes(filterWord)) return true;
        //if (indicator.indicatorCode === "GAFGFA.JHHJHA.GHGH") return true;
        return false;
    });

    countryData.sort(function(a, b) {return a.indicatorName.localeCompare(b.indicatorName);});

    // monta a tabela de indicadores
    let indicatorsTable = document.createElement("table");

    countryData.forEach(indicator => {
        // monta linha com o código e nome do indicador
        let row = document.createElement('tr');
        let cell = document.createElement('td');
        let qtyYearCols = 2018 - parseInt(initialYear);
        cell.textContent = indicator.indicatorCode;
        row.appendChild(cell);
        row.setAttribute("class", "indicator");
        cell = document.createElement('td');
        cell.setAttribute("colSpan", qtyYearCols - 1);
        cell.textContent = indicator.indicatorName;
        row.appendChild(cell);
        indicatorsTable.appendChild(row);

        // monta linhas com os anos e valores do indicador
        let rowYear = document.createElement('tr');
        rowYear.setAttribute("class", "year");
        let rowValue = document.createElement('tr');
        for(let year = parseInt(initialYear); year < 2018; year++) {
            // cria célula do ano
            cell = document.createElement('td');
            cell.textContent = year;
            rowYear.appendChild(cell);
            
            // cria célula do valor
            cell = document.createElement('td');
            cell.textContent = indicator.data[year];
            rowValue.appendChild(cell);
        }
        indicatorsTable.appendChild(rowYear);
        indicatorsTable.appendChild(rowValue);
    });


    let indicatorsTableSection = document.querySelector("#indicatorsTableSection");

    // se a tabela já existe, remove
    if(indicatorsTableSection.firstChild) {
        indicatorsTableSection.removeChild(indicatorsTableSection.firstChild);
    }

    // adiciona a tabela à seção
    indicatorsTableSection.appendChild(indicatorsTable);
}
