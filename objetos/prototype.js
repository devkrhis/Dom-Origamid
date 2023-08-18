// Cria um função construtora de Pessoas deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne o nome completo da pessoa.
function Prototipe(nome, sobrenome, idade){
    return nome + sobrenome + idade
}

const nomes = new Prototipe("Krhistopher", " Kauling" , " Novak")


// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document


// Liste os construtores dos dados abaixo

const li = document.querySelector('li');

li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft
li.click();

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;