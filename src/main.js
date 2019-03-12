//1° passo: Selecionando os elementos do html referente os botões e seletores de indicador e ano;

const countryButtons = document.querySelectorAll("[data-select_country='country-btn']");
const indicatorsSelector = document.getElementById("select-indicator");

//2° passo: Através de um "for of", é adicionado um "addEventListener" para "ouvir" qual botão foi clicado;
//O "event" chama função "addIndicators" e manda o id do botão clicado para que a função busque os indicadores
for (let button of countryButtons){
  button.addEventListener(
    'click', (event) => {
      selectCountry(event.srcElement.id);
    }
  );
}

//continuação da adicão de "addEventListener", agora nos seletores
indicatorsSelector.addEventListener("change", (event) => {selectIndicator(event.target.value)});

// 3° passo: Ao clicar no botão, a função "selectCountry" guarda o país selecionado em uma "localStorage" e chama as funções "addIndicators..." e "AddCountryMap", assim os indicadores e o mapa do país selecionado já aparecerão na tela.
function selectCountry(countryName){
  window.localStorage.setItem("country", countryName);
  addIndicatorsToSelector(countryName);
  addCountryMap(countryName);
}

// 4° passo :
function addIndicatorsToSelector(country){
  // puxar o array de indicadores de acordo com o país selecionado
  const indicatorsArray = getIndicatorsByCountry(country);
  // transferir as opções mapeadas para dentro do select no html
  const options = indicatorsArray.map((element) => 
  `<option value="${element.indicatorCode}">${element.indicatorName}</option>`).join("");
  indicatorsSelector.innerHTML = options;
}

function addYearsToSelector(data){
  // transferir as datas mapeadas para dentro do select no html
  const options = Object.entries(data).map(element => {
    let elementoTratado = {};
    elementoTratado['year'] = element[0];
    elementoTratado['value'] = element[1];
    return elementoTratado;
  }).filter((element) => element.value != "")
    .map((element) =>  addOptionsToSelector(element.year, element.year))
    .join("");
  yearsSelector.innerHTML = options;
}

function addOptionsToSelector(value, content){
  return `<option value="${value}">${content}</option>`;
}

// Pedaço do 4° passo:
function getIndicatorsByCountry(country){
  //chama a função "switchCountry" e guarda o retorno em uma varíavel
  let selectedCountry = switchCountry(country);
  //procura os indicadores de acordo com o país retornado por "switchCountry"
  return selectedCountry.indicators;
}

//pega o nome do indicador dentro do objeto
function getIndicatorName(indicator){
  return indicator.indicatorName;
}

// Outro pedaço do 4° passo:
//Usa o "switch" para buscar o objeto "WorldBank" de acordo com o país escolhido.

function switchCountry(countryName){
  switch(countryName){
    case "brasil":
    return WORLDBANK.BRA;
    case "chile":
    return WORLDBANK.CHL;
    case "mexico":
    return WORLDBANK.MEX;
    case "peru":
      return WORLDBANK.PER;
    }
  }

//5° passo:
// seleciona a seção do map por um id,
// dá um atributo de classe para a seção de acordo com o país selecionado para que o CSS adicione o mapa
function addCountryMap(country){
  const mapSection = document.getElementById("country-map");
  mapSection.setAttribute("class", `map-${country}`);
}

function getIndicatorByCode(code) {
  let indicators = getIndicatorsByCountry(localStorage.country).filter((element)=> element.indicatorCode === code);
  return indicators[0];
}

function selectIndicator(indicatorCode){
  window.localStorage.setItem("indicator", indicatorCode);
  let indicator = getIndicatorByCode(indicatorCode);
  addYearsToSelector(indicator.data);
}

const yearsSelector = document.getElementById("select-years");
yearsSelector.addEventListener("change",(event)=>{getMultipleYears(event)});
//yearsSelector.addEventListener("change",(event)=>{selectYear(event.target.value)});

function getMultipleYears(e) {
  let opts = e.target.options;
  let len = opts.length;
  let selected = [];
  for (let i = 0; i < len; i++) {
      if (opts[i].selected) {
          selected.push(opts[i].value);
      }
  }
  selectYear(selected);
}

function selectYear(year){
  let indicator = getIndicatorByCode(localStorage.indicator);
  let chartTitle = indicator.indicatorName;
  let chartData = getDataToChart(indicator);
  // yearsSelector.val();
  console.log(chartData);
  console.log(yearsSelector.val);
  if (typeof(chartData) === 'object') {
    drawChart(chartTitle, chartData);
  } else {
    noData();
  }
}

