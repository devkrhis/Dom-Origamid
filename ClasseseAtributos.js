// Adicione a classe ativa a todos os itens do menu.

const menu = document.querySelectorAll(".menu li a")

menu.forEach((item) => {
    item.classList.add('ativo')
})

console.log(menu)

// Remove a classe ativa de todos os itens do menu e mantenha apenas no primeiro

const removeItemMenu = document.querySelectorAll(".menu li a")

removeItemMenu.forEach((item, index) => {
    if(index > 0){
        item.classList.remove('ativo')
    }
    console.log(index, item)
})

console.log(removeItemMenu)

// Verifique se as imagens possuem o atributo alt

const imagensAlt = document.querySelectorAll('img')
console.log(imagensAlt)

imagensAlt.forEach((imagens) => {
    if(imagens.hasAttribute('alt')){
        console.log("Possui", imagens)
    } else {
        console.log("Não possui", imagens)
    }

    // resposta do professor
    // const possuiAtributo = img.hasAttribute('alt');
    // console.log(imagens, possuiAtributo)
    
})

console.log("imagensAlt",imagensAlt)

// Modifique o href do link externo do menu

const linkMenu = document.querySelector('.menu [href^="https://"]')

linkMenu.href = "teste"
console.log("linkmenu",linkMenu)

// resposta do professor
// linkMenu.setAttribute('href', 'https://www.gogole.com')