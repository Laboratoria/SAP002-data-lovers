window.onload = function(){
    showIndicadores();
}

function getAno(){
    return Object.values(WORLDBANK)
    
  }
  console.log(getAno())
  
  
  function showIndicadores(){
    let productDiv = document.getElementById('products-div');
    productDiv.innerHTML = `
    ${getAno().map((indicador) => `
      <div class="product-item">
        <p>${indicador["indicators"][0]["indicatorName"]}</p>
      </div>`)}`
  }