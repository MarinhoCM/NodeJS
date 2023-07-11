const livros = require('./listaLivros')
const precoLivros = [
    25, 15, 30, 50, 45, 20
];
let maisBarato = 0;

for (let i = 0; i < precoLivros.length; i++) {
    if(livros[i].preco < livros[maisBarato].preco){
        maisBarato = i;
    }
}
console.log(
    `O livro mais barato custa ${livros[maisBarato].preco}
     e seu titulo é ${livros[maisBarato].titulo}`
);
