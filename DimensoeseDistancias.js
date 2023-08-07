// Verifique a distancia da primeira imagem
// em relação ao topo da página

const topoPagina = document.querySelector('img')

console.log(topoPagina.offsetTop)

console.log(topoPagina.offsetWidth)

// retorne a soma da largura de todas as imagens
function somaImagens(){
    const imagens = document.querySelectorAll('img')
    imagens.forEach((img) => {
        const total = img.offsetWidth * imagens.length
        console.log("Total:", total)
    });
}
// Esse window.onload ele espera o carregamento para dai executar o codigo, sendo assim ele esperar carregar tudo e vai chamar a function que executa meu codigo.
window.onload = function(){
    somaImagens();
}

// Verifique se os links da página possuem o minimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const linksPagina = document.querySelectorAll('li a')
console.log(linksPagina)

const tamanhoDosLinks = linksPagina

linksPagina.forEach((linksDaPagina, index) => {
    const larguraItem = linksDaPagina.getBoundingClientRect();

    // Resposta do professor do desafio
    // const linksWidth = linksPagina.offsetWidth;
    // const offsetHeight = linksPagina.offsetHeight
    // fazer o if com esses dados dai.

    if(larguraItem.width >= 48 && larguraItem.height >= 48){
        console.log("O item do index", index, "foi aprovado", larguraItem)
    } else {
        console.log("O item do index", index, "não foi aprovado", larguraItem)
    }
})

// Se o browser for menor que 720px.
// adicione a classe menu-mobile ao menu

const browser = window.matchMedia('(max-width: 720px)'); // até no maximo 720px vai dar o match, se chegar até 720px vai dar true se não é false
const menu = document.querySelector('.menu')

if(browser.matches){
    console.log('Tela menor que 720px')
    menu.classList.add('menu-mobile')
    console.log(menu)
} else {
    console.log('Tela maior que 720px')
}