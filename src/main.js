let btnIndicators = document.querySelector("#btnIndicators");
btnIndicators.addEventListener("click", createIndicatorsTable);

function createIndicatorsTable() {
    let countrySelect = document.querySelector("#country");
    let countryCode = countrySelect.options[countrySelect.selectedIndex].value;
    let dataFilter = document.querySelector("#dataFilter").value;
    let initialYear = document.querySelector("#initialYear").value;

    // seleciona os indicadores do país escolhido
    // e aplica o flitro de indicadores
    let countryData = WORLDBANK[countryCode].indicators.filter(indicator => {
        return indicator.indicatorName.toUpperCase().includes(dataFilter.toUpperCase());
    });

    // monta a tabela de indicadores
    let indicatorsTable = document.createElement("table");
    countryData.forEach(indicator => {
        // monta linha com o nome do indicador
        let row = document.createElement('tr');
        let cell = document.createElement('td');
        let qtyYearCols = 2018 - parseInt(initialYear);
        cell.setAttribute("colSpan", qtyYearCols);
        cell.textContent = indicator.indicatorName;
        row.appendChild(cell);
        indicatorsTable.appendChild(row);

        // monta linhas com os anos e valores do indicador
        let rowYear = document.createElement('tr');
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
