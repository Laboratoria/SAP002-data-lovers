const getJson = async function(file){
  const response = await fetch(file);
  const content = await response.json();
    return content;
  }
  
  const init = async function(){
    const content = await getJson('./data/lol/lol.json');

    let data = [];
      for(let key in content['data']){
          data.push(content['data'][key]);
      }
     
   
      const divShowChampions = document.querySelector(".item-show-champions");
      const categoriesChampions = document.querySelector(".drop-menu-categories");
      const sortChampions = document.querySelector(".drop-menu-order");
      const tableCalc = document.querySelector(".tableCalc");
      
      categoriesChampions.addEventListener("change", filteres);
      sortChampions.addEventListener("change", filteres);
      
      window.onload = filteres();

      function filteres() {
      
        let categoria = categoriesChampions.value;
        let filterData = [];
          
          if (categoria != 'none'){
            filterData = data.filter(championTag => (championTag['tags'].indexOf(categoria) >= 0));
           
          } else{
            filterData = data;
           
          }
          ordering(filterData);
      }
      
      function ordering(filteres) {
      
        let sort = sortChampions.value;
        let orderingData = [];
        if (sort == 'attack' || sort == 'defense' || sort == 'magic' || sort == 'difficulty') {
          orderingData = filteres.sort((a, b) => (a.info[sort] < b.info[sort] ? 1 : -1));
        } else if (sort == 'AZ') {
          orderingData = filteres.sort((a, b) => (a['name'] > b['name'] ? 1 : -1));
        } else if (sort == 'ZA') {
          orderingData = filteres.sort((a, b) => (a['name'] < b['name'] ? 1 : -1));
        } else {
          orderingData = filteres;
        }
        showAllChampions(orderingData);
        mostrarstatistica(orderingData);
      }
      
      function showAllChampions(dataOrdening) {
      
        divShowChampions.innerHTML = `
         ${dataOrdening.map((champion) => `
         <section class="champions-container">
             <div  class="show-champions">
               <div class='card card-color'>
               <div class='thefront'>
                    <img src="${champion['splash']}" class='champions-img' />
                   <div class="tex-name">
                      <h2 class="champion-name">${champion['name']}</h2>
                      <h3 class="champion-tag">${champion['tags'].join(' - ')}</h3>
                   </div>  
                   <div class= 'champion-info'> 
                    <ul class="info-list">                
                      <li class="info-list champion-info"> <img src="assets/img/icon-attack.png"/> Attack: ${champion.info['attack']}</h3>
                      <li class="info-list champion-info"> <img src="assets/img/icon-defense.png"/> Defense: ${champion.info['defense']}</h3>
                      <li class="info-list champion-info"> <img src="assets/img/icon-magic.png"/> Magic: ${champion.info['magic']}</h3>
                      <li class="info-list champion-info"> <img src="assets/img/icon-difficulty.png"/> Difficulty: ${champion.info['difficulty']}</h3>                
                    </ul>
                   </div>
                 </div>
                 <div class='theback'>
                    <h2 class="champion-name">${champion['name']}</h2>
                    <h3 class="champion-name">${champion['title']}</h3>
                    <h3 class="champion-info">Attack ${champion['blurb']}</h3>
                    <div><img src="${champion['splash']}" class='champions-img-back'/> </div>
                 </div>
               </div>
             </div>
           </section>
          `)}
       `
      }
      
      function mostrarstatistica(a){
       
        let forceAttack2 = a.map(forces => forces.info['attack']);
        let minForceAttack = forceAttack2.reduce((a, b) =>  Math.min(a, b));
        let maxForceAttack = forceAttack2.reduce((a, b) =>  Math.max(a, b));
        let somForceAttack = forceAttack2.reduce((a, b) => a + b);
        let medforceattack = parseInt(somForceAttack / forceAttack2.length);
      
        let forceDefense = a.map(forces => forces.info['defense']);
        let minForceDefense = forceDefense.reduce((a, b) =>  Math.min(a, b));
        let maxForceDefense = forceDefense.reduce((a, b) =>  Math.max(a, b));
        let somForceDefense = forceDefense.reduce((a, b) => a + b);
        let medforceDefense = parseInt(somForceDefense / forceDefense.length);

        let forceMagic = a.map(forces => forces.info['attack']);
        let minForceMagic = forceMagic.reduce((a, b) => Math.min(a, b));
        let maxForceMagic  = forceMagic.reduce((a, b) => Math.max(a, b));
        let somForceMagic  = forceMagic.reduce((a, b) => a + b);
        let medforceMagic  = parseInt(somForceMagic  / forceMagic.length);
        
        tableCalc.innerHTML = `
        
            <tr>
                <th></th>
                <th class="thborder">Attack</th>
                <th class="thborder">Defense</th>
                <th class="thborder">Magic</th>
              </tr>
              <tr>
                <th>Mín</th>
                <th>${minForceAttack}</th>
                <th>${minForceDefense}</th>
                <th>${minForceMagic}</th>
              </tr>
              <tr>
                <th>Média</th>
                <th>${medforceattack}</th>
                <th>${medforceDefense}</th>
                <th>${medforceMagic}</th>
              </tr>
              <tr>
                <th>Máx</th>
                <th>${maxForceAttack}</th>
                <th>${maxForceDefense}</th>
                <th>${maxForceMagic}</th>
              </tr>
          `
      }
  
    //------------------------DADOS P/ GRAFICO------------------------------------
  
    const objecSize = Object.getOwnPropertyNames(data).length;
   
    let attack = data.map(championInfo => (championInfo['info'].attack)).reduce((a, b) => a + b)/objecSize;
    let defense = data.map(championInfo => (championInfo['info'].defense)).reduce((a, b) => a + b)/objecSize;
    let difficulty = data.map(championInfo => (championInfo['info'].difficulty)).reduce((a, b) => a + b)/objecSize;
    let magic = data.map(championInfo => (championInfo['info'].magic)).reduce((a, b) => a + b)/objecSize;
  
   //------------------------GOOGLE CHARTS MÉDIA FORÇAS ------------------------------------
  
   google.charts.load('current', {packages: ['corechart', 'bar']});
   google.charts.setOnLoadCallback(drawAxisTickColors);
  
   function drawAxisTickColors() {
         var data = google.visualization.arrayToDataTable([
           ['Force', 'Media'],
           ['Attack',  attack],
           ['Defense',  defense],
           ['Dificult', difficulty],
           ['Magic',  magic],
           
         ]);
  
         var options = {
           title: 'Average strength of the champions',
           chartArea: {width: '55%'},
           backgroundColor: 'transparent', 
           titleTextStyle: {color: '#c9aa71', fontSize: 14} ,
           legend:{ textStyle: {color: '#c9aa71', fontSize: 12}},
           hAxis: { minValue: 0, maxValue: 10, textStyle: { bold: true, fontSize: 12, color: '#c9aa71' }},
           vAxis: { textStyle: { fontSize: 12, bold: true, color: '#c9aa71' }},
           colors: ['#d1d4d6'],
           is3D:true
         };
         var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
         chart.draw(data, options);
    }

   // --- GRÁFICO QUANTIDADE POR TIPO
  
   let assassin = data.map(championTag => (championTag['tags'].indexOf("Assassin") >= 0)).reduce((a, b) => a + b)
   let mage = data.map(championTag => (championTag['tags'].indexOf("Mage") >= 0)).reduce((a, b) => a + b)
   let marksman = data.map(championTag => (championTag['tags'].indexOf("Marksman") >= 0)).reduce((a, b) => a + b)
   let fighter = data.map(championTag => (championTag['tags'].indexOf("Fighter") >= 0)).reduce((a, b) => a + b)
   let tank = data.map(championTag => (championTag['tags'].indexOf("Tank") >= 0)).reduce((a, b) => a + b)
   let support = data.map(championTag => (championTag['tags'].indexOf("Support") >= 0)).reduce((a, b) => a + b)
   
   google.charts.load('current', {'packages':['corechart']});
   google.charts.setOnLoadCallback(drawChart);
  
   function drawChart() {
  
     var data = google.visualization.arrayToDataTable([    
       ['Categorie', 'total'],
       ['Assassin', assassin],
       ['Mage', mage],
       ['Marksman', marksman],
       ['Tank', tank],
       ['Support', support],
       ['Fighter', fighter]
     
     ]);
  
     var options = {
       title: 'Total champions by category ',
       width: 400,
       height: 340,
       backgroundColor: 'transparent',   
       colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#FFA500', '#ffb444', '#B22222'],
       is3D: true, 
       legend:{ textStyle: {color: '#c9aa71', fontSize: 12}} , 
       titleTextStyle: {color: '#c9aa71', fontSize: 14}    
       
     };
     var chart = new google.visualization.PieChart(document.getElementById('piechart'));
     chart.draw(data, options);
   }
   google.charts.load('current', {'packages':['corechart']});
   google.charts.setOnLoadCallback(drawChartTwo);
  
   function drawChartTwo() {
  
     var data = google.visualization.arrayToDataTable([    
       ['Categorie', 'total'],
       ['Only one Categorie',25 ],
       ['Two Categories', 109],
     ]);
  
     var options = {
       title: 'Total champions by category ',
       width: 400,
       height: 340,
       backgroundColor: 'transparent',   
       colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#FFA500', '#ffb444', '#B22222'],
       is3D: true, 
       legend:{ textStyle: {color: '#c9aa71', fontSize: 12}} , 
       titleTextStyle: {color: '#c9aa71', fontSize: 14}    
       
     };
     var chart2 = new google.visualization.PieChart(document.getElementById('piechart2'));
     chart2.draw(data, options);
   }
  
  }
  
  init();