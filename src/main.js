document.getElementById("brasil").addEventListener("click", () => selectCountry("BRA"));
document.getElementById("chile").addEventListener("click", () => selectCountry("CHL"));
document.getElementById("mexico").addEventListener("click",() => selectCountry("MEX"));
document.getElementById("peru").addEventListener("click", () => selectCountry("PER"));


function selectCountry(country) {  
  selectIndicator(country);
  changeMap(country)
}

function changeMap(country){
  console.log(country)
      switch(country){
        case "BRA":
        document.getElementById("maps").src = "/src/img/BRA.png"
        break;
        case "CHL":
        document.getElementById("maps").src ="/src/img/CHL.png"
        break;
        case "MEX":
        document.getElementById("maps").src = "/src/img/MEX.png"
        break;
        case "PER":
        document.getElementById("maps").src = "/src/img/PER.png"
        break;
      }

  }


// publica no select de indicador os statements (enunciados)
function selectIndicator(country) {
  document.getElementById("select-indicator").innerHTML = `
  ${WORLDBANK[country].indicators.map((element)=> `<option class="option-indicators" data-country="${country}" value="${element.indicatorName}"> 
  ${element.indicatorName} </option>`).join("")}`;
};

//publica o ano no select 
function selectYear(year) {
  let array = Object.keys(year)
  document.getElementById("select-year").innerHTML = 
  array.map((element) => `<option> ${element} </option>`).join("");
};


//captura o enunciado
document.getElementById("select-indicator").addEventListener("change", function(event) {
  const indicator =  event.target.value;
  const country = event.target.children[0].dataset.country;
  document.getElementById("indicator").innerHTML = `<div> ${indicator}</div>`


  //busque no banco de dados o objeto em que se encontra o enunciado escolhido
  let position = WORLDBANK[country].indicators.filter(position => (position.indicatorName === indicator));
  console.log(position)

  //mostre o que tem no data do objeto ao qual pertence o enunciado e 
  let year = position[0]["data"] //uma array com  ["1960", "1961", "1962", "1963", ...]
  
  //chama a função que publica no select os anos e a que cria a tabela de divulgação
  selectYear(year);
  createTable(year)
 
});


function createTable(data) {
  document.getElementById("table").innerHTML = ` 
  <thead>
    <tr>
      <th>Ano</th>
      <th>Porcentagem % </th>
    </tr>
  </thead>
  `
  for (chave in data) {
  document.getElementById("table").innerHTML += `
    <tr class="table table-tr">
    <td class="table table-td">${chave}</td>
    <td class="table table-td">${data[chave]}</td>
    </tr>
  `}


}



//captura o ano selecionado pelo usuário  no select
document.getElementById("select-year").addEventListener("change", function (event){
  let period =  event.target.value;
  console.log(period);
})




