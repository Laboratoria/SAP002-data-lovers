window.onload = function(){
    showIndicadores();
}

function getAno(){
    return Object.values(WORLDBANK)
    
  }
  console.log(getAno())
  
  
  function showIndicadores(){
    let productDiv = document.getElementById('indicators-div');
    productDiv.innerHTML = `
    ${getAno().map((indicador) => `
      <div class="product-item">
        <p>${indicador["indicators"][0]["indicatorName"]}</p>
        <p>${indicador["indicators"][0]["countryName"]}</p>
        <p>${indicador["indicators"][0].data[2015]}</p>
      </div>`).join('')}`
  }