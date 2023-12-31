/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
let championship = "Brasileiro";
console.log(championship)
/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
let teams = ["Ceará","Fortaleza","Vasco","Grêmio","Santos"];
console.log( 'Times que estão participando do campeonato:', teams );
/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(number){
    if(number <= 4){
        return `O time que está em ${number}º lugar é o ${teams[number]}.`;
    } else {
        return "Não temos a informação do time que está nessa posição.";
    }
}
/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(0))
console.log(showTeamPosition(1))
console.log(showTeamPosition(2))
console.log(showTeamPosition(3))
console.log(showTeamPosition(5))
/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
let num = 0;
while(num <= 30){
    console.log(num)
    num++
}
/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(cor=String){
    switch(cor){
        case 'branco':
            return `
            O hexadecimal para a cor ${cor} é "#FFFFFF".
            `;
        case 'vermelho':
            return `
            O hexadecimal para a cor ${cor} é "#FF0000".
            `;
        case 'azul':
            return `
            O hexadecimal para a cor ${cor} é "#0000FF".
            `;
        case 'amarelo':
            return `
            O hexadecimal para a cor ${cor} é "#FFFF00".
            `;
        case 'rosa':
            return `
            O hexadecimal para a cor ${cor} é "#FFC0CB".
            `;
        default:
            return `Não temos o equivalente hexadecimal para ${cor}.`
    }
}
/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('branco'))
console.log(convertToHex('vermelho'))
console.log(convertToHex('azul'))
console.log(convertToHex('amarelo'))
console.log(convertToHex('rosa'))
console.log(convertToHex('ciano'))
console.log(convertToHex('prata'))
console.log(convertToHex('magenta'))