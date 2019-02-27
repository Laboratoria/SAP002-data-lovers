const peruIndicators = WORLDBANK.PER.indicators;
document.getElementById("peru").addEventListener("click", selectStatement);



function selectStatement() {
    document.getElementById("select-statement").innerHTML = `     
    ${peruIndicators.map((element)=>  `<option> ${element.indicatorName} </option>`).join("")
    }`

};


let statement = document.getElementById("view").addEventListener("change", capture() {
    aquilo que estiver selecionado no select-statement.value
    
}   )

console.log(statement)






// let dataYear =  WORLDBANK.PER.indicators;
// document.getElementById("select-year").innerHTML = `     
//     ${peruIndicators.map((element)=>  `<div> ${element["data"]["2002"]} </div>`).join("")
//     }`

// let statement = selectStatement()


// let newArray = peruIndicators.filter(element=> element.indicatorName === "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)" )


// console.table(newArray)