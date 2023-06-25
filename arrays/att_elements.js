// crie uma lista de chamada com os seguintes alunos:
// João, Ana, Caio, Lara, Marjorie, Leo
// porém, a Ana e o Caio mudaram de escola e o Rodrigo
// entrou nesta sala. Atualize a lista
const chamada = [
    'João', 'Ana', 'Caio', 
    'Lara', 'Marjorie', 'Leo'
];
//O primeiro parâmetro do método splice() é o índice
// do elemento que queremos remover. Portanto, para 
//remover o nome de Ana, passamos o índice 1:
// O segundo parâmetro é a quantidade de itens que queremos
// remover a partir desse índice. Logo, para remover o nome
// de Ana e de Caio, informaremos o valor 2:
chamada.splice(1, 2); // ou chamada.splice(1, 2, 'Rodrigo');
chamada.push('Rodrigo');
console.log(`chamada: [${chamada}]`);
