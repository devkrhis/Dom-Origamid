// Duplique o menu e adicione ele em copy

const novoMenu = document.querySelector('.menu')
const copy = document.querySelector('.copy')
copy.appendChild(novoMenu)

console.log(copy)

// reposta do professor:
// const menu = document.querySelector('.menu');
// const copy = document.querySelector('.copy');
// const cloneMenu = menu.cloneNode(true);
//copy.apprendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq

const primeiraDT = document.querySelector('.faq-lista dt')
console.log(primeiraDT.innerHTML)

// Selecione o DD referente ao primeiro DT

//Resposta do professor:
// const proximoDD = primeiraDT.nextElementSibling

const selecionandoDD = document.querySelector('.faq-lista dd')
console.log(selecionandoDD.innerHTML)

// Substitua o conteúdo html de .faq pelo de .animais
const conteudo = document.querySelector('.faq')
const htmlfat = document.querySelector('.faq-lista')
const htmlanimais = document.querySelector('.animais')

conteudo.replaceChild(htmlanimais, htmlfat)

console.log(htmlfat)

// resposta do professor
// conteudo.innerHTML = htmlanimais.innerHTML 