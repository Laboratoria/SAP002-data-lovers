function getDataToChart(indicator, years){
  let data = indicator.data;
  let sum = 0 ;
  for (let year of years) {
    sum+=data[year];  
  } 
  let media = sum/years.length;
  let dataArray = years.map((year)=>[year, data[year], media]);
  dataArray.unshift(['Año','%', `media=${media}`]);
  return dataArray; 
}
function drawChart(title, contentTable){
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawVisualization);
    function drawVisualization() {
      let data = google.visualization.arrayToDataTable(
        contentTable
      );
      let options = {
        title : title,
        vAxis: {title: '%'},
        hAxis: {title: 'Años'},
        seriesType: 'bars',
        series: {1: {type: 'line'}}
      };
      let chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }
}
function noData() {
  document.getElementById('chart_div').innerHTML = "no tenemos datos"
}