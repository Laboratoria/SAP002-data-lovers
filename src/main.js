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


// VIOLENCIA
// INDICADORES 

// // Mujeres que creen que está justificado que un marido golpee a su esposa (cualquiera de las cinco razones) (%)


// Proporción de mujeres víctimas de violencia física o sexual en los últimos 12 meses (% de mujeres de entre 15 y 49 años)

// Dados somente em PERU - Lembrar ideia dashboars para este tema

