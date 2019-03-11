let searIndicators = document.querySelector("#butSearch");
searIndicators.addEventListener("click", createTable);

function createTable() {
    // busca os valores dos filtros selecionados pelo usuário
    let selCountry = document.querySelector("#selCountry");
    let countryFilter = selCountry.options[selCountry.selectedIndex].value;
    let selTheme = document.querySelector("#selTheme");
    let themeFilter = selTheme.options[selTheme.selectedIndex].value;

    // filtra os dados usando o código do país e a palavra chave que deve estar contida nome do indicador
    let countryData = WORLDBANK[countryFilter].indicators.filter(indicator => {
        return (indicator.indicatorName.toUpperCase().includes(themeFilter));
    });

    // ordena o array pelo nome do indicador usando uma função de comparação pelo indicatorName
    countryData.sort(function(a, b) {return a.indicatorName.localeCompare(b.indicatorName);});

    let table = document.querySelector("#tabIndicators");
    // verifica se o corpo da tabela já tem alguma linha além do header, se tiver exclui todas menos o header
    while (table.rows.length > 1) {
      table.deleteRow(1);
    }

    // define as constantes dos anos inicial e final que aparecem na tabela
    // se mudar isso tem que ajustar também no HTML o header da tabela
    const initialYear = 2013;
    const endYear = 2017;
    const qtyYearCells = 5;

    // monta a nova tabela com os dados já ordenados e calcula a média
    countryData.forEach(indicator => {
        let row = table.insertRow();
        row.setAttribute("class", "valueRow");

        // cria a célula do nome do indicador
        let cell = row.insertCell(-1);
        cell.textContent = indicator.indicatorName;

        let total = 0.00;
        // cria as células dos valores do indicador para cada ano
        for (let year=initialYear; year<=endYear; year++) {
            cell = row.insertCell(-1);

            // transforma o valor de string em número para poder fazer a totalização
            let indicatorValue = parseFloat(indicator.data[year]);
            if (isNaN(indicatorValue)) {
              cell.textContent = "--";
            } else {
              // se for um número válido, soma na totalização e apresenta o valor com duas casas decimais
              total += indicatorValue;
              cell.textContent = indicatorValue.toFixed(2);
            }
        }

        // calcula a média dos valores do indicador pela quantidade de anos apresentada 
        let average = total / qtyYearCells;
        // e cria a célula da média 
        cell = row.insertCell(-1);
        cell.textContent = average.toFixed(2);
    });

    let secDados = document.querySelector("#secDados");
    if (table.rows.length > 1) {
      // se a tabela montada ficou com mais de uma linha, retira a imagem de fundo e deixa a tabela visível
      secDados.setAttribute("class", "secDados");
      table.setAttribute("class", "visible");
    } else {
      // se a tabela montada ficou somente com o header, coloca a imagem de fundo e deixa a tabela invisível
      secDados.setAttribute("class", "secDadosImage");
      table.setAttribute("class", "invisible");
    }
}