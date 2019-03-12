
function getDataToChart(indicator){
  // let indicator = getIndicatorByCode(localStorage.indicator);
  let data = indicator.data;
  let array = [['Año', '%']];
  Object.entries(data).map((el)=> {
    if (el[1] !== "") {
      array.push(el)
    }
  });

  if (array.length > 1) {
    return array;
  }
  return "";
}

function drawChart(title, contentTable){
  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        var data = google.visualization.arrayToDataTable(
          contentTable
        );

        var options = {
          title : title,
          vAxis: {title: '%'},
          hAxis: {title: 'Años'},
          seriesType: 'bars',
          series: {/* data.length */ 5: {type: 'line'}}
        };

        var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
}

function noData() {
  document.getElementById('chart_div').innerHTML = "no tenemos datos"
}