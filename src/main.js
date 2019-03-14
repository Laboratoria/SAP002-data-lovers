window.onload= function() {
	allPokemon();
};

function getPokemon (){
	return POKEMON['pokemon'];
    
};

const orderAzSelect = document.getElementById('orderAz');

orderAzSelect.addEventListener('change', function(){
	const sortedPokemons = getPokemon().sort(function(a,b) => a.name.localeCompare(b.name));
	
	if(orderAzSelect.selectedIndex === 1){
		return renderSortedPokemons(sortedPokemons);
	}else if(orderAzSelect.selectedIndex === 2){
		return renderSortedPokemons(sortedPokemons.reverse());
	}else {
		alert('Selecione uma opção!');
	};
});

function renderSortedPokemons (pokemons){
	const showPokemon = document.getElementById('show-pokemon');
	showPokemon.innerHTML= buildPokemonsView(pokemons)
};

function buildPokemonsView(pokemons) {
	return pokemons.map((i) =>`
		<div class='list-pokemon'>
			<img src='${i.img}' class= 'pokemon-img'/>
			<div class= text-name> 
				<h3 class='pokemon-name'>${i.name}</h3>
			</div>
		</div>
	`).join('');
}

const eggKmSelect = document.getElementById('eggKm')
eggKmSelect.addEventListener('change', function(){
   
	if(eggKmSelect.selectedIndex === 1){
		showNotInEggs();
	}else if(eggKmSelect.selectedIndex === 2){
		showKm2();
	}else if(eggKmSelect.selectedIndex === 3){
		showKm5();
	}else if(eggKmSelect.selectedIndex === 4){
		showKm10();
	}else{ return alert('Selecione uma opção!');
	};
});

function allPokemon (){
	let showPokemon = document.getElementById('show-pokemon');

	showPokemon.innerHTML= ` 
	${getPokemon().map((monster) =>`
		<div class='list-pokemon'>
			<img src='${monster['img']}' class= 'pokemon-img'/>
			<div class= text-name> 
				<h3 class='pokemon-name'>${monster['name']}</h3>
			</div>
			<div class='text-type'>
				<p class='pokemon-type'>${monster['num']}</p>
			</div>
		</div>
		`).join('')
	}`
};

function showNotInEggs (){
	let showPokemon = document.getElementById('show-pokemon');
	let eggFilter = getPokemon().filter((pokemon) => pokemon.egg ==='Not in Eggs');
	
	showPokemon.innerHTML=` 
	${eggFilter.map((eggFilter)  => `
		<div class='list-pokemon'>
			<img src='${eggFilter.img}' class= 'pokemon-img'/>
			<div class= text-name> 
				<h3 class='pokemon-name'>${eggFilter.name}</h3 >
			</div>
			<div class='text-type'>
				<p class='pokemon-type'>${eggFilter.egg}</p>
			</div>
		</div>
		`).join('')
	}`
};

function showKm2 (){
	let showPokemon = document.getElementById('show-pokemon');
	let eggFilter = getPokemon().filter((pokemon) => pokemon.egg ==='2 km');
	
	showPokemon.innerHTML=` ${eggFilter.map((eggFilter)  => `
		<div class='list-pokemon'>
			<img src='${eggFilter.img}' class= 'pokemon-img'/>
			<div class= text-name> 
				<h3 class='pokemon-name'>${eggFilter.name}</h3 >
			</div>
			<div class='text-type'>
				<p class='pokemon-type'>${eggFilter.egg}</p>
			</div>
		</div>
		`).join('')
	}`
};
   
function showKm5 (){
	let showPokemon = document.getElementById('show-pokemon');
	let eggFilter = getPokemon().filter((pokemon) => pokemon.egg === '5 km');

	showPokemon.innerHTML=` ${eggFilter.map((eggFilter)  => `
		<div class='list-pokemon'>
			<img src='${eggFilter.img}' class= 'pokemon-img'/>
			<div class= text-name> 
				<h3 class='pokemon-name'>${eggFilter.name}</h3 >
			</div>
			<div class='text-type'>
				<p class='pokemon-type'>${eggFilter.egg}</p>
			</div>
		</div>
		`).join('')
	}`
};

function showKm10 (){
	let showPokemon = document.getElementById('show-pokemon');
	let eggFilter = getPokemon().filter((pokemon) => pokemon.egg ==='10 km');
	
	showPokemon.innerHTML=` ${eggFilter.map((eggFilter)  => `
		<div class='list-pokemon'>
			<img src='${eggFilter.img}' class= 'pokemon-img'/>
			<div class= text-name> 
				<h3 class='pokemon-name'>${eggFilter.name}</h3 >
			</div>
			<div class='text-type'>
				<p class='pokemon-type'>${eggFilter.egg}</p>
			</div>
		</div>
		`).join('')
	}`
};
   
const candySelect = document.getElementById("candy");
candySelect.addEventListener("change", function(){
	if(candySelect.selectedIndex === 1){ 
		google.charts.load("current", {"packages":["corechart"]});
		google.charts.setOnLoadCallback(drawGraphic);
	}else{alert("Selecione uma opção!")};
});

function drawGraphic() {
	let candy = getPokemon().map(monster => monster.candy_count);
	let candyFilter = candy.filter(i => typeof i ==="number");
	let candyTotal = candyFilter.reduce((acc,cur) => acc+cur);
	let result = candyTotal/candyFilter.length;
	
	let max = candyFilter.reduce(function(a,b){
		return Math.max(a,b);
	});

	let min = candyFilter.reduce(function(a,b){
		return Math.min(a,b);
	});

	let data = google.visualization.arrayToDataTable([
		['média de candy', "quantidade"],
		['Média de candy por pokémon', result],
		['Máximo de candy por pokémon', max],
		['Mínimo de candy por pokémon', min],
	]);

	let options = {
		title: "Candy's",
		pieHole: 0.4,
	};

	let chart = new google.visualization.PieChart(document.getElementById('graphic'));
	chart.draw(data, options);
};

let clearAz = document.getElementById("orderAz")
let clearEgg  = document.getElementById("eggKm")
let clearCandy = document.getElementById("candy")

clearAz.addEventListener("change", function(){
  clearEgg.selectedIndex=0;
	document.getElementById('graphic').innerHTML="";
});

clearAz.addEventListener("change", function(){
	clearCandy.selectedIndex=0;
	document.getElementById('graphic').innerHTML="";
});

clearEgg.addEventListener("change", function(){
	clearAz.selectedIndex=0;
	document.getElementById('graphic').innerHTML="";
});

clearEgg.addEventListener("change", function(){
	clearCandy.selectedIndex=0;
	document.getElementById('graphic').innerHTML="";
});

clearCandy.addEventListener("change", function(){
	clearAz.selectedIndex=0;
	document.getElementById('show-pokemon').innerHTML="";
});

clearCandy.addEventListener("change", function(){
	clearEgg.selectedIndex=0;
	document.getElementById('show-pokemon').innerHTML="";
});




