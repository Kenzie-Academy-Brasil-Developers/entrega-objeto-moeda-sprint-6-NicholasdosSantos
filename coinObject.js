const container = document.querySelector('body');
const mainContainer = document.createElement('div');
const showArrResult = document.createElement('p');

container.appendChild(mainContainer);
mainContainer.id = 'mainContainer';
mainContainer.appendChild(showArrResult);
showArrResult.id = 'text';

const coin = {
    state: 0,

    flip: function randomNum(min, max){
    // Use "this.state" para acessar a propriedade "state".
    // Configure de forma randômica a propriedade “state” do
    // seu objeto moeda. "STATE" deve receber somente os valores 0 ou 1.
        min = Math.ceil(min);
        max = Math.floor(max);
        this.state = Math.floor(Math.random() * (max - min + 1)) + min;

        coin.toString()

        return this.state

    },
  
    toString: function () {
      // Se o valor de "state" for 0, retorne "Heads"
      // Se o valor de "state" for 1, retorne "Tails"
      if(this.state === 0){
          this.state = "Heads"
          return this.state
      }else{
          this.state = "Tails"
          return this.state
      }
    },
  
    toHTML: function (res) {
      const image = document.createElement("img");
      mainContainer.appendChild(image);
      
      // Colocar uma imagem correspondente a essa valor.
      // image.alt = "Heads/Tails"

      if(res === "Heads"){
        image.src = "./images/heads.png"
        image.alt = "Heads"
      }else {
        image.src = "./images/tails.png"
        image.alt = "Tails"
      }
      
      return image;
    },
};


// Use um loop para arremessar a moeda 20 vezes.
// Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
// Além de exibir os resultados na página, não esqueça
// de retornar o valor de "results".
// Caso esqueça de retornar "results", sua função não
// irá passar nos testes.

function display20Flips() {
const results = [];

for(let i = 0; i < 20; i++){
  let res = coin.flip(0,1)
  results.push(res)
}
showArrResult.innerHTML = `Resultados: ${results.join(', ')}`
return results

}
display20Flips()

// Use um loop para arremessar a moeda 20 vezes.
// Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
// Além de exibir os resultados na página, não esqueça
// de retornar o valor de "results".
// Caso esqueça de retornar "results", sua função não
// irá passar nos testes.

function display20Images(results) {
  console.log(results)
  for(let i = 0; i < results.length; i++){
    coin.toHTML(results[i])
    
  } 
  return results
}
display20Images(display20Flips())