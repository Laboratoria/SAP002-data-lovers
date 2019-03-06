//PERU

const dataPaisUm = WORLDBANK["PER"]["indicators"][104]["data"][2013]
const dataDoisPaisUm = WORLDBANK["PER"]["indicators"][104]["data"][2014]
const dataTresPaisUm = WORLDBANK["PER"]["indicators"][104]["data"][2015]
const indPaisUm = WORLDBANK["PER"]["indicators"][104]["indicatorName"]
const nomePaisUm = WORLDBANK["PER"]["indicators"][104]["countryName"]

//BRASIL

const dataUmPaisDois = WORLDBANK["BRA"]["indicators"][74]["data"][2013]
const dataDoisPaisDois = WORLDBANK["BRA"]["indicators"][74]["data"][2014]
const dataTresPaisDois = WORLDBANK["BRA"]["indicators"][74]["data"][2015]
const nomeIndicPaisDois = WORLDBANK["BRA"]["indicators"][74]["indicatorName"]
const nomePaisPaisDois = WORLDBANK["BRA"]["indicators"][74]["countryName"]

//BRASIL

const nomePaisPaisTres = ''
const dataUmsPaisTres = ''
const dataDoisPaisTres = ''
const dataTresPaisTres = ''


      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', nomePaisUm, nomePaisPaisDois, nomePaisPaisTres],
          ['2013', dataPaisUm, dataUmPaisDois, dataUmsPaisTres],
          ['2014', dataDoisPaisUm, dataDoisPaisDois, dataDoisPaisTres],
          ['2015', dataTresPaisUm, dataTresPaisDois, dataTresPaisTres]
        ]);

        var options = {
          chart: {
            title: indPaisUm,
            subtitle: 'Nome Traduzido do Indicador',
          },
          bars: 'horizontal' // Required for Material Bar Charts.
        };

        var chart = new google.charts.Bar(document.getElementById('barchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }

      

