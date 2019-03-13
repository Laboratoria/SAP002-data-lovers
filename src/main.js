const countryButtons = document.querySelectorAll("[data-select_country='country-btn']");
const indicatorsSelector = document.getElementById("select-indicator");
const yearsSelector = document.getElementById("select-years");
const reset = document.getElementById("reset");

indicatorsSelector.addEventListener("change", (event) => {selectIndicator(event.target.value)});
yearsSelector.addEventListener("change",(event)=>{getMultipleYears(event)});
reset.addEventListener("click",(event) => {location.reload();})

for (let button of countryButtons){
  button.addEventListener("click", (event) => {
      selectCountry(event.srcElement.id);
    }
  );
}

function selectCountry(countryName){
  window.localStorage.setItem("country", countryName);
  addIndicatorsToSelector(countryName);
  addCountryMap(countryName);
}

function addIndicatorsToSelector(country){
  const indicatorsArray = getIndicatorsByCountry(country);
  const options = indicatorsArray.map((element) => 
  `<option value="${element.indicatorCode}">${element.indicatorName}</option>`).join("");
  indicatorsSelector.innerHTML = options;
}

function addYearsToSelector(data){
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

function getIndicatorsByCountry(country){
  let selectedCountry = switchCountry(country);
  return selectedCountry.indicators;
}

function getIndicatorName(indicator){
  return indicator.indicatorName;
}

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

function selectYear(yearsArray){
  let indicator = getIndicatorByCode(localStorage.indicator);
  let chartTitle = indicator.indicatorName;
  let chartData = getDataToChart(indicator, yearsArray);
  console.log(chartData);
  if (typeof(chartData) === 'object') {
    drawChart(chartTitle, chartData);
  } else {
    noData();
  } 
} 