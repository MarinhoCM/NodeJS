// const livro = {
//     nome: 'React Native',
//     editora: 'casa do codigo',
//     paginas: 185,
//     anunciar: function (){
//         console.log(
//             "indicamos o livro" ,
//             this.nome, '!'           
//         );
//     }
// };
// livro.anunciar()

// const livro = function(nome, editora, paginas){
//     gNome = nome,
//     gEditora = editora,
//     gPaginas = paginas
//     this.getNome = () => gNome;
//     this.getEditora = () => gEditora;
//     this.getPaginas = () => gPaginas;
// };
// const GraphQl = new livro('React Native', 'casa do codigo', 185);
// console.log(GraphQl.getNome());
// console.log(GraphQl.getEditora());
// console.log(GraphQl.getPaginas());

// console.log(typeof GraphQl); // object

// const nome = 'curso';
// // no javaScript funciona da mesma forma que 
// const temp = new String(nome)
// console.log(temp.toString()); // curso

// após o ES6 foi implementada a possibilidade de se utiliozar classes
//////////////////////
class Livro {
    constructor(nome, editora, paginas){
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    };
    anunciarTitulo(){
        console.log(`titulo: ${this.nome}`);
    };
    descreverTitulo(){
        console.log(
            `${this.nome} é um livro da editora`,
            `${this.editora} e tem ${this.paginas} páginas.`
        );
    };
};
const NodeJS = new Livro(
    'Curso de NodeJS', 'casa do codigo', 195
);
NodeJS.anunciarTitulo();
NodeJS.descreverTitulo();
console.log(typeof Livro); // return function

// Herança ------------------------------------------->
class LivroColecao extends Livro{
    constructor(nome, nomeColecao){
        super(nome);
        this.nomeColecao = nomeColecao;
    };
    descreverColecao(){
        console.log(
            `O livro ${Wthis.nome} faz parte da`,
            `coleção ${this.nomeColecao}`
        );
    };
};

const LogicaProgramacao = new LivroColecao(
    'Logica de Programação', 'comece a programar'
);
LogicaProgramacao.descreverColecao()
