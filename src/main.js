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


// Branch: Section Indicator


// function indicaEduca(array, attr) {
//   for (let elem of arrayIndica) {
//     console.log(array, attr);
//     console.log(elem)
//   }
// }


// function indexIndicator(array, attr, value) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i][attr] === value) {
//       return i;
//     }
//   }
//   return -1;
// }

// const arrayIndicaBra = WORLDBANK.BRA.indicators
// const arrayIndicaPer = WORLDBANK.PER.indicators
// const arrayIndicaMex = WORLDBANK.MEX.indicators
// const arrayIndicaChi = WORLDBANK.CHL.indicators

// function getEducaBra() {
//   indexIndicator(arrayIndicaBra, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)')

//   indexIndicator(arrayIndicaBra, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)')

//   indexIndicator(arrayIndicaBra, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)')

// }

// function getEducaChl() {
//   indexIndicator(arrayIndicaChi, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)')

//   indexIndicator(arrayIndicaChi, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)')

//   indexIndicator(arrayIndicaChi, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)')

// }

// function getEducaMex() {
//   indexIndicator(arrayIndicaMex, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)')

//   indexIndicator(arrayIndicaMex, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)')

//   indexIndicator(arrayIndicaMex, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)')

// }


// function getEducaMex() {
//   indexIndicator(arrayIndicaMex, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)')

//   indexIndicator(arrayIndicaMex, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)')

//   indexIndicator(arrayIndicaMex, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)')

// }


// console.log(indicaEducaABra, indicaEducaBBra, indicaEducaCBra)

// const dataUm = WORLDBANK["BRA"]["indicators"][indicaEducaABra]["data"][2015]


// console.log(dataUm)

// // Solucionar - como pegar valor de radio button
// document.getElementById('btnEscolha').addEventListener('click', getIndicaChoiche)

// function getIndicaChoiche() {
//   let indicador = document.forms[0];
//   let txt = "";
//   let i;
//   for (i = 0; i < indicador.length; i++) {
//     if (indicador[i].checked) {
//       txt = txt + indicador[i].value + " ";
//     }
//   }
//   return txt;
// }

// console.log(getIndicaChoiche())

// function getMsgForm() {
//   const novaMensagem = document.forms["tweetform"]["tweetmsg"].value;
//   let tweet = document.createElement('p');
//   tweet.innerHTML = novaMensagem;
//   document.getElementById('mural').appendChild(horas);
//   document.getElementById('mural').appendChild(tweet);
//   document.forms["tweetform"]["tweetmsg"].value = '';
//   btn.disabled = true;
//   btn.style.cursor = 'not-allowed';
//   event.preventDefault()
// }

// var template = $('#country-selection').html();

// $('btn-topic-educa').click(function() {
//     $('#topic').append(template);
// });


document.getElementById('btn-topic-educa').addEventListener('click', ()=> {
  selectCountryEduca();
})


  function selectCountryEduca(){
  let productDiv = document.getElementById('country-selection');
  productDiv.innerHTML = `
  <div class="box-select">
<div class="box-country">
  <div class="bra">
    <a class="btn-coun*4try bra" href="#"><img class="img-bra" src="img/bra.png" alt=""></a>
      <p class="p-country">Brasil</p>

</div>
    <div class="mex">
      <a class="btn-country mex" href="#"><img class="img-mex" src="img/mex.png" alt=""></a>
        <p class="p-country">México</p>
</div>

      <div class="per">
        <a class="btn-country per" href=""><img class="img-per" src="img/per.png" alt=""></a>
          <p class="p-country">Perú</p>
</div>
        <div class="chi">
          <a class="btn-country chi" href=""><img class="img-chi" src="img/chi.png" alt=""></a>
            <p class="p-country">Chile</p>
</div>
        </div>

        <div class="btn country">
          <a href="#">PANORAMA GERAL</a>
          <a href="#">INICIAR</a>
        </div>


      </div>
      <article>
      <div class="element">
      <div class="elemA"></div>
      <div class="elemB"></div>
      </div>
      
        <div class="ball-topic"></div>
        <p class="topic-text-element">EDUCAÇÃO <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam sit facilis odit magnam nulla rem
fugiat consequuntur perferendis explicabo, amet ipsa ex dolor vitae sed quasi totam, veritatis nihil?</p>
        
        
      </article>`
}


