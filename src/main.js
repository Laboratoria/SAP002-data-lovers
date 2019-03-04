const peruIndicators = WORLDBANK.PER.indicators;
document.getElementById("peru").addEventListener("click", selectStatement);



function selectStatement() {
    document.getElementById("select-statement").innerHTML = `     
  ${peruIndicators.map((element)=> `<option value="${element.indicatorName}"> ${element.indicatorName} </option>`).join("")
  }`;
  };

  document.getElementById("select-statement").addEventListener("change", function(event) {
  let enunciado =  event.target.value;
  console.log(enunciado);

  let position = peruIndicators.filter(position => (position.indicatorName === enunciado));
    console.log(position)
  
  for (let i in position) {
    let year = [];
    year.push(Object.keys(position[i].data));
      console.log(year)
      return year
      
  }      

    
  
  
});