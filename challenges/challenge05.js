/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let myArray = [1,2,3,4,5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArray(Array){
    return Array;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
array = getArray(myArray);
console.log(array[1]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function twoParameters(arrayWithValues, number){
    return arrayWithValues[number];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let otherArray = [1, "marin", 1.2, false, ];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(twoParameters(otherArray, 0))
console.log(twoParameters(otherArray, 1))
console.log(twoParameters(otherArray, 2))
console.log(twoParameters(otherArray, 3))
console.log(twoParameters(otherArray, 4))
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName){
    let object = {
        book1:{
            quantidadePaginas: Number(13),
            autor: String('marin'),
            editora: String('editora')
        }, book2:{
            quantidadePaginas: Number(13),
            autor: String('marin'),
            editora: String('editora')
        }, book3:{
            quantidadePaginas: Number(13),
            autor: String('marin'),
            editora: String('editora')
        }
    }
    return object[bookName];
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book("book1"))
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(
    `O livro "book1"
     tem ${book("book1")["quantidadePaginas"]} páginas!`
);
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(
    `O autor do livro "book2" é ${book("book2")["autor"]}.`
);
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(
    `O livro "book3" foi publicado pela 
    editora ${book("book2")["editora"]}.`
);