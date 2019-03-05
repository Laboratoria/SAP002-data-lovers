const peruIndicators = WORLDBANK.PER.indicators;
document.getElementById("peru").addEventListener("click", selectStatement);


// publica no select de indicador os statements (enunciados)
function selectStatement() {
    document.getElementById("select-statement").innerHTML = `
    ${peruIndicators.map((element)=> `<option value="${element.indicatorName}"> ${element.indicatorName} </option>`).join("")}`;
};


//publica o ano no select 
function selectYear(array) {
  document.getElementById("select-year").innerHTML = 
  array.map((element) => `<option> ${element} </option>`).join("");

}
//captura o enunciado
document.getElementById("select-statement").addEventListener("change", function(event) {
  let statement =  event.target.value;
    console.log(statement);

  //busque no banco de dados o objeto em que se encontra o enunciado escolhido
    let position = peruIndicators.filter(position => (position.indicatorName === statement));
    console.log(position)

  //mostre o que tem no data do objeto ao qual pertence o enunciado e chama a função que publica no select os anos
  let year = Object.keys(position[0]["data"]) //uma array com  ["1960", "1961", "1962", "1963", ...]
  console.table(year);

  selectYear(year)
  
});