// Mostre no console cada parágrafo do site.

const paragrafo = document.querySelectorAll('p')
console.log(paragrafo)

// Mostre o texto dos paráfragos no console.

const textoParagrafo = document.querySelectorAll('p')

textoParagrafo.forEach((item) => {
    console.log(item.innerText)
})



// como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
    console.log(item, index);
})

let i = 0;
// imgs.forEach( => {
//     console.log(i++);
// });
// Forma corrigida
imgs.forEach(() => {
    console.log("i" + i++);
});

imgs.forEach(() => console.log(i++));