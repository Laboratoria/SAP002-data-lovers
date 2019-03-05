// window.onload = function(){
//   showIndicadores();
// }

// function getData(){
//   return Object.values(WORLDBANK)
  
// }
// console.log(getData())


// function showIndicadores(){
//   let productDiv = document.getElementById('indicators-div');
//   productDiv.innerHTML = `
//   ${getData().map((indicador) => `
//     <div class="product-item">
//       <p>${indicador["indicators"][74]["indicatorName"]}</p>
//       <p>${indicador["indicators"][74]["countryName"]}</p>
//       <p>${indicador["indicators"][74].data[2013]}</p>
//       <p>${indicador["indicators"][74].data[2014]}</p>
//       <p>${indicador["indicators"][74].data[2015]}</p>
//     </div>`).join('')}`
// }


// const array = WORLDBANK.BRA.indicators

// function indexIndicator(array, attr, value) {
//     for(var i = 0; i < array.length; i++) {
//         if(array[i][attr] === value) {
//             return i;
//         }
//     }
//     return -1;
// }

// const verData = WORLDBANK["BRA"]["indicators"][72]["data"][2015]
// const nomeIndicador = WORLDBANK["MEX"]["indicators"][72]["indicatorName"]
// console.log(verData)

// console.log(indexIndicator(array, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)'))

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




function indicaEduca (array, attr) {
  for (let elem of arrayIndica){
    console.log(array, attr);
    console.log(elem)
  }
}


function indexIndicator(array, attr, value) {
    for(var i = 0; i < array.length; i++) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}

const arrayIndicaBra = WORLDBANK.BRA.indicators
const arrayIndicaPer = WORLDBANK.PER.indicators
const arrayIndicaMex = WORLDBANK.MEX.indicators
const arrayIndicaChi = WORLDBANK.CHL.indicators

let indicaEducaABra = indexIndicator(arrayIndicaBra, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)')

let indicaEducaBBra = indexIndicator(arrayIndicaBra, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)')

let indicaEducaCBra = indexIndicator(arrayIndicaBra, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)')

console.log(indicaEducaABra, indicaEducaBBra, indicaEducaCBra)

const dataUm = WORLDBANK["BRA"]["indicators"][indicaEducaABra]["data"][2015]


console.log(dataUm)

// Solucionar - como pegar valor de radio button
document.getElementById('btnEscolha').addEventListener('click', getIndicaChoiche)

function getIndicaChoiche() {
  let indicador = document.forms[0];
  let txt = "";
  let i;
  for (i = 0; i < indicador.length; i++) {
    if (indicador[i].checked) {
      txt = txt + indicador[i].value + " ";
    }
  }
  return txt;
}

console.log(getIndicaChoiche())

function getMsgForm() {
  const novaMensagem = document.forms["tweetform"]["tweetmsg"].value;
  let tweet = document.createElement('p');
  tweet.innerHTML = novaMensagem;
  document.getElementById('mural').appendChild(horas);
  document.getElementById('mural').appendChild(tweet);
  document.forms["tweetform"]["tweetmsg"].value = '';
  btn.disabled = true;
  btn.style.cursor = 'not-allowed';
  event.preventDefault()
}

