const countryButtons = document.querySelectorAll('[data-select_country]');
const indicatorsSelector = document.getElementById("select-indicator");

console.log(countryButtons)
for (let countryBtn of countryButtons) {
    countryBtn.addEventListener('click',(event) => 
    selectCountry(event.srcElement.id));
}

selectIndicator.addEventListener('change',(event)=> 
console.log('change', event.target.value));

selectYear.addEventListener('click',(event)=> 
console.log('click', event.target.value));

function selectCountry(countryName){
    window.localStorage.setItem("country", countryName);
    addIndicatorsToSelector(countryName);
    addCountryMap(countryName);
}


function addIndicatorsToSelector(country){
    const indicatorsArray = getIndicatorsByCountry(country);
    const options = indicatorsArray.map((element) => `<option value="${element.indicatorCode}">${element.indicatorName}</option>`).join("");
    indicatorsSelector.innerHTML = options;
}

function getIndicatorsByCountry(country){
    let selectedCountry = switchCountry(country);
    return selectedCountry.indicators;
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
