// Crie uma variável chamada casa que execute as seguintes operações:
// Atribua um objeto a variável com as propriedades:
// quartos = 2
// tipo = “casa”
// endereco = “rua teste 123 – ZS”

const casa = {
    Quartos: 2,
    Tipo: "casa",
    endereco: "Rua comendador de araujo 12"
};

console.log(casa.Tipo, "com", casa.Quartos, "quartos localizada na", casa.endereco);

let produtos = {
    videos : {
        comedia: ["comedia1","comedia2"],
        romance: ["romance1", "romance2"]
    },
    revistas : [
        moda  = ["lalala", "lililili"],
        saude  = ["lalala", "lililili"],
    ],
    jogos : {
        rpg: ["rpg1", "rpg2", "rpg3"],
        acao: ["acao1", "God of War"]
    }
}

console.log(produtos.jogos.acao[1])

let objetoTexto = {
    linha1: "Olá",
    linha2: "Estudando o que?"
}

objetoTexto.linha1 = "Olá mundo"
objetoTexto.linha2 = "Estou estudando javascript"

console.log(objetoTexto.linha1, objetoTexto.linha2)

// Criar um novo objeto

function Localizacao(inserirCidade, inserirEstado){
    this.cidade = inserirCidade,
    this.estado = inserirEstado + inserirCidade
    cep: {
        this.numero = 83405310
        this.numeroRua = 118
    }
}

const krhistopher = new Localizacao()
const clodoaldo = new Localizacao()
clodoaldo.cidade = 'Uberaba'
clodoaldo.endereco = 'Curitiba'
clodoaldo.numero = 10101010
console.log(clodoaldo)
console.log(krhistopher)

const lucas = new Localizacao("colombo", "Paraná")
lucas.numeroRua = 13
lucas.viagem = 'Novo Parametro Adicionado'
console.log(lucas)

const josue = new Localizacao('bolivia', "Argentina")
console.log(josue)


// Transforme o objeto abaixo em uma Constructor Function

// const pessoa = {
//     nome: 'Nome Pessoa',
//     idade: 0,
//     andar(){
//         console.log(this.nome + ' andou')
//     }
// }
function Pessoa(nomeDaPessoa, idadeDaPessoa) {
    this.nome = nomeDaPessoa
    this.idade = idadeDaPessoa
    this.andar = function(){
        return this.nome + ' andou'
    }
}

const seuJoao = new Pessoa('João', 20)
const srtaMaria = new Pessoa('Maria', 25)
const srBruno = new Pessoa('Bruno', 15)
console.log(seuJoao)
console.log(seuJoao.andar())
console.log(srtaMaria.andar())
console.log(srBruno.andar())



// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos.


// Crie uma constructor function (Dom) para manipulação de listas
// de elementos do dom. Deve conter as seguintes propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(elements,classe){
    this.elements = function(){
        return document.querySelectorAll(elements)
    };
    this.adicionarClasse = function(){
        this.elements().forEach(allElements => {
            allElements.classList.add(classe)
        })
    }
    this.removerClasse = function(){
        this.elements().forEach(allElements => {
            allElements.classList.remove(classe)
        })
    }

}

const pegandoItens = new Dom('li', 'h2')
console.log(pegandoItens.adicionarClasse())
pegandoItens.removerClasse()


//pegue os dados da lista, percorra todos eles, mostre na tela e adicione a classe ativo.

function pegandoDados(lista){
    this.lista = function (){
        return document.querySelectorAll(lista)
    }
    this.adicionarAtivoAll = function(){
        console.log(this.lista)
        this.lista().forEach(element => {
            return element.classList.add('ativo')
        });
    }
    this.removerAtivoAll = function (){
        this.lista().forEach(removendoItens => {
            return element.classList.remove('ativo')
        })
    }
}

const salvandoDados = new pegandoDados('li')
console.log(salvandoDados.lista())
console.log(salvandoDados.adicionarAtivoAll())
// console.log(salvandoDados.removerAtivoAll())


// RESPOSTA DO PROFESSOR DO ULTIMO DESAFIO:

function Resposta(seletor){
    const elementList = document.querySelectorAll(seletor)
    this.elements = elementList;
    this.addClass = function(classe){
        elementList.forEach((element) => {
            element.classList.add(classe)
        })
    }
    this.removerClass = function(classe){
        elementList.forEach((element) => {
            element.classList.remove(classe)
        })
    }
}

const listaItens = new Dom('li');
const ul = new Dom('ul');

ul.addClass('ativar-ul');
listaItens.addClass('ativar');
listaItens.removerClasse('ativar')