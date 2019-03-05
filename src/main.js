const peruIndicators = WORLDBANK.PER.indicators;
document.getElementById("peru").addEventListener("click", selectStatement);


// publica no select de indicador os statements (enunciados)
function selectStatement() {
    document.getElementById("select-statement").innerHTML = `     
    ${peruIndicators.map((element)=> `<option value="${element.indicatorName}"> ${element.indicatorName} </option>`).join("")}`;
};


// deveria publicar os anos no select de ano --- não funciona, preciso da variável ano
function selectYear(year) {
  for (i in year) {
    document.getElementById("select-year").innerHTML = ` <option> ${year} </option>` ;
  }
}


//capture o enunciado
document.getElementById("select-statement").addEventListener("change", function(event) {
  let statement =  event.target.value;
    console.log(statement);

  //busque no banco de dados o objeto em que se encontra o enunciado escolhido
    let position = peruIndicators.filter(position => (position.indicatorName === statement));
    console.log(position)

  //mostre o que tem no data do objeto ao qual pertence o enunciado
    let year = (position[0]["data"]);
    console.table(year);

  // execute a função que publica o ano no select
    selectYear(year)

  // deveria divulgar os resultados --- não funciona
    for (i in year ){
    document.getElementById("show-content").innerHTML = ` <div> ${year[i]} </div>`;
  }
  return year
});