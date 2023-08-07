// Quando o usuário clicar nos links internos do site.
// adicione a classe ativo ao item clicado e remova dos demais itens caso eles
// poussuam a mesma. Previna o coportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]')
console.log(linksInternos)

function linksAtribuido(e){
    e.preventDefault()
    linksInternos.forEach((itens) => {
        if(itens.querySelectorAll('Ativo') ){
            itens.classList.remove('Ativo')
            e.currentTarget.classList.add('Ativo')
        }
        console.log(itens)
    })
    console.log(e)
}

linksInternos.forEach((links) => {
    links.addEventListener('click', linksAtribuido)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('body *')
console.log(todosElementos)

function qualItem(e){
    console.log("Você clicou no seguinte item:", e.currentTarget)
}

todosElementos.forEach((itensGerais) => {
    itensGerais.addEventListener('click', qualItem)
})



// Utilizando o código anterior, ao invés de mostrar no console.
// remova o elemento que está sendo clicado, o método remove() remove um elemento

const removeElementos = document.querySelectorAll('body *')
console.log(removeElementos)

function removeItem(eventoRemove){
    const element = eventoRemove.currentTarget
    element.remove()
}

removeElementos.forEach((itemRemovido) => {
    itemRemovido.addEventListener('click', removeItem)
})



// se o usuário clicar na tecla (t), aumente todo o texto do site.

const todoSite = document.querySelector('body')

function mudaTexto(eventoTexto){
    if(eventoTexto.key === 't'){
        document.documentElement.classList.toggle('texto')
    }
}

todoSite.addEventListener('keydown', mudaTexto)