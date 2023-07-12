const livros = require('./listaLivros');

function insertionSort(list){
    for(let i = 0; i < list.length; i++){
        let analisys = i;
        while (analisys > 0 && list[analisys].preco < list[analisys - 1].preco){
            let itemAnalise = list[analisys];
            let itemAnterior = list[analisys -1 ];
            list[analisys] = itemAnterior;
            list[analisys - 1] = itemAnalise;
            analisys--
        }
    }
    console.log(list)
}
insertionSort(livros)