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




/*EDUCACAO
INDICADORES 
SERIE TEMPORAL : 2013 até 2015

Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)
var educaFirstTopic = 
Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)
var educaScndTopic =
Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)
var educaThirdTopic =


VIOLENCIA
INDICADORES 
SERIE TEMPORAL : 2013 até 2015

Mujeres que creen que está justificado que un marido golpee a su esposa (cualquiera de las cinco razones) (%)
Proporción de mujeres víctimas de violencia física o sexual en los últimos 12 meses (% de mujeres de entre 15 y 49 años)
Dados somente em PERU - Lembrar ideia dashboars para este tema*/

