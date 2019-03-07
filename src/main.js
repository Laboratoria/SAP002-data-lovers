
document.getElementById('btn-topic-educa').addEventListener('click', () => {
  selectCountryEduca();
  cliqueBrasil()
})

document.getElementById('btn-topic-viol').addEventListener('click', () => {
  selectCountryViolence();
})

document.getElementById('btn-topic-pop').addEventListener('click', () => {
  selectCountryPop();
})


// Cria templates da section country-selection

function selectCountryEduca() {
  let productDiv = document.getElementById('country-selection');
  productDiv.innerHTML = `
  <div class="box-select">
<div class="box-country">
  <div class="bra">
    <a id="btn-bra" class="btn-country bra" href="#"><img class="img-bra" src="img/bra.png" alt=""></a>
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

function selectCountryViolence() {
  let productDiv = document.getElementById('country-selection');
  productDiv.innerHTML = `
  <div class="box-select">
<div class="box-country">
  <div class="bra">
    <a class="btn-country bra" href="#"><img class="img-bra" src="img/bra.png" alt=""></a>
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
        <p class="topic-text-element">VIOLÊNCIA <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam sit facilis odit magnam nulla rem
fugiat consequuntur perferendis explicabo, amet ipsa ex dolor vitae sed quasi totam, veritatis nihil?</p>
        
        
      </article>`
}

function selectCountryPop() {
  let productDiv = document.getElementById('country-selection');
  productDiv.innerHTML = `
  <div class="box-select">
<div class="box-country">
  <div class="bra">
    <a class="btn-country bra" href="#"><img class="img-bra" src="img/bra.png" alt=""></a>
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
        <p class="topic-text-element">POPULAÇÃO <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam sit facilis odit magnam nulla rem
fugiat consequuntur perferendis explicabo, amet ipsa ex dolor vitae sed quasi totam, veritatis nihil?</p>
        
        
      </article>`
}


// clicou brasil
function indexIndicator(array, attr, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][attr] === value) {
      return i;
    }
  }
  return -1;
}

const arrayIndicaBra = WORLDBANK.BRA.indicators
const arrayIndicaPer = WORLDBANK.PER.indicators
const arrayIndicaMex = WORLDBANK.MEX.indicators
const arrayIndicaChi = WORLDBANK.CHL.indicators

function getEducaBra() {
  return indexIndicator(arrayIndicaBra, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)')

  indexIndicator(arrayIndicaBra, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)')

  indexIndicator(arrayIndicaBra, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)')

}

console.log(getEducaBra())

function getEducaChl() {
  indexIndicator(arrayIndicaChi, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)')

  indexIndicator(arrayIndicaChi, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)')

  indexIndicator(arrayIndicaChi, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)')

}

function getEducaMex() {
  indexIndicator(arrayIndicaMex, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)')

  indexIndicator(arrayIndicaMex, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)')

  indexIndicator(arrayIndicaMex, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)')

}


function getEducaPer() {
  indexIndicator(arrayIndicaPer, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)')

  indexIndicator(arrayIndicaPer, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)')

  indexIndicator(arrayIndicaPer, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)')

}


let educaBraUm = indexIndicator(arrayIndicaBra, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación primaria (%)')

let educaBraDois = indexIndicator(arrayIndicaBra, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación secundaria (%)')

let educaBraTres = indexIndicator(arrayIndicaBra, 'indicatorName', 'Proporción de inscripciones de mujeres con respecto a varones en la educación terciaria (%)')

console.log(educaBraUm, educaBraDois, educaBraTres)



function cliqueBrasil() {
  return WORLDBANK.BRA['indicators'][74].data[2013]  
}



console.log(WORLDBANK.BRA['indicators'][74])




elements = document.getElementsByTagName("input");
for(let el of elements) {
  console.log("x");
  el.addEventListener('click', printValue)
}

function printValue(event) {
  valor = document.getElementById("formEduca").indicator.value;
  document.getElementById('escolha').innerHTML = valor;
  return valor
}

function getContent() {
  return document.getElementById("escolha").innerHTML;
}

console.log()
const verData = WORLDBANK["BRA"]["indicators"][74]["data"][2015]


