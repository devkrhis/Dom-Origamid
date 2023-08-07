// retorne a URL da pagina atual utilizando o objeto window

console.log(window.location.href)

// seleciona o primeiro elemento da pagina que possua classe ativo

const guardandoDados = document.querySelector('h1')
console.log(guardandoDados)

const pegandoClassAtiva = document.querySelector('.ativo')
console.log(pegandoClassAtiva)

// retorne a linguagem do navegador

const linguagemDoNavegador = navigator.language
console.log(linguagemDoNavegador)

// retorne a largura da janela

const larguraDaJanela =  window.screen
console.log(larguraDaJanela)