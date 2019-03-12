
function getDataToChart(indicator, years){
  let data = indicator.data;
  let dataArray = years.map((year)=>[year, data[year]]);
  dataArray.unshift(['Año','%']);
  return dataArray; 
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