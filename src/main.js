const getJson = async function(file){
  const response = await fetch(file);
  const content = await response.json();
    return content;
  }
  
  const init = async function(){
    const content = await getJson('src/data/lol/lol.json');

    let data = [];
      for(let key in content['data']){
          data.push(content['data'][key]);
      }
        
      const divShowChampions = document.querySelector(".js-show-champions");
      const categoriesChampions = document.querySelector(".js-drop-menu-categories");
      const sortChampions = document.querySelector(".js-drop-menu-order");
      const tableCalc = document.querySelector(".js-table-calc");
      
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
        showEstatistic(orderingData);
      }
      
      function showAllChampions(dataOrdening) {
      
        divShowChampions.innerHTML = `
         ${dataOrdening.map((champion) => `
         <section class="champions-container box-alignment">
             <div  class="show-champions">
               <div class='card text-color card-color general-color-back'>
               <div class='card-front'>
                    <img src="${champion['splash']}" class='champions-img' />
                   <div class="card-border">
                      <h2 class="champion-name">${champion['name']}</h2>
                      <h3 class="champion-tag">${champion['tags'].join(' - ')}</h3>
                   </div>  
                   <div class= 'champion-info box-alignment'> 
                    <ul class="ibox-alignment">                
                      <li class="box-alignment color-table-info champion-info"> <img src="assets/img/icon-attack.png"/> Attack: ${champion.info['attack']}</h3>
                      <li class="box-alignment color-table-info champion-info"> <img src="assets/img/icon-defense.png"/> Defense: ${champion.info['defense']}</h3>
                      <li class="box-alignment color-table-info champion-info"> <img src="assets/img/icon-magic.png"/> Magic: ${champion.info['magic']}</h3>
                      <li class="box-alignment color-table-info champion-info"> <img src="assets/img/icon-difficulty.png"/> Difficulty: ${champion.info['difficulty']}</h3>                
                    </ul>
                   </div>
                 </div>
                 <div class='card-back'>
                    <h2 class="champion-name">${champion['name']}</h2>
                    <h3 class="champion-name">${champion['title']}</h3>
                    <h3 class="champion-info color-table-info">Attack ${champion['blurb']}</h3>
                    <div><img src="${champion['splash']}" class='champions-img-back'/> </div>
                 </div>
               </div>
             </div>
           </section>
          `)}
       `
      }
      
      function showEstatistic(a){
       
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
        <table class=" box-alignment text-color table" >
            <tr>
                <th></th>
                <th>Attack</th>
                <th>Defense</th>
                <th>Magic</th>
              </tr>
              <tr>
                <th>Mín</th>
                <th class="color-table-info">${minForceAttack}</th>
                <th class="color-table-info">${minForceDefense}</th>
                <th class="color-table-info">${minForceMagic}</th>
              </tr>
              <tr>
                <th>Média</th>
                <th class="color-table-info">${medforceattack}</th>
                <th class="color-table-info">${medforceDefense}</th>
                <th class="color-table-info">${medforceMagic}</th>
              </tr>
              <tr>
                <th>Máx</th>
                <th class="color-table-info">${maxForceAttack}</th>
                <th class="color-table-info">${maxForceDefense}</th>
                <th class="color-table-info">${maxForceMagic}</th>
              </tr>
         </table>  
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
           width: 420,
           height: 240,
           chartArea: {width: '42%'},
           backgroundColor: 'transparent', 
           titleTextStyle: {color: '#c9aa71', fontSize: 14} ,
           legend:{ textStyle: {color: '#c9aa71', fontSize: 12}},
           hAxis: { minValue: 0, maxValue: 10, textStyle: { bold: true, fontSize: 12, color: '#c9aa71' }},
           vAxis: { textStyle: { fontSize: 12, bold: true, color: '#c9aa71' }},
           colors: ['#d1d4d6'],
           is3D:true
         };
         var chart = new google.visualization.BarChart(document.getElementById('js-bar-chart'));
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
       width: 420,
       height: 240,
       backgroundColor: 'transparent',   
       colors: ['#ffd88f', '#c9aa71', '#e6693e', '#7f796e', '#457bb2', '#ffb444'],
       is3D: true, 
       legend:{ textStyle: {color: '#c9aa71', fontSize: 12}} , 
       titleTextStyle: {color: '#c9aa71', fontSize: 14}    
       
     };
     var chart = new google.visualization.PieChart(document.getElementById('js-pie-chart'));
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
       width: 420,
       height: 240,
       backgroundColor: 'transparent',   
       colors: ['#7f796e', '#457bb2'],
       is3D: true, 
       legend:{ textStyle: {color: '#c9aa71', fontSize: 12}} , 
       titleTextStyle: {color: '#c9aa71', fontSize: 14}    
       
     };
     var chart2 = new google.visualization.PieChart(document.getElementById('js-pie-chart-two'));
     chart2.draw(data, options);
   }
  
  }
  
  init();