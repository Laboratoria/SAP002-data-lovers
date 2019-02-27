// var ulIndicators = document.querySelector('#ulIndicatorsPeru');
// WORLDBANK.PER.indicators.forEach(indicator => {
//     var li = document.createElement('li');
//     li.textContent = indicator.indicatorName;
//     ulIndicators.appendChild(li);
// });

// ulIndicators = document.querySelector('#ulIndicatorsMexico');
// WORLDBANK.MEX.indicators.forEach(indicator => {
//     var li = document.createElement('li');
//     li.textContent = indicator.indicatorName;
//     ulIndicators.appendChild(li);
// });

// ulIndicators = document.querySelector('#ulIndicatorsChile');
// WORLDBANK.CHL.indicators.forEach(indicator => {
//     var li = document.createElement('li');
//     li.textContent = indicator.indicatorName;
//     ulIndicators.appendChild(li);
// });

    let ulIndicators = document.querySelector('#ulIndicatorsBrasil');
    WORLDBANK.BRA.indicators.forEach(indicator => {
    var li = document.createElement('li');
    li.textContent = indicator.indicatorName;
    ulIndicators.appendChild(li);


    // let ulIndicatorsBrasil = filter.ulIndicators((item) => item.indicatorName ==="mujeres");
    // console.log(ulIndicators);

 });





